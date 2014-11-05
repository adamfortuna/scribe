(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewShowController', ReviewShowController);

function ReviewShowController($routeParams, _, FilterService, reviewsPrepService) {
  var vm = this;
  vm.addFilter = FilterService.applyFilter
  vm.review = {};
  vm.isbn = $routeParams.id;

  reviewsPrepService.$promise.then(function(reviews) {
    vm.review = _.find(reviews, function(review) {
      return review.book.isbn = vm.isbn;
    });
  });
}

ReviewShowController.$inject = ['$routeParams', '_', 'FilterService', 'reviewsPrepService'];

}());
