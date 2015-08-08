'use strict';

angular.module('busstops').config(['$routeProvider',
	function($routeProvider) {
		// Users state routing
		$routeProvider.
		when('/busstops', {
			templateUrl: 'modules/busstops/views/list-busstops.client.view.html',
            controller: 'BusStopsController'
		}).
        when('/busstops/near', {
            templateUrl: 'modules/busstops/views/show-busstop-near.client.view.html',
            controller: 'BusStopsController'
        }).
        when('/busstops/:stopId', {
            templateUrl: 'modules/busstops/views/show-busstop.client.view.html',
            controller: 'BusStopsController'
        }).
		when('/addbusstop', {
			templateUrl: 'modules/busstops/views/add-new-busstop.html',
            controller: 'NewBusStopController'
		});
	}
]);
