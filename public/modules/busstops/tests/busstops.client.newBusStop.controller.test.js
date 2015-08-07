'use strict';

(function() {
    describe('NewBusStopController', function() {
        var NewBusStopController,
            scope,
            $httpBackend,
            $location;

    	beforeEach(module(ApplicationConfiguration.applicationModuleName));
        
        beforeEach(inject(function($controller, $rootScope, _$location_, _$httpBackend_) {
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $location = _$location_;
            NewBusStopController = $controller('NewBusStopController', {
                $scope: scope
            });
        }));

        it('$scope.addBusStop() should add a bus stop', function() {
            var stop = {
                name: 'Jayanagara 9th Block',
                location: {
                    type: 'Point',
                    coordinates: [10, 10]
                }
            };

            $httpBackend.expectPOST('/busstops', stop).respond(201);
            scope.stopname=stop.name;
            scope.lat = stop.location.coordinates[0];
            scope.longitude = stop.location.coordinates[1];
            scope.addBusStop();
            $httpBackend.flush();

            expect(scope.IsBusStopAdded).toBe(true);
        });

        it('$scope.addBusStop() should handle error condition', function() {
            var stop = {
                name: 'Jayanagara 9th Block',
                location: {
                    type: 'Point',
                    coordinates: [10, 10]
                }
            };

            $httpBackend.expectPOST('/busstops', stop).respond(500);
            scope.stopname=stop.name;
            scope.lat = stop.location.coordinates[0];
            scope.longitude = stop.location.coordinates[1];
            scope.addBusStop();
            $httpBackend.flush();

            expect(scope.IsBusStopAdded).toBe(false);
        });
    });
}());
