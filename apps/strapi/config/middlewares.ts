export default ({ env }) => {
  const saveUrls = env("SAVE_URLs");

  const saveUrlsArray = typeof saveUrls !== "string" ? [] : saveUrls.split(",");

  return [
    "strapi::errors",
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:"],
            "img-src": [
              "'self'",
              "data:",
              "blob:",
              "dl.airtable.com",
              "*.amazonaws.com",
              ...saveUrlsArray,
            ],
            "media-src": [
              "'self'",
              "data:",
              "blob:",
              "dl.airtable.com",
              "*.amazonaws.com",
              ...saveUrlsArray,
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
    "global::custom",
  ];
};
