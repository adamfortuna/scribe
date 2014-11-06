(function() {
'use strict';
/*jshint multistr: true */


angular.module('Scribe')
.directive('sbRatingItem', RatingItem);

function RatingItem() {
  return {
    restrict: 'E',
    require: '^sbRatingSelect',
    scope: {
      rating: '='
    },
    replace: true,
    template:
      "<button type='button' class='btn btn-default btn-rating-{{rating}}' ng-class='{active: isActive()}' ng-click='makeActive()'>{{rating}}</button>",
    link: function(scope, element, attrs, ctrl) {
      scope.makeActive = function() {
        ctrl.setActiveRating(scope.rating);
      };

      scope.isActive = function() {
        return ctrl.getActiveRating() == scope.rating;
      };
    }
  };
}

})();
