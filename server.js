const strapi = require('@strapi/strapi');
process.env.NODE_ENV = 'production';
strapi(/* {...} */).start();