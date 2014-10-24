angular.module('Scribe').directive('sbReview', ['$sce', function($sce) {
  return {
    replace: true,
    restrict: "E",
    scope: {
      review: "="
    },
    templateUrl: "src/reviews/review.html",
    controller: ['$scope', function($scope) {
      $scope.toDate = function toDate(date) {
        return Date.parse(date);
      };
      $scope.isCurrentlyReading = function currentlyReading(review) {
        return review.shelves.shelf.name == 'currently-reading';
      };
    }],
    // Todo: Find out why this isn't working
    link: function(scope) {
      scope.body = $sce.trustAsHtml(scope.review.body.replace(/^\s+|\s+$/g, ''));
    }
  };
}]);
