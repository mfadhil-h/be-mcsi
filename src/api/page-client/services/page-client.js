'use strict';

/**
 * page-client service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-client.page-client');
