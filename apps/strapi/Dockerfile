# syntax=docker/dockerfile:1
FROM node:18-alpine AS base

FROM base AS base_gyp
RUN npm i -g turbo pnpm
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python; \
  python3 -m ensurepip; \
  pip3 install --no-cache --upgrade pip setuptools

RUN apk add --update make; \
  apk add build-base; \
  npm install -g node-gyp


# the prune layer
FROM base_gyp AS prune
WORKDIR /monorepo
COPY . .
RUN pnpm exec turbo prune --scope strapi --docker

# the install layer
FROM base_gyp AS install_build
WORKDIR /monorepo
COPY --from=prune /monorepo/out/json .
COPY --from=prune /monorepo/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=prune /monorepo/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install
COPY --from=prune /monorepo/out/full .
RUN pnpm --filter strapi run build


# the run layer
EXPOSE 8080
CMD ["pnpm", "run", "-filter", "strapi", "start"]
# CMD ["sleep", "infinity"]
