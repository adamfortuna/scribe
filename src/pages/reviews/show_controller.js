(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewShowController', ReviewShowController);

function ReviewShowController(ReviewResource, $routeParams, $sce, FilterService) {
  this.review = ReviewResource.get({ id: $routeParams.id });

  this.addFilter = function(filter, value) {
    FilterService.applyFilter(filter, value);
  };
}

ReviewShowController.$inject = ['ReviewResource', '$routeParams', '$sce', 'FilterService'];

}());
