(function() {
'use strict';

angular.module('Scribe')
.directive('sbSafeHtml', SafeHtmlDirective);

SafeHtmlDirective.$inject = ['$sce'];
function SafeHtmlDirective($sce) {
  return {
    restrict: 'A',
    scope: {
      sbSafeHtml: "@"
    },
    template: "<div ng-bind-html='safeHtml'></div>",
    // Todo: Figure out how to make this a $compile 
    //       directive rather than using link.
    link: function(scope, element, attrs) {
      var unregister = scope.$watch('sbSafeHtml', setHtml);

      function setHtml(value) {
        if(!value) { return; }
        scope.safeHtml = $sce.trustAsHtml(value.replace(/^\s+|\s+$/g, ''));
        unregister();
      }
    }
  };
}

}());
