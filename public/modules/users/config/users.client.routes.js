'use strict';

// Setting up route
angular.module('users').config(['$routeProvider',
	function($routeProvider) {
		// Users state routing
		$routeProvider.
		when('/settings/profile', {
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html',
            controller: 'SettingsController'
		}).
		when('/settings/password', {
			templateUrl: 'modules/users/views/settings/change-password.client.view.html',
            controller: 'SettingsController'
		}).
		when('/signup', {
			templateUrl: 'modules/users/views/authentication/signup.client.view.html',
            controller: 'AuthenticationController'
		}).
		when('/signin', {
			templateUrl: 'modules/users/views/authentication/signin.client.view.html',
            controller: 'AuthenticationController'
		});
	}
]);
