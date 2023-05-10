export default ({ env }) => {
  const saveUrls = env("SAVE_URLS");

  if (!saveUrls || typeof saveUrls !== "string") {
    throw new Error("SAVE_URLS is not defined or is not a string: " + saveUrls);
  }

  const saveUrlsArray = saveUrls.split(",");

  return [
    "strapi::errors",
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:", ...saveUrlsArray],
            "img-src": [
              "'self'",
              "data:",
              "blob:",
              "dl.airtable.com",
              ...saveUrlsArray,
            ],
            "media-src": [
              "'self'",
              "data:",
              "blob:",
              "dl.airtable.com",
              ...saveUrlsArray,
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    "strapi::security",
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
  ];
};
