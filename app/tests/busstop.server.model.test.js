'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	BusStop = mongoose.model('BusStop');

var stop;

describe('BusStop Model Unit Tests:', function() {
	beforeEach(function(done) {
		stop = new BusStop({
            name: 'Blue Field Garden',
			location: {
                type: 'Point',
                coordinates: [13.06549, 77.55272]
            }
		});

		stop.save(function() {
			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return stop.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		BusStop.remove().exec(done);
	});
});
