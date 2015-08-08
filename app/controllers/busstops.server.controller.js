'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	BusStop = mongoose.model('BusStop'),
	_ = require('lodash');

exports.list = function(req, res) {
    var query;
    if (req.query.lat && req.query.lng) {
        query = BusStop.find({'location.coordinates':
                    {$near: { $geometry: 
                                {'type':'Point', 'coordinates':[req.query.lat, req.query.lng]},
                     $maxDistance: 500}}});
    } else {
        query = BusStop.find();
    }
	query.exec(function(err, busstops) {
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
	var busstop = new BusStop(req.body);

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

exports.find = function(req, res) {
    res.json(req.busstop);
};

exports.getStopById = function (req, res, next, id) {
  BusStop.findById(id).exec(function (err, busstop) {
    if (err) {
      return next(err);
    } else if (!busstop) {
      return res.status(404).send({
        message: 'No bus stop with that identifier has been found'
      });
    }
    req.busstop = busstop;
    next();
  });
};
