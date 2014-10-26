(function() {
'use strict';

angular.module('Scribe')
.directive('sbCurrentlyReadingReview', CurrentlyReadingReview);

function CurrentlyReadingReview() {
  return {
    restrict: 'E',
    scope: {
      review: '='
    },
    replace: true,
    templateUrl: '/src/components/currently-reading/review.html',
    controllerAs: 'ctrl',
    controller: ['toDate', function(toDate) {
      this.toDate = toDate;
    }]
  };
}

})();
