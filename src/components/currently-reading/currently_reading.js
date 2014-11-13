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
    templateUrl: 'src/components/currently-reading/currently_reading.html'
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
