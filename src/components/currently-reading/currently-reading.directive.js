(function() {
'use strict';
/*jshint multistr: true */

angular.module('Scribe')
.directive('sbCurrentlyReading', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {},
    controller: CurrentlyReadingCtrl,
    controllerAs: 'ctrl',
    templateUrl: 'src/components/currently-reading/currently-reading.html'
  };
});

CurrentlyReadingCtrl.$inject = ['ReviewResource'];
function CurrentlyReadingCtrl(ReviewResource) {
  this.reviews = ReviewResource.query({shelf: 'currently-reading'});

  this.isCurrentlyReading = function() {
    return this.reviews.length > 0;
  };
};

})();
