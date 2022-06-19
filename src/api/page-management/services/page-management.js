'use strict';

/**
 * page-management service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-management.page-management');
