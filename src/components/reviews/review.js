(function() {
'use strict';
/*jshint multistr: true */

var template = " \
  <li class='row book rating-{{review.rating}}'> \
    <div class='col-md-2 book-image col-xs-2'> \
      <a href='http://www.amazon.com/gp/product/{{review.book.isbn}}/adamfortuna-20' class='book-image' target='_blank'> \
        <img ng-src='{{review.book.image_url}}' /> \
        <img ng-src='http://images.amazon.com/images/P/{{review.book.isbn}}.01.ZTZZZZZZ.jpg' /> \
      </a> \
      <p class='rating' ng-if='review.rating > 0'><span class='rate'>{{review.rating}}</span> / <span class='rate-outof'>5</span></p> \
    </div> \
 \
    <div class='col-md-9 col-md-offset-1 col-lg-offset-0 col-lg-10 col-xs-8 col-xs-offset-1'> \
      <h3>{{review.book.title}}</h3> \
 \
      <p class='review' ng-if='body != \"\"' sb-safe-html='{{review.body}}'></p> \
      <p class='description' ng-if='!review.read_at && body == \"\"' sb-safe-html='{{review.book.description}}'></p> \
 \
      <p class='meta'> \
        <a class='author label label-primary' href='' ng-click='ctrl.addFilter(\"author\",review.book.authors.author.name)' > \
          {{review.book.authors.author.name}} \
        </a> \
        <span class='date-read' ng-if='review.read_at || review.started_at'> \
          <a href='#/books/{{review.book.isbn}}'> \
            <span ng-if='review.read_at && review.started_at'> \
              Read from {{ review.started_at | dateify | date: 'MMMM d, yyyy'}} to {{review.read_at | dateify | date: 'MMMM d, yyyy'}}. \
            </span> \
            <span ng-if='review.started_at && !review.read_at'> \
              Started on {{ review.started_at | dateify | date: 'MMMM d, yyyy'}}, reading now. \
            </span> \
          </a> \
        </span> \
      </p> \
    </div> \
  </li>";

angular.module('Scribe')
.directive('sbReview', ReviewDirective);

function ReviewDirective() {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      review: '='
    },
    template: template,
    controller: ReviewCtrl,
    controllerAs: 'ctrl'
  };
}

var ReviewCtrl = function(FilterService) {
  var vm = {};
      vm.FilterService = FilterService;
  this.isCurrentlyReading = function(review) {
    return review.shelves.shelf.name == 'currently-reading';
  };
  this.addFilter = function(name, value) {
    vm.FilterService.applyFilter(name, value);
  };
};
ReviewCtrl.$inject = ['FilterService'];

}());
