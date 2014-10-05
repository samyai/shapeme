'use strict';

/**
 * @ngdoc overview
 * @name shapemeApp
 * @description
 * # shapemeApp
 *
 * Main module of the application.
 */
angular
    .module('shapeme')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/landing', {
                templateUrl: 'page/landing/template.html',
                controller: 'LandingController'
            })
            .when('/home', {
                templateUrl: 'page/home/template.html',
                controller: 'HomeController'
            })
            .when('/profile', {
                templateUrl: 'page/profile/template.html',
                controller: 'ProfileController'
            })
            .otherwise({
                redirectTo: '/landing'
            });
    });

angular
    .module('config', [])
    .constant('CONFIG', {
        'SITE_URL': 'http://shapeme.fr'
    });
