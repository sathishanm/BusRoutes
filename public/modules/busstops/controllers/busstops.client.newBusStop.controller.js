'use strict';

// Articles controller
angular.module('busstops').controller('NewBusStopController', ['$scope', '$http','$location',
	function($scope, $http, $location) {
		$scope.addBusStop = function()
		{

			var newBusStopInfo = {
				'location': {'coordinates': [$scope.lat, $scope.longitude], 'type': 'Point'}, 
				'name': $scope.stopname
			};
			$http.post('/busstops', newBusStopInfo).
			  then(function(response) {
			  	$scope.IsBusStopAdded = true;
			  	$location.path('/busstops');
			    
			  }, function(response) {
		  			$scope.IsBusStopAdded = false;
			    	alert('Error occured adding bus stop');
			  });
		};
	}
]);
