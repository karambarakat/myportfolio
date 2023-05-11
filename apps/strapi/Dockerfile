# syntax=docker/dockerfile:1
FROM node:18-alpine AS base
RUN npm i -g pnpm@7.28.0

FROM base AS base_gyp
RUN npm i -g turbo
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

ENV CI=true
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store/v3\
  pnpm install --frozen-lockfile
COPY --from=prune /monorepo/out/full .
RUN pnpm --filter strapi run build


# the run layer
FROM base AS run
WORKDIR /monorepo
COPY --from=install_build /monorepo .
RUN mkdir -p apps/strapi/database/migrations \
  chown node apps/strapi/database/migrations \
  mkdir -p apps/strapi/migrations \
  chown node apps/strapi/migrations
USER node
EXPOSE 8080
CMD ["pnpm", "run", "--filter", "strapi", "start"]
# CMD ["sleep", "infinity"]
