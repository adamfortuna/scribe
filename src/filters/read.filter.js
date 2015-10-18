(function() {
'use strict';

angular.module('Scribe')
.filter('ReadFilter', ReadFilter);

ReadFilter.$inject = ['_'];
function ReadFilter(_) {
  return function ReadFilter(reviews) {
    return _.filter(reviews, function(review) {
      return !_.isNull(review.read_at || review.rating);
    });
  };
}

})();
