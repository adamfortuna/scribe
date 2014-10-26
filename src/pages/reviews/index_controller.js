(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewsIndexController', ReviewsIndexController);

function ReviewsIndexController(ReviewResource) {
  this.reviews = ReviewResource.query();
}

ReviewsIndexController.$inject = ['ReviewResource'];

}());
