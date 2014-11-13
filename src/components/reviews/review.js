(function() {
'use strict';

angular.module('Scribe')
.directive('sbReview', ReviewDirective);

function ReviewDirective() {
  return {
    replace: true,
    restrict: 'E',
    scope: { review: '=' },
    templateUrl: 'src/components/reviews/review.html',
    controller: ReviewCtrl,
    controllerAs: 'ctrl'
  };
}

var ReviewCtrl = function(FilterService) {
  var vm = {};
      vm.FilterService = FilterService;
  this.isCurrentlyReading = function(review) {
    return review.shelves.shelf.name == 'currently-reading';
  };
  this.addFilter = function(name, value) {
    vm.FilterService.applyFilter(name, value);
  };
};
ReviewCtrl.$inject = ['FilterService'];

}());
