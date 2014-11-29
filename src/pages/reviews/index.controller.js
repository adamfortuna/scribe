(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewsIndexController', ReviewsIndexController);

ReviewsIndexController.$inject = ['reviewsPrepService'];
function ReviewsIndexController(reviewsPrepService) {
  this.reviews = reviewsPrepService;
}


}());
