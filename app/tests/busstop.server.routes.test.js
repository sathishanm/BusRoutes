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

	it('should be able to add a new busstop', function(done) {
        request.agent(app).post('/busstops').
        	send({
	    		'name': 'sandh-stop',
	   			'location':{
	        	'type':'Polygon',
	         	'coordinates':[]
    		}
			})
        	.expect(200)
            .end(function(busStopErr, busStopSaveRes) {
				done();
			});
	});			

    it('should be able to get a single busstop', function(done) {
        var busstopId = busstop._id;
        request.agent(app).get('/busstops/' + busstopId)
            .expect(200)
            .end(function(err, res) {
                res.body.name.should.equal('Jayanagara 9th Block');
                done();
            });
    });

	afterEach(function(done) {
		BusStop.remove().exec(done);
	});
});
