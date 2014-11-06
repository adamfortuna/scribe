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
    template: "\
      <li class='book'> \
        <h4>{{review.book.title}}</h4> \
        <span ng-if='review.started_at != \"\"'> \
          Started on {{ review.started_at | dateify | date: 'MMMM d, yyyy'}}. \
        </span> \
      </li>"
  };
}

})();
