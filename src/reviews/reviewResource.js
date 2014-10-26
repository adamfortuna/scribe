(function() {
'use strict';

angular.module('Scribe')
.factory('ReviewResource', ReviewResource);

function ReviewResource($resource) {
  return $resource('http://api.'+window.location.host+'/users/:id', {}, {});
}
ReviewResource.$inject = ['$resource'];

}());
