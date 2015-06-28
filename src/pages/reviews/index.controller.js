(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewsIndexController', ReviewsIndexController);

ReviewsIndexController.$inject = ['$routeParams', 'reviewsPrepService', 'userPrepService'];
function ReviewsIndexController($routeParams, reviewsPrepService, userPrepService) {
  this.shelf = $routeParams.shelf;
  this.reviews = reviewsPrepService;
  this.user = userPrepService;
}

}());
