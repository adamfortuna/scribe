(function() {
'use strict';

// Todo: Make this a service not a factory
angular.module('Scribe')
.factory('FilterService', FilterService);

FilterService.$inject = ['$location', '_'];
function FilterService($location, _) {
  var filter = {},
      location = $location,
      filterMap = {
        'rating': 'rating',
        'genre':  'book.genres',
        'author': 'book.authors.author.name',
        'readAfter': 'readAfter',
        'readBefore': 'readBefore'
      },
      page,
      shelf,
      exemptFilters = ['readAfter', 'readBefore'];

  return {
    filter: filter,
    hasFilters: hasFilters,
    applyFilter: applyFilter,
    clearFilter: clearFilter,
    getFilter: getFilter,
    hasFilter: hasFilter,
    availableFilters: _.keys(filterMap),
    activeReviews: activeReviews,
    clearFilters: clearFilters,
    setPage: setPage,
    setShelf: setShelf,
    getPage: getPage,
    getShelf: getShelf,
    setParams: setParams
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

  function clearFilters() {
    _.forEach(filterMap, function(i, key) {
      clearFilter(key);
    });
  }

  function setLocation() {
    location.url('/shelf/'+shelf+'?'+queryString());
    if(currentYPosition() > 160) {
      document.getElementById('books--top').scrollIntoView();
    }
  }

  function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }

  function queryString() {
    var query = _.collect(_.keys(filterMap), function(name) {
      if(hasFilter(name)) {
        return name+'='+_.deepGet(filter, filterMap[name]);
      }
    });

    if(page > 0) {
      query.push('page='+page);
    }

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

  function setPage(_page) {
    page = _page;
    setLocation();
  }

  function setShelf(_shelf) {
    shelf = _shelf;
    setLocation();
  }

  function setParams(params) {
    page = params.page || 1;
    shelf = params.shelf || 'read';

    // On the first load, apply all filters from the URL
    _.each(_.keys(filterMap), function(_filter) {
      if(params[_filter]) {
        _.deepSet(filter, _filter, params[_filter]);
      }
    });

    console.log(filter);
  }

  function getPage() {
    return page;
  }

  function getShelf() {
    return shelf;
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

}());
