'use strict';

(function() {
    describe('BusStopController', function() {
        var BusStopsController,
            scope,
            $httpBackend,
            $location;

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
        
        beforeEach(inject(function($controller, $rootScope, _$location_, _$httpBackend_) {
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $location = _$location_;
            BusStopsController = $controller('BusStopsController', {
                $scope: scope
            });
        }));

        it('$scope.find() should get a list of bus stops from the backend', function() {
            var stop = {
                name: 'Jayanagara 9th Block',
                location: {
                    type: 'Point',
                    coordinates: [10, 10]
                }
            };

            var sampleStops = [stop];

            $httpBackend.expectGET('busstops').respond(sampleStops);
            scope.find();
            $httpBackend.flush();

            expect(scope.busstops).toEqualData(sampleStops);
        });
    });
}());
