'use strict';

// Articles controller
angular.module('busstops').controller('BusStopsController', ['$scope', 'BusStops',
	function($scope, BusStops) {
		$scope.find = function() {
			$scope.busstops = BusStops.query();
		};
	}
]);
