'use strict';

angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.services',
  'weatherApp.directives',
  'weatherApp.controllers',
  "iso-3166-country-codes"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'parts/forecast.html', controller: 'weatherCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
