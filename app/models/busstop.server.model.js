'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BusStopSchema = new Schema({
	name: {
		type: String,
		default: '',
        required: 'Name cannot be blank'
	},
    'location': {
        type: {
            type: String,
            default: 'Point',
            enum: ['Point', 'LineString', 'Polygon'],
            required: true
        },
        coordinates: []
    }
});

mongoose.model('BusStop', BusStopSchema);
