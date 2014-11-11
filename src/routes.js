(function() {
'use strict';
/*jshint multistr: true */

var reviews = ['ReviewResource', function(ReviewResource) {
  return ReviewResource.query();
}];

var indexTemplate = "\
  <div> \
    <h2>Books</h2> \
    <ol class='breadcrumb'> \
      <li>Books</li> \
    </ol> \
  </div> \
  <div class='row'> \
    <div class='col-md-8 col-sm-8'> \
      <ul class='list-unstyled books'> \
        <sb-review ng-repeat='review in filteredReviews = (ctrl.reviews | ReviewsFilter)' review='review'></sb- \book> \
      </ul> \
    </div> \
    <div class='col-md-3 col-md-offset-1 col-sm-4'> \
      <h3>Filter Books</h3>  \
      <p><b>{{filteredReviews.length}}</b> Matching Book(s)</p> \
      <sb-filters filter='ctrl.filter'></sb-filters> \
      <sb-filter-rating></sb-filter-rating> \
      <sb-filter-date-read></sb-filter-date-read> \
      <sb-currently-reading></sb-currently-reading> \
    </div> \
  </div>";

var showTemplate = "\
<div> \
  <h2>Books</h2> \
  <ol class='breadcrumb'> \
    <li><a href='#/books'>Books</a></li> \
    <li class='active'>{{ctrl.review.book.title}}</li> \
  </ol> \
</div> \
<div class='row'> \
  <div class='col-md-12'> \
    <ul class='books list-unstyled'> \
      <sb-review review='ctrl.review'></sb-review> \
      <li class='row book'> \
        <div class='col-xs-9 col-xs-offset-3 col-md-8 col-md-offset-3 col-lg-offset-2'> \
          <h3>More From <a href='{{ctrl.review.link}}' target='_blank'>Goodreads</a></h3> \
          <div class='description' sb-safe-html='{{ctrl.review.book.description}}'></div> \
          <div> \
            <h3>Genres</h3> \
            <ul class='list-unstyled list-inline'> \
              <li ng-repeat='genre in ctrl.review.book.genres'> \
                <a class='label label-primary' href='' ng-click='ctrl.addFilter(\"genre\",genre)'>{{genre}}</a> \
              </li> \
            </ul> \
          </div> \
        </div> \
      </li> \
    </ul> \
  </div> \
</div>";

angular.module('Scribe')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      template: indexTemplate,
      controller: 'ReviewsIndexController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviews }
    })
    
    // Single Page for a specific book
    .when('/books/:id', {
      template: showTemplate,
      controller: 'ReviewShowController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviews }
    })

    .otherwise({redirectTo: '/'});
}]);

})();
