(function() {
'use strict';
/*jshint multistr: true */

var reviews = ['ReviewResource', function(ReviewResource) {
  return ReviewResource.query();
}];

angular.module('Scribe').config(routes);
function routes($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/pages/reviews/index.html',
      controller: 'ReviewsIndexController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviews }
    })
    
    // Single Page for a specific book
    .when('/books/:id', {
      templateUrl: 'src/pages/reviews/show.html',
      controller: 'ReviewShowController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviews }
    })

    .when('/reports/length', {
      templateUrl: 'src/pages/reports/length.html',
      controller: 'ReportsLengthController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviews }
    })

    .otherwise({redirectTo: '/'});
}

routes.$inject = ['$routeProvider'];

})();
