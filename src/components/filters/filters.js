(function() {
'use strict';

angular.module('Scribe')
.directive('sbFilters', FiltersDirective);

function FiltersDirective() {
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
  this.availableFilters = FilterService.availableFilters;
  this.hasFilter = FilterService.hasFilter;
  this.getFilter = FilterService.getFilter;
  this.clearFilter = FilterService.clearFilter;
  this.hasFilters = FilterService.hasFilters;
};
FiltersController.$inject = ['FilterService'];

})();
