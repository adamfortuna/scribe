(function() {
'use strict';
/*jshint multistr: true */

angular.module('Scribe')
.directive('sbFilterDateRead', FilterDateReadDirective);

function FilterDateReadDirective() {
  return {
    replace: true,
    restrict: 'E',
    scope: {},
    controller: FilterDateReadCtrl,
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/components/filter-date-read/filter-date-read.html'
  };
}

FilterDateReadCtrl.$inject = ['FilterService'];
function FilterDateReadCtrl(FilterService) {
  var date = FilterService.getFilter('readAfter');
  if(date) { this.readAfter = new Date(date); }
  date = FilterService.getFilter('readBefore');
  if(date) { this.readBefore = new Date(date); }

  this.addFilter = function addFilter(filter, value) {
    if(value) {
      FilterService.applyFilter(filter, value.toISOString().split('T')[0]);
    } else {
      FilterService.clearFilter(filter);
    }
  };
}

})();
