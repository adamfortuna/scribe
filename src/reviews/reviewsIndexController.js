angular.module('Scribe').controller('ReviewsIndexController', function($scope, ReviewResource) {
  $scope.reviews = ReviewResource.query({id: 2419634});

  $scope.currentlyReading = ReviewResource.query({id: 2419634, shelf: 'currently-reading'});

  $scope.currentlyReadingAnything = function() {
    return $scope.currentlyReading.length > 0;
  }
});
