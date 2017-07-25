'use strict';

angular.module('weatherApp.directives', [])

  .directive('weatherPanel',[function factory() {
    return {
      scope: {
        useDayForecast: '=showEntry',
        forecast: '=weatherPanel'
      },

      templateUrl: 'parts/wp.html',

      link: function(scope) {
        scope.getIconImageUrl = function(iconName) {
          return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
        };
      }
    }
  }])




