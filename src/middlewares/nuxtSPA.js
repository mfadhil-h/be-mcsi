const fs = require('fs');
const path = require('path');

// Middleware to support Nuxtjs SPA on strapi public folder
// PLEASE TAKE NOTE : This middleware only tested on 2 level Nuxt pages ex /news/{_id}
//
// 2022 - Zhaky
module.exports = (config, { strapi }) => {
    const adminPath = strapi.config.admin.path.replace("/", '')
    const apiPath = strapi.config.api.rest.prefix.replace("/", '')
    const ignoredPath = [apiPath, adminPath, "uploads", "_nuxt"]

    const staticDir = path.resolve(strapi.config.server.dirs.public)
    return async (ctx, next) => {
        let paths = ctx.request.url.split('/')
        if (paths.length > 2 && ctx.request.method == 'GET' && !ignoredPath.includes(paths[1])) {
            paths[paths.length - 1] = 'index.html'

            ctx.type = 'html';
            ctx.body = fs.createReadStream(path.join(staticDir + paths.join("/")));
        }
        await next();
    };
};