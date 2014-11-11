(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewsIndexController', ReviewsIndexController);

function ReviewsIndexController(reviewsPrepService) {
  var vm = this;
  vm.reviews = reviewsPrepService;

  reviewsPrepService.$promise.then(function(reviews) {

    // Only show reviews that have a start/end read date.
    vm.reviews = _.filter(reviews, function(review) {
      return review.started_at && review.read_at;
    });
  });
}

ReviewsIndexController.$inject = ['reviewsPrepService'];

}());
