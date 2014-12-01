(function() {
'use strict';

angular.module('Scribe')
.factory('ReviewResource', ReviewResource);

ReviewResource.$inject = ['$resource', 'settings'];
function ReviewResource($resource, settings) {
  return $resource(settings.apiUrl+'/users/'+settings.id+'/books/:id', {}, {});
}

}());
