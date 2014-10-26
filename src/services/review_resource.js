(function() {
'use strict';

angular.module('Scribe')
.factory('ReviewResource', ReviewResource);

function ReviewResource($resource, settings) {
  return $resource(
    settings.apiUrl+'/users/'+settings.id+'/books/:id',
    {},
    {}
  );
}
ReviewResource.$inject = ['$resource', 'settings'];

}());
