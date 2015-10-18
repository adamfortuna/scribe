(function() {
'use strict';

angular.module('Scribe')
.controller('ReviewsIndexController', ReviewsIndexController);

ReviewsIndexController.$inject = ['$routeParams', 'FilterService', 'reviewsPrepService', 'userPrepService'];
function ReviewsIndexController($routeParams, FilterService, reviewsPrepService, userPrepService) {
  FilterService.setPage($routeParams.page || 1);
  FilterService.setShelf($routeParams.shelf || 'read');

  this.reviews = reviewsPrepService;
  this.user = userPrepService;

  this.getShelf = FilterService.getShelf;
  this.setShelf = FilterService.setShelf;
  this.getPage = FilterService.getPage;
  this.setPage = FilterService.setPage;

  this.bookPagesCount = function(booksCount) {
    return Math.ceil(booksCount/30);
  };

  this.offset = function() {
    return (this.getPage()-1) * 30;
  };

  this.bookPages = function(booksCount) {
    return new Array(this.bookPagesCount(booksCount));
  };

  this.isActivePage = function(_page) {
    return _page == this.getPage();
  };
}

}());
