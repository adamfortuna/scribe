(function() {
'use strict';

angular.module('Scribe')
.config(['$routeProvider', '$locationProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the notes index
      redirectTo: '/books'
    })
    
    // All books ordered by "date finished desc"
    .when('/books', {
      templateUrl: '/src/pages/reviews/index.html',
      controller: 'ReviewsIndexController',
      controllerAs: 'ctrl'
    })
    
    // Single Page for a specific book
    .when('/books/:id', {
      templateUrl: '/src/pages/reviews/show.html',
      controller: 'ReviewShowController',
      controllerAs: 'ctrl'
    })

    .otherwise({redirectTo: '/'});
}]);

})();
