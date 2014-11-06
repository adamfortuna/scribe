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
    template: "\
      <div ng-show='ctrl.isCurrentlyReading()' class='currently-reading'> \
        <h3>Currently Reading</h3> \
        <ul class='list-unstyled books'> \
          <sb-currently-reading-review ng-repeat='review in ctrl.reviews' review='review'></sb-currently-reading-review> \
        </ul> \
      </div>"
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
