this is just a blueprint for nodejs monorepos with docker
docker is not allowing code reusablitiy in dockerfiles and it is--it will effect readability
this file should be used as a reference for the dockerfile in the root of every package

```dockerfile
FROM node:16-alpine AS base

# the prune layer
FROM base AS prune
ARG package
WORKDIR /app
COPY . .
RUN npx turbo prune --scope ${package} --docker

# the install layer
FROM base AS install_build
WORKDIR /app
COPY --from=prune /app/out/json/ .
COPY --from=prune /app/out/package-lock.json ./package-lock.json
RUN npm install
COPY --from=prune /app/out/full/ .

# the build "layer"
ARG package
RUN npx turbo build --filter ${package}
# if the package output is /dist
COPY --from=install $path/$package/dist ./dist

# you can use a lighter image as a run layer, but I find this high maintenance
FROM gcr.io/distroless/nodejs:18
WORKDIR /app
COPY --from=install_build /dist .
USER noroot
EXPOSE 6969
CMD ["index.js"]

# the run layer
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs
EXPOSE 6969
CMD ["sleep", "infinity"]
WORKDIR ["npm", "run", "start", "--prefix", "dist"]
```

using with docker-compose
careful with directory here they are a bit trip-y

```yaml
version: '3.8'
services:
  app:
    build:
      context: ../../
      dockerfile: ./apps/pkg/Dockerfile # relative to context & the content of this file is relative to context and should be alway at the root of the monorepo
    ports:
      - 6969:6969
    command: ['npm', 'run', 'start', '--prefix', 'dist'] # or "-w", "app"
    env_file:
      - ./.env
```

directory structure is expected (more or less)
```
.
├── package.json
├── package-lock.json           # a new lock file, a subset
├── turbo.json
├── apps/${pkg}
│   └── { ... }                 # source code
├── out                         # `turbo prune ...` result
│   ├── package-lock.json       # a new lock file, a subset
│   ├── full
│   │   ├── package.json
│   │   ├── turbo.json
│   │   └── apps/${pkg}
│   │       └── { ... }         # source code
│   └──  json
│       ├── apps/${pkg}
│       │   └── package.json
│       └── package.json
└── dist
.   └── { ... }                 # build layer result
```


packages like sqlite3 require node-gyp [see here](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/troubleshooting.md) and [here](https://github.com/nodejs/node-gyp#installation)

```dockerfile
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python; \
  python3 -m ensurepip; \
  pip3 install --no-cache --upgrade pip setuptools

RUN apk add --update make; \
  apk add build-base; \
  npm install -g node-gyp
```

just for reference I made a container that runs a cloudflare tunnel that sometime can be helpfull

```dockerfile
WORKDIR /usr/bin
RUN wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 ; \
  chmod 550 cloudflared-linux-amd64 ; \
  chown 1000:1000 cloudflared-linux-amd64; \
  npm i -g concurrently
```
