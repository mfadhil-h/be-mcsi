const fs = require('fs');
const path = require('path');

// Middleware to support Nuxtjs SPA on strapi public folder
// PLEASE TAKE NOTE : This middleware only tested on 2 level Nuxt pages ex /news/{_id}
//
// 2022 - Zhaky
module.exports = (config, { strapi }) => {
    const adminPath = strapi.config.admin.path.replace("/", '')
    const apiPath = strapi.config.api.rest.prefix.replace("/", '')
    const restrictedPath = [apiPath, adminPath, "uploads", "_nuxt"]

    const staticDir = path.resolve(strapi.config.server.dirs.public)
    return async (ctx, next) => {
        let paths = ctx.request.url.split('/')
        if (paths.length > 2 && ctx.request.method == 'GET' && !restrictedPath.includes(paths[1])) {
            serveRelativeIndex(ctx, staticDir, paths)
        }
        await next();

        // fallback to root index html if strapi return 404 on non restricted path
        if (ctx.request.method == 'GET' && !restrictedPath.includes(paths[1]) && ctx.response.status == 404) {
            ctx.type = 'html';
            ctx.body = fs.createReadStream(path.join(staticDir + "/index.html"));
        }
    };
};


// Serve index.html on each respective folder
function serveRelativeIndex(ctx, staticDir, paths) {
    paths[paths.length - 1] = 'index.html'
    let indexPage = path.join(staticDir + paths.join("/"));

    if (fs.existsSync(indexPage)) {
        ctx.type = 'html';
        ctx.body = fs.createReadStream(indexPage);
    } else if (paths.length > 2) {
        paths.pop()
        serveRelativeIndex(ctx, staticDir, paths)
    }
}