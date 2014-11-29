(function() {
'use strict';
/*jshint multistr: true */

angular.module('Scribe')
.directive('sbCurrentlyReadingReview', CurrentlyReadingReview);

function CurrentlyReadingReview() {
  return {
    restrict: 'E',
    scope: {
      review: '='
    },
    replace: true,
    controllerAs: 'ctrl',
    templateUrl: 'src/components/currently-reading/currently-reading-review.html'
  };
}

})();
