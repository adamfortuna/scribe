angular.module('Scribe')
.directive('sbRatingItem', function() {
  return {
    restrict: 'E',
    require: '^sbRatingSelect',
    scope: {
      rating: '='
    },
    replace: true,
    templateUrl: '/src/rating/item.html',
    link: function(scope, element, attrs, sbRatingSelectCtrl) {
      scope.ratingActive = function() {
        return sbRatingSelectCtrl.getActiveRating() === scope.rating;
      };

      scope.makeActive = function(){
        sbRatingSelectCtrl.setActiveRating(scope.rating);
      };

      if(scope.rating === 4 || scope.rating === 5) {
        scope.label = 'success';
      } else if(scope.rating === 3) {
        scope.label = 'warning';
      } else {
        scope.label = 'danger';
      } 

      scope.label += ' label-rating-'+scope.rating;

      scope.books_count = sbRatingSelectCtrl.booksForRating(scope.rating).length;

      console.log('scope.books_count', scope.books_count);

    }
  };
});
