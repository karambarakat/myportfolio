/**
 * `custom` middleware
 */

import { Strapi } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Strapi }) => {
  strapi.log.info("welcome back to myPortfolio");
  // Add your own logic here.
  return async (ctx, next) => {
    await next();
  };
};
