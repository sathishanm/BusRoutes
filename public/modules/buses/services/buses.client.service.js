'use strict';

angular.module('buses').factory('Buses', ['$resource',
	function($resource) {
		return $resource('buses/:busId', {
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
