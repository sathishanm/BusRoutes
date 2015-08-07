'use strict';

/**
 * Module dependencies.
 */
var buses = require('../../app/controllers/buses.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/buses')
		.get(buses.list);

};
