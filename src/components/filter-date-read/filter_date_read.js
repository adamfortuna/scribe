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
    template: "\
      <div class='filter-date-read'> \
        <div class='form-group'> \
        <label for='read_after'>Read After</label> \
          <input type='date' class='form-control' id='read_after' ng-change='ctrl.addFilter(\"readAfter\", ctrl.readAfter)' ng-model='ctrl.readAfter'> \
        </div> \
        <div class='form-group'> \
          <label for='read_before'>Read Before</label> \
          <input type='date' class='form-control' id='read_before' ng-change='ctrl.addFilter(\"readBefore\", ctrl.readBefore)' ng-model='ctrl.readBefore'> \
        </div> \
      </div>"
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
