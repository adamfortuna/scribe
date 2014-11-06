(function() {
'use strict';
/*jshint multistr: true */

angular.module('Scribe')
.directive('sbFilters', FiltersDirective);

function FiltersDirective() {
  return {
    restrict: 'E',
    scope: {
      filter: '='
    },
    replace: true,
    controller: FiltersController,
    controllerAs: 'ctrl',
    bindToController: true,
    template: "\
      <div> \
        <ul class='list-inline'> \
          <li ng-repeat='filter in ctrl.availableFilters' ng-if='ctrl.hasFilter(filter)'> \
            <a ng-href='' ng-click='ctrl.clearFilter(filter)' class='label label-primary'> \
              {{filter | capitalize}}: {{ctrl.getFilter(filter)}} <i class='glyphicon glyphicon-remove'></i> \
            </a> \
          </li> \
        </ul> \
      </div>"
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
