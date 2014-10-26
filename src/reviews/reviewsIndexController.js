(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewsIndexController', ReviewsIndexController);

function ReviewsIndexController(ReviewResource, toDate) {
  this.toDate = toDate;
  this.reviews = ReviewResource.query({id: 2419634});
  this.currentlyReading = ReviewResource.query(
    {id: 2419634, shelf: 'currently-reading'}
  );

  this.isCurrentlyReading = function() {
    return this.currentlyReading.length > 0;
  };
}

ReviewsIndexController.$inject = ['ReviewResource', 'toDate'];

}());
