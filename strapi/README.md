# 🚀 Strapi as a CMS

This is the root directory for the backend of my portfolio.

The database is SQLite, this is perfect for the following reasons:

- I'm not planning to deploy the backend to any cloud, instead I will trigger the updates via a Cloudflare Tunnel.
- I'm not expecting the project to scale up greatly, so scaling up vertically is not a problem

# Integrating with NextJS

Via webhook, this project is configured upon any change in content to invalidate the desired resource by sending an HTTP request to the Nextjs frontend ull `<fronend>/api/revalidate`. in return the frontend will fetch data from my localhost vial the Cloudflare Tunnel.

NextJS is enough to build, fetch and serve data without connecting to some backend on every request.

# Cloudflare Tunnel

this app can be accessed online through Cloudflare tunnel.

you only have to provide two enviroment variables

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

1. this project depends on better-sqlite, and for some reason there is environment requirement to build it like installing node-gyp, python and C/C++ compiler etc see [here](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/troubleshooting.md)
2. I can have better integration with cloudflare tunnels.
3. I can update the schema freely during development, because docker take care of the production process and helps with versioning schema
4. versioning schema is safer and possible by simple image tag, at any time I can run old image version of my app.

to build run:

```
docker build -t strapi-portfolio:$version .
```

then tun via:

```
docker run \
  -v $volume:/usr/src/app/.tmp \
  --env-file .env \
  strapi-portfolio:$version
```
