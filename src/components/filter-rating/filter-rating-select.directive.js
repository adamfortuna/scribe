(function() {
'use strict';

angular.module('Scribe')
.directive('sbFilterRating', FilterRatingDirective);

function FilterRatingDirective() {
  return {
    replace: true,
    restrict: 'E',
    scope: {},
    controller: RatingCtrl,
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/components/filter-rating/filter-rating-select.html'
  };
}

RatingCtrl.$inject = ['FilterService'];
function RatingCtrl(FilterService) {
  this.ratings = [5,4,3,2,1];

  this.getActiveRating = function() {
    return FilterService.getFilter('rating');
  };

  this.setActiveRating = function(rating) {
    FilterService.applyFilter('rating', rating);
  };
}

})();
