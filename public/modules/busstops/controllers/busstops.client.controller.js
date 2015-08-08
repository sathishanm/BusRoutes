'use strict';

// Articles controller
angular.module('busstops').controller('BusStopsController', ['$scope', '$routeParams', '$q', 'BusStops',
	function($scope, $routeParams, $q, BusStops) {
        $scope.center = {
            lat: 0,
            lng: 0,
            zoom: 17
        };

        $scope.error = '';

        $scope.markers = [];

        $scope.get = function() {
            $scope.busstop = BusStops.get({id: $routeParams.stopId});
            $scope.busstop.$promise.then(function(busstop) {
                var marker = {};
                $scope.center.lat = busstop.location.coordinates[0];
                $scope.center.lng = busstop.location.coordinates[1];
                marker.lat = busstop.location.coordinates[0];
                marker.lng = busstop.location.coordinates[1];
                marker.message = busstop.name;
                marker.focus = true;
                $scope.markers = [marker];
            });
        };

        $scope.getUserLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function success(position) {
                    $scope.center.lat = position.coords.latitude;
                    $scope.center.lng = position.coords.longitude;
                    $scope.findNear(position.coords.latitude, position.coords.longitude);
                }, function error() {
                    $scope.error = 'Error while calculating your current location. You may need to change your Privacy settings in your browser';
                    $scope.$apply();
                });
            } else {
                $scope.error = 'Your browser does not support getting location';
                $scope.$apply();
            }
        };

		$scope.find = function() {
			$scope.busstops = BusStops.query();
		};

        $scope.findNear = function(lat, lng) {
            var markers = [];
            $scope.busstops = BusStops.findNear(lat, lng);
            $scope.busstops.$promise.then(function(busstops) {
                busstops.forEach(function(stop) {
                    var marker = {
                        lat: stop.location.coordinates[0],
                        lng: stop.location.coordinates[1],
                        message: stop.name
                    };
                    markers.push(marker);
                });
                $scope.markers = markers;
            });
        };
	}
]);
