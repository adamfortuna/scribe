(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewsIndexController', ReviewsIndexController);

function ReviewsIndexController(reviewsPrepService) {
  var vm = this;
  vm.reviews = reviewsPrepService;

  reviewsPrepService.$promise.then(function(reviews) {

    vm.reviews = _.filter(reviews, function(review) {
      return review.started_at && review.read_at;
    });
  });
}

ReviewsIndexController.$inject = ['reviewsPrepService'];

}());
