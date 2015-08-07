'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Buses = mongoose.model('Buses'),
	_ = require('lodash');

exports.list = function(req, res) {
	Buses.find({},{'name':1}).exec(function(err, buses) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(buses);
		}
	});
};

