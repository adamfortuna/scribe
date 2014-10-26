(function() {
'use strict';

angular.module('Scribe')
.directive('sbReview', ReviewDirective);

function ReviewDirective($sce) {
  return {
    replace: true,
    restrict: "E",
    scope: {
      review: "="
    },
    templateUrl: "src/reviews/review.html",
    controller: ReviewCtrl,
    controllerAs: 'ctrl',
    link: function(scope) {
      // Todo: Find out why this isn't working
      scope.body = $sce.trustAsHtml(scope.review.body.replace(/^\s+|\s+$/g, ''));
      if(scope.review.book.description) {
        scope.description = $sce.trustAsHtml(scope.review.book.description.replace(/^\s+|\s+$/g, ''));
      }
    }
  };
}
ReviewDirective.$inject = ['$sce'];


var ReviewCtrl = function(toDate) {
  this.toDate = toDate;
  this.isCurrentlyReading = function(review) {
    return review.shelves.shelf.name == 'currently-reading';
  };
};
ReviewCtrl.$inject = ['toDate'];

}());
