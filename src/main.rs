use axum::middleware::Next;
use axum::response::{IntoResponse, Response};
use axum::{body::Body, Router};
use axum::{middleware, Json};
use cms_for_rust::axum_router::AxumRouter;
use cms_for_rust::schema_prelude::*;
use hyper::{Request, StatusCode};
use serde_json::json;
use sqlx::{Pool, Postgres};
use std::ops::Not;

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

relations!(many_to_many Project Topic);

#[tokio::main]
async fn main() {
    #[cfg(debug_assertions)]
    dotenv::dotenv().expect("dotenv failed to load");

    let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    let pool = Pool::<Postgres>::connect(&database_url)
        .await
        .unwrap();

    let router: Router<()> = Router::new()
        // .route("
        .nest(
            "/project",
            Project::router().layer(middleware::from_fn(
                basic_auth_impl,
            )),
        )
        .route(
            "/",
            axum::routing::any(|| async { "API works" }),
        )
        .with_state(pool);

    let listener =
        tokio::net::TcpListener::bind("0.0.0.0:1337")
            .await
            .unwrap();

    axum::serve(listener, router).await.unwrap();
}

lazy_static::lazy_static! {
    static ref TOKEN: String = {
        std::env::var("BEARER_TOKEN")
            .expect("BEARER_TOKEN must be set")
    };
}

async fn basic_auth_impl(
    req: Request<Body>,
    next: Next,
) -> Response {
    let auth = req
        .headers()
        .get("Cookie")
        .ok_or("authorization header is not set");

    let auth = match auth {
        Ok(ok) => ok.to_str().map_err(|_| "invalid UTF-8"),
        Err(err) => Err(err),
    };

    let auth = match auth {
        Ok(auth) => {
            if auth.starts_with("token=Bearer ").not() {
                Err("start with Bearer")
            } else {
                Ok(auth)
            }
        }
        Err(err) => Err(err),
    };
    let auth = match auth {
        Ok(auth) => {
            let bearer = auth[13..].to_owned();

            if bearer.eq(&TOKEN.as_ref()).not() {
                Err("invalid token")
            } else {
                Ok(())
            }
        }
        Err(err) => Err(err),
    };

    #[cfg(debug_assertions)]
    if let Err(err) = auth {
        return (StatusCode::UNAUTHORIZED, err)
            .into_response();
    }
    #[cfg(not(debug_assertions))]
    if auth.is_err() {
        return StatusCode::UNAUTHORIZED.into_response();
    }

    next.run(req).await
}
