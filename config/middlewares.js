module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": ["youtube.com", "www.youtube.com"],
          "script-src": [
            "'self'",
            "'script-src'",
            "'unsafe-inline'",
            "'script-src-elem",
            "www.google-analytics.com",
            "www.googletagmanager.com",
            "google-analytics.com",
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

  "global::nuxtSPA",
];
