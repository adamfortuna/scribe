(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewShowController', ReviewShowController);

function ReviewShowController(ReviewResource, $routeParams) {
  this.review = ReviewResource.get({ id: $routeParams.id });
}

ReviewShowController.$inject = ['ReviewResource', '$routeParams'];

}());
