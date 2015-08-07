'use strict';

angular.module('busstops').config(['$routeProvider',
	function($routeProvider) {
		// Users state routing
		$routeProvider.
		when('/busstops', {
			templateUrl: 'modules/busstops/views/list-busstops.client.view.html',
            controller: 'BusStopsController'
		}).
		when('/addbusstop', {
			templateUrl: 'modules/busstops/views/add-new-busstop.html',
            controller: 'NewBusStopController'
		});
	}
]);
