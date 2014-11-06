(function() {
'use strict';

// Todo: Make this a service not a factory
angular.module('Scribe')
.factory('FilterService', FilterService);

function FilterService($routeParams, $location, _) {
  var filter = {},
      location = $location,
      filterMap = {
        'rating': 'rating',
        'genre':  'book.genres',
        'author': 'book.authors.author.name'
      };

  // On the first load, apply all filters from the URL
  _.each(_.keys(filterMap), function(filterName) {
    if($routeParams[filterName]) {
      applyFilter(filterName, $routeParams[filterName]);
    }
  });

  return {
    filter: filter,
    hasFilters: hasFilters,
    applyFilter: applyFilter,
    clearFilter: clearFilter,
    getFilter: getFilter,
    hasFilter: hasFilter,
    availableFilters: _.keys(filterMap)
  };

  // Private

  // Are any filters active?
  function hasFilters() {
    return _.any(filterMap, function(filterName) {
      hasFilter(name);      
    });
  }

  // Is the specific filter active?
  function hasFilter(name) {
    return _.deepGet(filter, filterMap[name]);
  }

  function applyFilter(name, value) {
    _.deepSet(filter, filterMap[name], value);
    setLocation();
  }

  // Todo: Allow for multiple values for each filter
  // Note: value is unused at this time
  function clearFilter(name, value) {
    if(!hasFilter(name)) { return; }
    _.deepDelete(filter, filterMap[name]);
    _.deepRemoveEmpty(filter);
    setLocation();
  }

  function setLocation() {
    location.url('/?'+queryString());
  }

  function queryString() {
    var query = _.collect(_.keys(filterMap), function(name) {
      if(hasFilter(name)) {
        return name+'='+_.deepGet(filter, filterMap[name]);
      }
    });

    return _.compact(query).join('&');
  }

  function getFilter(name) {
    return _.deepGet(filter, filterMap[name]);
  }
}
FilterService.$inject = ['$routeParams', '$location', '_'];

}());
