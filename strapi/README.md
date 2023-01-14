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
