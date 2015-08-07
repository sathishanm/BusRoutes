'use strict';

/**
 * Module dependencies.
 */
var busstops = require('../../app/controllers/busstops.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/busstops')
		.get(busstops.list)
		.post(busstops.add);


};
