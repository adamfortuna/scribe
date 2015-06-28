(function() {
'use strict';

angular.module('Scribe')
.factory('UserResource', UserResource);

UserResource.$inject = ['$resource', 'settings'];
function UserResource($resource, settings) {
  return $resource(settings.apiUrl+'/users/:id.json', {}, {});
}

}());
