(function() {
'use strict';

angular.module('Scribe')
.factory('d3', ['$window',
  function($window) {
    return $window.d3;
  }
]);

})();
