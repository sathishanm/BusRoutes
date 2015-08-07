'use strict';

angular.module('busstops').factory('BusStops', ['$resource',
	function($resource) {
		return $resource('busstops/:articleId', {
			articleId: '@_id'
		}, {
			query: {
				method: 'GET',
                params: {},
                isArray: true
			}
		});
	}
]);
