use std::{ops::Not, sync::Arc};

use axum::{body::Body, Router};
use cms_for_rust::axum_router::AxumRouter;
use cms_for_rust::schema_prelude::*;
use hyper::Request;
use sqlx::{Pool, Postgres};
use tower::Layer;
use tower::Service;

schema! {
    db = "sqlx::Postgres",
}

#[entity]
pub struct Project {
    pub title: String,
    pub done: bool,
    pub description: Option<String>,
}

#[entity]
pub struct Topic {
    pub title: String,
}

relations!( many_to_many Project Topic );

#[tokio::main]
async fn main() {
    let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let pool = Pool::<Postgres>::connect(&database_url).await.unwrap();

    let router: Router<()> = Router::new()
        .layer(SimpleBearerAuth::default())
        .nest("projects", Project::router())
        .with_state(pool);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:1337").await.unwrap();

    axum::serve(listener, router).await.unwrap();
}

#[derive(Debug, Clone)]
struct SimpleBearerAuth(Arc<String>);

impl Default for SimpleBearerAuth {
    fn default() -> Self {
        std::env::var("BEARER_TOKEN")
            .map(Arc::new)
            .map(SimpleBearerAuth)
            .expect("BEARER_TOKEN must be set")
    }
}

impl<Route> Layer<Route> for SimpleBearerAuth {
    type Service = SimpleBearerAuthMiddleware<Route>;
    fn layer(&self, inner: Route) -> Self::Service {
        SimpleBearerAuthMiddleware {
            token: self.0.clone(),
            route: inner,
        }
    }
}

#[derive(Debug, Clone)]
struct SimpleBearerAuthMiddleware<S> {
    token: Arc<String>,
    route: S,
}

impl<Route> Service<Request<Body>> for SimpleBearerAuthMiddleware<Route>
where
    Route: Service<Request<Body>>,
    Route::Future: Send + 'static,
{
    type Response = Route::Response;
    type Error = Route::Error;
    type Future = Route::Future;

    fn poll_ready(
        &mut self,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Result<(), Self::Error>> {
        self.route.poll_ready(cx)
    }

    fn call(&mut self, req: Request<Body>) -> Self::Future {
        let auth = req
            .headers()
            .get("Authorization")
            .expect("authorization has to be set")
            .to_str()
            .expect("authorization has to be valid UTF-8");

        if auth.starts_with("Bearer ").not() {
            panic!("only Bearer tokens are accepted")
        }

        let bearer = auth[7..].to_owned();

        if bearer != self.token.as_ref().as_ref() {
            panic!("auth failed")
        }

        self.route.call(req)
    }
}

#[cfg(test)]
#[tokio::test]
async fn test_basic_bearer() {
    use axum::routing::get;
    use axum::Router;

    let axum = Router::<()>::new()
        .route("/", get(|| async { "Hello, World!" }))
        .layer(SimpleBearerAuth::default());
}
