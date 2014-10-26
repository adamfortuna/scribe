(function() {
'use strict';

angular.module('Scribe')
.filter('booksRatingFilter', ['_', function(_){
  return function(reviews, rating) {
    if(!reviews || reviews.length === 0 || !rating) { return reviews; }
    return _.filter(reviews, function(review) {
      return +review.rating === rating;
    });
  };
}]);

})();
