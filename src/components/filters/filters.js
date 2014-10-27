(function() {
'use strict';

angular.module('Scribe')
.directive('sbFilters', sbFilters);

function sbFilters() {
  return {
    restrict: 'E',
    scope: {
      filter: '='
    },
    replace: true,
    templateUrl: '/src/components/filters/filters.html',
    controller: FiltersController,
    controllerAs: 'ctrl',
    bindToController: true
  };
}


var FiltersController = function(FilterService) {
  this.filter = FilterService.filter;

  this.clearFilter = function(filterName, filterValue) {
    FilterService.clearFilter(filterName, filterValue);
  };
  this.hasFilters = function() {
    return FilterService.hasFilters();
  };
};
FiltersController.$inject = ['FilterService'];

})();
