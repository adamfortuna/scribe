(function() {
'use strict';

// Todo: Make this a service not a factory
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
  if($routeParams.genre) {
    applyFilter('genre', $routeParams.genre);
  }

  return {
    filter: filter,
    hasFilters: hasFilter,
    applyFilter: applyFilter,
    clearFilter: clearFilter,
    getRating: getRating,
    hasFilter: hasFilter
  };

  // Private

  function hasFilter() {
    return hasFilter('rating') || hasFilter('genre') || hasFilter('author');
  }

  function hasFilter(name) {
    if(name === 'rating') {
      return typeof(filter[name]) !== 'undefined';
    } else if(name === 'genre') {
      return filter.book && filter.book.genres;
    } else if(name === 'author') {
      return filter.book && filter.book.authors && filter.book.authors.author && filter.book.authors.author.name;
    }
  }

  function applyFilter(name, value) {
    if(name === 'rating') {
      filter[name] = value;
    } else if(name === 'genre') {
      filter.book = filter.book || {};
      filter.book.genres = value;
    } else if(name === 'author') {
      filter.book = filter.book || {};
      filter.book.authors = filter.book.authors || {};
      filter.book.authors.author = filter.book.authors.author || {};
      filter.book.authors.author.name = value;
    }

    setLocation();
  }

  function clearFilter(name, value) {
    if(name === 'genre') {
      if(filter.book) {
        delete filter.book;
      }
    } else if(name === 'author') {
      if(filter.book) {
        delete filter.book.authors;
      }
    } else {
      delete filter[name];
    }

    if(!hasFilter('genre') && !hasFilter('author')) {
     delete filter.book; 
    }

    console.log('filter', filter);
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
    if(filter.book && filter.book.genres) {
     query.push('genre='+filter.book.genres); 
    }
    return query.join('&');
  }

  function getRating() {
    return filter.rating;
  }
}
FilterService.$inject = ['$routeParams', '$location'];

}());
