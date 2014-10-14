angular.module('Scribe').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the notes index
      redirectTo: '/books'
    })
    
    // All books ordered by "date finished desc"
    // 
    // Should be able to filter this by:
    //   Some number of authors
    //   Some number of genres
    //   Some number of ratings
    .when('/books', {
      templateUrl: 'templates/pages/reviews/index.html',
      controller: 'ReviewsIndexController'
    })
    
    // Single Page for a specific book
    .when('/books/:id', {
      templateUrl: 'templates/pages/reviews/show.html',
      controller: 'ReviewShowController'
    })

    .otherwise({redirectTo: '/'});
}]);
