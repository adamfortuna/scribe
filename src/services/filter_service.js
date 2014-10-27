(function() {
'use strict';

angular.module('Scribe')
.factory('FilterService', FilterService);

function FilterService($routeParams) {
  var filter = {};

  // Setup the initial filters
  if($routeParams.author) {
    applyFilter('author', $routeParams.author);
  }
  if($routeParams.rating) {
    applyFilter('ratig', $routeParams.rating);
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
  }

  function clearFilter(name, value) {
    if(name === 'rating') {
      filter[name] = '';
    } else {
      delete filter.book;
    }
  }

  return {
    filter: filter,
    hasFilters: function() {
      return filter.rating || filter.book;
    },
    applyFilter: applyFilter,
    clearFilter: clearFilter
  };
}
FilterService.$inject = ['$routeParams'];

}());
