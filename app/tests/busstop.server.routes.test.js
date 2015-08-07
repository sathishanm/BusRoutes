'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	BusStop = mongoose.model('BusStop'),
	agent = request.agent(app);

/**
 * Globals
 */
var busstop;

describe('BusStop CRUD tests', function() {
	beforeEach(function(done) {
		busstop = new BusStop({
            name: 'Jayanagara 9th Block',
            location: {
                type: 'Point',
                coordinates: [12.92069, 77.60533]
            }
		});

		busstop.save(done);
	});


	it('should be able to get a list of articles if not signed in', function(done) {
        request(app).get('/busstops').end(function(req, res) {
            var return_data = res.body;
            console.log(return_data);
            res.body.should.be.an.Array.with.lengthOf(1);
            done();
		});
	});

	afterEach(function(done) {
		BusStop.remove().exec(done);
	});
});
