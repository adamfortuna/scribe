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
        'author': 'book.authors.author.name',
        'readAfter': 'readAfter',
        'readBefore': 'readBefore'
      },
      exemptFilters = ['readAfter', 'readBefore'];

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
    availableFilters: _.keys(filterMap),
    activeReviews: activeReviews
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

  function activeReviews(reviews, filterFilter) {
    var activeDate,
        currentReviews = filterFilter(reviews, softFilters());

    _.each(exemptFilters, function(exemptFilter) {
      if(hasFilter(exemptFilter)) {
        console.log('hasFilter', exemptFilter);

        if(exemptFilter === 'readAfter') {
          activeDate = new Date(getFilter(exemptFilter));
          currentReviews = _.filter(currentReviews, function(review) {
            return Date.parse(review.read_at) >= activeDate;
          });
        } else if(exemptFilter === 'readBefore') {
          activeDate = new Date(getFilter(exemptFilter));
          currentReviews = _.filter(currentReviews, function(review) {
            return Date.parse(review.read_at) <= activeDate;
          });
        }
      }
    });

    return currentReviews;
  }

  function softFilters() {
    var f = _.cloneDeep(filter);

    _.each(exemptFilters, function(exemptFilter) {
      _.deepDelete(f, filterMap[exemptFilter]);
      _.deepRemoveEmpty(f);
    });

    return f;
  }
}
FilterService.$inject = ['$routeParams', '$location', '_'];

}());
