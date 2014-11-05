(function() {
'use strict';

angular.module('Scribe', ['ngRoute', 'ngResource'])
.config(['$httpProvider', 'settingsProvider', config]);

function config($httpProvider, settingsProvider) {
  $httpProvider.defaults.cache = true;
  settingsProvider.setId(2419634);
}

})();
