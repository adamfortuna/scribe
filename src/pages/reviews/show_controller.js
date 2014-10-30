(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewShowController', ReviewShowController);

function ReviewShowController(ReviewResource, $routeParams, $sce) {
  this.review = ReviewResource.get({ id: $routeParams.id }, function(review) {
    this.description = $sce.trustAsHtml(review.book.description.replace(/^\s+|\s+$/g, ''));
  }.bind(this));
}

ReviewShowController.$inject = ['ReviewResource', '$routeParams', '$sce'];

}());
