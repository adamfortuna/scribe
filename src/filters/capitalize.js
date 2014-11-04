(function() {
'use strict';

angular.module('Scribe')
.filter('capitalize', Capitalize);

function Capitalize() {
  return function(s) {
    return s[0].toUpperCase() + s.slice(1);
  };
}

}());
