'use strict';

/**
 * contact-inbox service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-inbox.contact-inbox');
