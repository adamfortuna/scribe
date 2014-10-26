(function() {
'use strict';

angular.module('Scribe')
.directive('sbRatingSelect', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      activeRating: '='
    },
    controller: RatingCtrl,
    controllerAs: 'ctrl',
    templateUrl: '/src/rating/select.html',
    bindToController: true
  };
});

var RatingCtrl = function() {
  this.ratings = [5,4,3,2,1,'all'];
  this.getActiveRating = function() {
    return this.activeRating;
  };
  this.setActiveRating = function(rating) {
    this.activeRating = (rating === 'all') ? '' : rating;
  };
};

})();
