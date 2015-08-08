'use strict';

angular.module('busstops').factory('BusStops', ['$resource',
	function($resource) {
		return $resource('busstops/:id');
	}
]);
