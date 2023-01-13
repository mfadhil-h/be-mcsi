module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": [
            "youtube.com",
            "www.youtube.com",
            "https://bid.g.doubleclick.net",
          ],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "https://www.google-analytics.com",
            "https://ssl.google-analytics.com",
            "https://*.googletagmanager.com",
            "https://www.googleadservices.com",
            "https://googleads.g.doubleclick.net",
            "https://*.google.com",
            "https://*.google.co.id",
            "https://www.recaptcha.net",
          ],
          "connect-src": [
            "'self'",
            "https://*.google-analytics.com",
            "https://*.analytics.google.com",
            "https://*.googletagmanager.com",
          ],
          "img-src": [
            "'self'",
            "data:",
            "https://*.google-analytics.com",
            "https://*.googletagmanager.com",
            "https://www.google.com",
            "https://www.google.co.id",
            "https://i.ytimg.com",
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
