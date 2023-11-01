FROM node

WORKDIR /usr/src/app

COPY strapi/package*.json ./

RUN npm install

COPY strapi .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
