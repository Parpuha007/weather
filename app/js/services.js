'use strict';
angular.module('weatherApp.services', ['ngResource'])

  .value('exampleLocations',['Moscow'])
  
  .factory('openWeatherMap', function($resource) {

    var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

    return $resource(apiBaseUrl + ':path/:subPath?q=:location',
      {
        APPID: apiKey,
        callback: 'JSON_CALLBACK',
        units: 'metric'
      },
      {
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily'
          }
        }
      }
    )
  });

