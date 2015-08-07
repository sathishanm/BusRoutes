'use strict';

angular.module('busstops').config(['$routeProvider',
	function($routeProvider) {
		// Users state routing
		$routeProvider.
		when('/busstops', {
			templateUrl: 'modules/busstops/views/list-busstops.client.view.html',
            controller: 'BusStopsController'
		});
	}
]);
