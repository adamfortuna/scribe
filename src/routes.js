(function() {
'use strict';
/*jshint multistr: true */

var reviewsPrepService = ['ReviewResource', function(ReviewResource) {
    return ReviewResource.query();
}];

var shelfPrepService = ['$route', 'ReviewResource', function($route, ReviewResource) {
  return ReviewResource.query({shelf: $route.current.params.shelf});
}];

var userPrepService = ['UserResource', 'settings', function(UserResource, settings) {
  return UserResource.get({ id: settings.id });
}];

var reviewLookupPrepService = ['$route', 'ReviewResource', function($route, ReviewResource) {
  return ReviewResource.get({id: $route.current.params.id});
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
      resolve: { reviewsPrepService: reviewsPrepService, reviewLoopupService: reviewLookupPrepService, userPrepService: userPrepService }
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
