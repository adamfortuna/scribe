(function() {
'use strict';

angular.module('Scribe')
.factory('colorChooser', function() {
  return function(rating) {
    switch(rating) {
      case 5:
      case 4:
        return 'success';
      case 3:
        return 'warning';
      case 2:
      case 1:
        return 'danger';
      default:
        return'primary';
    }
  };
});

})();
