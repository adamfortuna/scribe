(function() {
'use strict';

angular.module('Scribe')
.filter('ReviewsFilter', ReviewsFilter);

ReviewsFilter.$inject = ['$filter', 'FilterService'];
function ReviewsFilter($filter, FilterService) {
  return function ReviewsFilter(reviews) {
    return FilterService.activeReviews(reviews, $filter('filter'));
  };
}

})();
