angular.module('Scribe').directive('sbReview', function() {
  return {
    replace: true,
    restrict: "E",
    scope: {
      review: "="
    },
    templateUrl: "src/reviews/review.html",
    controller: function($scope) {
      var toDate = function(date) {
        return Date.parse(date);
      };
      $scope.toDate = toDate;
    }
  };
});
