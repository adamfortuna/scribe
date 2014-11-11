(function() {
'use strict';

angular.module('Scribe')
.filter('ReviewsFilter', ReviewsFilter);


function ReviewsFilter($filter, FilterService) {
  return function ReviewsFilter(reviews) {
    return FilterService.activeReviews(reviews, $filter('filter'));
  };
}
ReviewsFilter.$inject = ['$filter', 'FilterService'];

})();
