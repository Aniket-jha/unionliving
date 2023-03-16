'use strict';

/**
 * community-survey service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::community-survey.community-survey');
