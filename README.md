# 🚀 Strapi as a CMS

Strapi makes it easy to build fast graphQL api for my application.

This is the root directory for the backend is `strapi`.

The database is SQLite, this is perfect for the following reasons:

- I'm not planning to deploy the backend to any cloud, instead I will trigger the updates via a Cloudflare Tunnel.
- I'm not expecting the project to scale up substantially, so sqlite scaling up vertically is not a problem

# Integrating with NextJS

Via webhook, this project is configured upon any change in content to invalidate the desired resource by sending an HTTP request to the Next.js frontend ull `<frontend>/api/revalidate`. in return the frontend will fetch data from my localhost via the Cloudflare Tunnel.

Next.js is structured in a way where it only need to fetch data upon content updates, it can handles custom api request, routing and view building on its own.

# Cloudflare Tunnel

this app can be accessed online through Cloudflare tunnel.

you only have to provide two environment variables

```
tunnel_token=eyJhxxxxxxxxxxxxxxxx
tunnel_id=xxxxxxx-xxxx-xxxx-xxxx-xxxx
```

you can obtain tunnel_token via running

```
cloudflared tunnel token $token_id
```

# Dockerize

I have dockerize this strapi app for the following reasons:

1. Strapi depends on better-sqlite, and for some reason there is environment requirement to build it like installing node-gyp, python and C/C++ compiler etc, see [here](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/troubleshooting.md)
2. I can have better integration with cloudflare tunnels.
3. I can update the schema freely during development, because docker take care of the production process and helps with versioning schema
4. versioning schema is safer and possible by simple image tag, at any time I can run old image version of my app.

to build run:

```
docker build -t strapi-portfolio:$version .
```

then run via:

```
docker run \
  -v $volume:/usr/src/app/.tmp \
  --env-file .env \
  strapi-portfolio:$version
```
