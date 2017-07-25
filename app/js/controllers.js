'use strict';

angular.module('weatherApp.controllers', [])

  .controller('weatherCtrl',
    ['$scope','openWeatherMap','exampleLocations','ISO3166',
      function($scope,openWeatherMap,exampleLocations,ISO3166) {

    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: exampleLocations[ 0 ]
    });

    $scope.getForecastByLocation = function() {
      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };

  }])

