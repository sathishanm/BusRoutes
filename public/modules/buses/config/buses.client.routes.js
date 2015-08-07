'use strict';

angular.module('buses').config(['$routeProvider',
	function($routeProvider) {
		// Users state routing
		$routeProvider.
		when('/buses', {
			templateUrl: 'modules/buses/views/list-buses.client.view.html',
            controller: 'BusesController'
		});
	}
]);
