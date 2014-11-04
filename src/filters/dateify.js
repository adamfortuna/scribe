(function() {
'use strict';

angular.module('Scribe')
.filter('dateify', Dateify);

function Dateify() {
  return function(date) {
    return Date.parse(date);
  };
}

}());
