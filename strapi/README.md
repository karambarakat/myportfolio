# 🚀 Strapi as a CMS

This is the root directory for the backend of my portfolio.

The database is SQLite, this is perfect for the following reasons:

- I'm not planning to deploy the backend to any cloud, instead I will trigger the updates via a Cloudflare Tunnel.
- I'm not expecting the project to scale up greatly, so scaling up vertically is not a problem

# Integrating with NextJS

Via webhook, this project is configured upon any change in content to invalidate the desired resource by sending an HTTP request to the Nextjs frontend ull `<fronend>/api/revalidate`. in return the frontend will fetch data from my localhost vial the Cloudflare Tunnel.

NextJS is enough to build, fetch and serve data without connecting to some backend on every request.

# Cloudflare Tunnel

to update, create or delete content you have to:

1. (only once) set up tunnel via cli by running:

```
npm run cf:init
```

create `cloudflare_tunnel_secret.json` and `cloudflare_tunnel.yaml` from the results of the previuse command

then setup a dns record:

```
npm run cf:dns
```

2. run the app through

```
npm run run
```

you can now visit localhost:1337 or $backend_url to log in into your dashboard

# Dockerize

I have dockerize this strapi app for the following reasons:

1. this project depends on better-sqlite, and for some reason there is environment requirement to build it like installing node-gyp, python and C/C++ compiler etc see [here](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/troubleshooting.md)
2. I can have better integration with cloudflare tunnels.
3. I can update the schema freely during development, because docker take care of the production process and helps with versioning schema
4. versioning schema is safer and possible by simple image tag, at any time I can run old image version of my app.
