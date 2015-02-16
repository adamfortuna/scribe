(function() {
'use strict';

angular.module('Scribe')
.directive('sbFilters', FiltersDirective);

function FiltersDirective() {
  return {
    restrict: 'E',
    scope: { filter: '=' },
    replace: true,
    controller: FiltersController,
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/components/filters/filters.html'
  };
}

FiltersController.$inject = ['FilterService'];
function FiltersController(FilterService) {
  this.filter = FilterService.filter;
  this.availableFilters = FilterService.availableFilters;
  this.hasFilter = FilterService.hasFilter;
  this.getFilter = FilterService.getFilter;
  this.clearFilter = FilterService.clearFilter;
  this.hasFilters = FilterService.hasFilters;
}

})();
