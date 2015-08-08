'use strict';

(function() {
    describe('BusStopController', function() {
        var BusStopsController,
            scope,
            $httpBackend,
            $routeParams,
            $location,
            sampleStops;

    	beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

  		beforeEach(module(ApplicationConfiguration.applicationModuleName));
        
        beforeEach(inject(function($controller, $rootScope, _$routeParams_, _$location_, _$httpBackend_) {
            scope = $rootScope.$new();
            $routeParams = _$routeParams_;
            $httpBackend = _$httpBackend_;
            $location = _$location_;
            BusStopsController = $controller('BusStopsController', {
                $scope: scope
            });
            sampleStops = [{
                name: 'Jayanagara 9th Block',
                location: {
                    type: 'Point',
                    coordinates: [10, 10]
                }
            }];
        }));

        it('$scope.find() should get a list of bus stops from the backend', function() {
            $httpBackend.expectGET('busstops').respond(sampleStops);
            scope.find();
            $httpBackend.flush();
            expect(scope.busstops).toEqualData(sampleStops);
        });

        it('$scope.get() should get a single bus stop', function() {
            $routeParams.stopId = '10';
            $httpBackend.expectGET('busstops/10').respond(sampleStops[0]);
            scope.get();
            $httpBackend.flush();
            expect(scope.busstop).toEqualData(sampleStops[0]);
        });
    });
}());
