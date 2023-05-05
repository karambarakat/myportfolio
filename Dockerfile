# syntax=docker/dockerfile:1
FROM node:18-alpine AS base

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
WORKDIR /app
COPY . .
RUN npx turbo prune --scope strapi --docker

# the install layer
FROM base_gyp AS install_build
WORKDIR /app
COPY --from=prune /app/out/json/ .
COPY --from=prune /app/out/package-lock.json ./package-lock.json
RUN npm install
COPY --from=prune /app/out/full/ .
RUN npm run build -w strapi


# the run layer
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "run", "start", "-w", "strapi"]
