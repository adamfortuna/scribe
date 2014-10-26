(function() {
'use strict';

angular.module('Scribe')
.directive('sbCurrentlyReading', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {},
    controller: CurrentlyReadingCtrl,
    controllerAs: 'currentlyReadingCtrl',
    templateUrl: '/src/components/currently-reading/currently_reading.html'
  };
});

var CurrentlyReadingCtrl = function(ReviewResource) {
  this.reviews = ReviewResource.query({shelf: 'currently-reading'});

  this.isCurrentlyReading = function() {
    return this.reviews.length > 0;
  };
};

CurrentlyReadingCtrl.$inject = ['ReviewResource'];

})();
