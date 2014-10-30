(function() {
'use strict';

angular.module('Scribe')
.factory('FilterService', FilterService);

function FilterService($routeParams, $location) {
  var filter = {},
      location = $location;

  // Setup the initial filters
  if($routeParams.author) {
    applyFilter('author', $routeParams.author);
  }
  if($routeParams.rating) {
    applyFilter('rating', $routeParams.rating);
  }

  return {
    filter: filter,
    hasFilters: hasFilter,
    applyFilter: applyFilter,
    clearFilter: clearFilter,
    getRating: getRating
  };

  // Private

  function hasFilter() {
    return filter.rating || filter.book;
  }

  function applyFilter(name, value) {
    if(name === 'rating') {
      filter[name] = value;
    } else {
      filter.book = filter.book || {};
      filter.book.authors = filter.book.authors || {};
      filter.book.authors.author = filter.book.authors.author || {};
      filter.book.authors.author.name = value;
    }

    setLocation();
  }

  function clearFilter(name, value) {
    if(name === 'rating') {
      filter[name] = '';
    } else {
      delete filter.book;
    }

    setLocation();
  }

  function setLocation() {
    location.url('/books?'+queryString());
  }

  function queryString() {
    var query = [];
    if(filter.book && filter.book.authors && filter.book.authors.author && filter.book.authors.author.name) {
      query.push('author='+filter.book.authors.author.name);
    }
    if(filter.rating) {
     query.push('rating='+filter.rating); 
    }
    return query.join('&');
  }

  function getRating() {
    return filter.rating;
  }
}
FilterService.$inject = ['$routeParams', '$location'];

}());
