'use strict';

// Articles controller
angular.module('buses').controller('BusesController', ['$scope', 'Buses',
	function($scope, Buses) {
		$scope.find = function() {
			$scope.buses = Buses.query();
		};
	}
]);
