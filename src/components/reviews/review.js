(function() {
'use strict';

angular.module('Scribe')
.directive('sbReview', ReviewDirective);

function ReviewDirective($sce) {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      review: '='
    },
    templateUrl: 'src/components/reviews/review.html',
    controller: ReviewCtrl,
    controllerAs: 'ctrl',
    link: function(scope, element, attrs, ctrl) {
      var setReview = function(review) {
        scope.body = $sce.trustAsHtml(review.body.replace(/^\s+|\s+$/g, ''));

        if(review.book.description) {
          scope.description = $sce.trustAsHtml(review.book.description.replace(/^\s+|\s+$/g, ''));
        }
      };

      if(scope.review.$promise) {
        scope.review.$promise.then(setReview);
      } else {
        setReview(scope.review);
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
