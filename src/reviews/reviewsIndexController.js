angular.module('Scribe').controller('ReviewsIndexController', function($scope, ReviewResource) {
  $scope.reviews = ReviewResource.query({id: 2419634});
});
