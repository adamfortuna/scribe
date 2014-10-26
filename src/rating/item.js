(function() {
'use strict';

angular.module('Scribe')
.directive('sbRatingItem', function() {
  return {
    restrict: 'E',
    require: '^sbRatingSelect',
    scope: {
      rating: '='
    },
    replace: true,
    templateUrl: '/src/rating/item.html',
    link: function(scope, element, attrs, ctrl) {
      scope.ratingActive = function() {
        return ctrl.getActiveRating() === scope.rating;
      };

      scope.makeActive = function(){
        ctrl.setActiveRating(scope.rating);
      };

      if(scope.rating === 4 || scope.rating === 5) {
        scope.label = 'success';
      } else if(scope.rating === 3) {
        scope.label = 'warning';
      } else if(scope.rating === 2 || scope.rating === 1) {
        scope.label = 'danger';
      } else {
        scope.label = 'primary';
      }
    }
  };
});


}());
