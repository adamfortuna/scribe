(function() {
'use strict';

angular.module('Scribe')
.directive('sbRatingSelect', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {},
    controller: RatingCtrl,
    controllerAs: 'ctrl',
    templateUrl: '/src/components/rating/select.html',
    bindToController: true
  };
});

var RatingCtrl = function(FilterService) {
  this.ratings = [5,4,3,2,1];
  this.getActiveRating = function() {
    return this.activeRating;
  };
  this.setActiveRating = function(rating) {
    this.activeRating = rating;

    FilterService.applyFilter('rating', this.activeRating);
  };
};
RatingCtrl.$inject = ['FilterService'];

})();
