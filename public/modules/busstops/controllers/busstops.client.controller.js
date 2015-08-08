'use strict';

// Articles controller
angular.module('busstops').controller('BusStopsController', ['$scope', '$routeParams', '$q', 'BusStops',
	function($scope, $routeParams, $q, BusStops) {
        $scope.marker = {
            lat: 0,
            lng: 0,
            zoom: 17,
        };

        $scope.markers = {
            location: {
                lat: 0,
                lng: 0,
                focus: true,
                draggable: false
            }
        };

        $scope.get = function() {
            $scope.busstop = BusStops.get({id: $routeParams.stopId});
            $scope.busstop.$promise.then(function(busstop) {
                $scope.marker.lat = busstop.location.coordinates[0];
                $scope.marker.lng = busstop.location.coordinates[1];
                $scope.markers.location.lat = busstop.location.coordinates[0];
                $scope.markers.location.lng = busstop.location.coordinates[1];
                $scope.markers.location.message = busstop.name;
            });
        };

		$scope.find = function() {
			$scope.busstops = BusStops.query();
		};
	}
]);
