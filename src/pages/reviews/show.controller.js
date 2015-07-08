(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewShowController', ReviewShowController);

ReviewShowController.$inject = ['_', 'FilterService', 'reviewsPrepService', 'reviewLoopupService', 'userPrepService'];
function ReviewShowController(_, FilterService, reviewsPrepService, reviewLoopupService, userPrepService) {
  this.addFilter = FilterService.applyFilter;
  this.reviews = reviewsPrepService;
  this.review = reviewLoopupService;
  this.user = userPrepService;
}

}());
