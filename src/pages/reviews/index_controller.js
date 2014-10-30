(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewsIndexController', ReviewsIndexController);

function ReviewsIndexController(reviewsPrepService) {
  this.reviews = reviewsPrepService;
}

ReviewsIndexController.$inject = ['reviewsPrepService'];

}());
