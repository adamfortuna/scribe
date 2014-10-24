angular.module('Scribe')
.directive('sbRatingSelect', ['$filter', function($filter) {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      activeRating: '=',
      reviews: '&'
    },
    controller: ['$scope', '$filter', function($scope, $filter) {
      this.getActiveRating = function(){
        return $scope.activeRating;
      };

      this.setActiveRating = function(rating) {
        console.log('$scope.activeRating', $scope.activeRating);
        $scope.activeRating = rating;
      };

      this.booksForRating = function(rating) {
        return $filter('booksRatingFilter')($scope.reviews(), rating);
      };

      return this;
    }],
    templateUrl: '/src/rating/select.html',
    link: function($scope) {
      $scope.ratings = [5,4,3,2,1];
    }
  };
}]);
