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
    templateUrl: '/src/components/filter-date-read/date_read.html'
  };
}

function FilterDateReadCtrl(FilterService) {
  var date;
  date = FilterService.getFilter('readAfter');
  if(date) {
    this.readAfter = new Date(date);
  }
  date = FilterService.getFilter('readBefore');
  if(date) {
    this.readBefore = new Date(date);
  }

  this.addFilter = function addFilter(filter, value) {
    if(value) {
      FilterService.applyFilter(filter, value.toISOString().split('T')[0]);
    } else {
      FilterService.clearFilter(filter);
    }
  };
}
FilterDateReadCtrl.$inject = ['FilterService'];

})();
