'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Every day at 00:00:00 (ss:mm:hh).
   */
  '@daily': async () => {
    try {
      await strapi.services['log'].delete()
    } catch (e) {
      console.log(e)
    }
  }
};