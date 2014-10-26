(function() {
'use strict';

angular.module('Scribe')
.directive('sbRatingItem', RatingItem);

function RatingItem(colorChooser) {
  return {
    restrict: 'E',
    require: '^sbRatingSelect',
    scope: {
      rating: '='
    },
    replace: true,
    templateUrl: '/src/components/rating/item.html',
    link: function(scope, element, attrs, ctrl) {
      scope.makeActive = function() {
        ctrl.setActiveRating(scope.rating);
      };
      scope.label = colorChooser(scope.rating);
    }
  };
}
RatingItem.$inject = ['colorChooser'];


})();
