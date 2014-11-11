(function() {
'use strict';
/*jshint multistr: true */

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
    template: "\
      <div class='rating-select'> \
        <h4>By Rating</h4> \
        <div class='btn-toolbar' role='toolbar'> \
          <div class='btn-group'> \
            <sb-rating-item ng-repeat='rating in ctrl.ratings' rating='rating'></sb-rating-item> \
          </div> \
        </div> \
      </div>"
  };
}

function RatingCtrl(FilterService) {
  this.ratings = [5,4,3,2,1];

  this.getActiveRating = function() {
    return FilterService.getFilter('rating');
  };

  this.setActiveRating = function(rating) {
    FilterService.applyFilter('rating', rating);
  };
}
RatingCtrl.$inject = ['FilterService'];

})();
