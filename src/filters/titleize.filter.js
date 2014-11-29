(function() {
'use strict';

angular.module('Scribe')
.filter('titleize', Titleize);

function Titleize() {
  return function(s) {
    return s.titleize();
  };
}

}());
