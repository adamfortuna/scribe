(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewShowController', ReviewShowController);

ReviewShowController.$inject = ['_', 'FilterService', 'reviewPrepService'];
function ReviewShowController(_, FilterService, reviewPrepService) {
  var vm = this;
  vm.addFilter = FilterService.applyFilter;
  vm.review = reviewPrepService;
}

}());
