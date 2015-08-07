'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	BusStop = mongoose.model('BusStop'),
	_ = require('lodash');

exports.list = function(req, res) {
	BusStop.find().exec(function(err, busstops) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(busstops);
		}
	});
};

exports.add = function(req, res) {
	
	console.log(req.body);
	var busstop = new BusStop(req.body);
	console.log(busstop);

	busstop.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(busstop);
		}
	});

};

