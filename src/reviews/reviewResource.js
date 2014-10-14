angular.module('Scribe').factory('ReviewResource', function($resource) {  
  return $resource('http://api.'+window.location.host+'/users/:id', {}, {});
});
