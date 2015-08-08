'use strict';

angular.module('busstops').factory('BusStops', ['$resource',
	function($resource) {
		var BusStopResource = $resource('busstops/:id');
        BusStopResource.findNear = function(lat, lng) {
            return BusStopResource.query({lat: lat, lng:lng});
        };
        return BusStopResource;
	}
]);
