(function() {
'use strict';

angular.module('Scribe')
.directive('sbReportLength', ReportLengthDirective);

function ReportLengthDirective() {
  return {
    restrict: 'E',
    scope: { reviews: '=' },
    replace: true,
    controller: ReportLengthController,
    controllerAs: 'ctrl',
    bindToController: true,
    template: '<div style="height:800px;border:1px solid red;"></div>',
    link : ReportLengthLink
  };
}

ReportLengthController.$inject = ['LengthReport'];
function ReportLengthController(LengthReport) {
  this.graph = function(el, reviews) {
    this.lengthReport = new LengthReport(el, reviews);
  }
};

function ReportLengthLink(scope, el, attrs, controller) {
  var listener = scope.$watch(function() {
    return controller.reviews.length;
  }, function(length) {
    if(length > 0 ) {
      controller.graph(el, controller.reviews);
      listener();
    }
  });
}

})();
