(function() {
'use strict';

angular.module('Scribe')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the notes index
      redirectTo: '/books'
    })
    
    // All books ordered by "date finished desc"
    .when('/books', {
      templateUrl: 'templates/pages/reviews/index.html',
      controller: 'ReviewsIndexController',
      controllerAs: 'ctrl'
    })
    
    // Single Page for a specific book
    .when('/books/:id', {
      templateUrl: 'templates/pages/reviews/show.html',
      controller: 'ReviewShowController'
    })

    .otherwise({redirectTo: '/'});
}]);

})();
