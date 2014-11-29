(function() {
'use strict';

angular.module('Scribe')
.controller('ReportsLengthController', ReportsLengthController);

ReportsLengthController.inject = ['reviewsPrepService'];
function ReportsLengthController(reviewsPrepService) {
  this.reviews = reviewsPrepService;
}

}());
