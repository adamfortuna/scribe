(function() {
'use strict';

angular.module('Scribe')
.factory('toDate', function() {
  return function(date) {
    return Date.parse(date);
  };
});

})();
