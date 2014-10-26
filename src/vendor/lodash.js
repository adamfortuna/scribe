(function() {
'use strict';

angular.module('Scribe')
.factory('_', ['$window',
  function($window) {
    return $window._;
  }
]);

})();
