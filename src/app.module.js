(function() {
'use strict';

angular.module('Scribe', ['ngRoute', 'ngResource'])
.config(['$httpProvider', config]);

function config($httpProvider) {
  $httpProvider.defaults.cache = true;
}

})();
