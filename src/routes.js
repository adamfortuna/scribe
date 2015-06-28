(function() {
'use strict';
/*jshint multistr: true */

var reviewsPrepService = ['ReviewResource', function(ReviewResource) {
    return ReviewResource.query();
}];

var shelfPrepService = ['ReviewResource', '$route', function(ReviewResource, $route) {
  return ReviewResource.query({shelf: $route.current.params.shelf});
}];

var userPrepService = ['UserResource', 'settings', function(UserResource, settings) {
  return UserResource.get({ id: settings.id });
}];

var reviewLookup = ['$q', '$routeParams', '_', 'ReviewResource', function($q, $routeParams, _, ReviewResource) {
  var deferred = $q.defer(),
      isbn = $routeParams.id;

  ReviewResource.query().$promise.then(function(reviews) {
    var review = _.find(reviews, function(review) {
      return review.book.isbn == isbn;
    });

    deferred.resolve(review);
  });
  return deferred.promise;
}];

angular.module('Scribe').config(routes);
function routes($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/pages/reviews/index.html',
      controller: 'ReviewsIndexController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviewsPrepService, userPrepService: userPrepService }
    })
    .when('/shelf/:shelf', {
      templateUrl: 'src/pages/reviews/index.html',
      controller: 'ReviewsIndexController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: shelfPrepService, userPrepService: userPrepService }
    })

    // Single Page for a specific book
    .when('/books/:id', {
      templateUrl: 'src/pages/reviews/show.html',
      controller: 'ReviewShowController',
      controllerAs: 'ctrl',
      resolve: { reviewPrepService: reviewLookup, userPrepService: userPrepService }
    })

    .when('/reports/length', {
      templateUrl: 'src/pages/reports/length.html',
      controller: 'ReportsLengthController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviewsPrepService }
    })

    .otherwise({redirectTo: '/'});
}

routes.$inject = ['$routeProvider'];

})();
