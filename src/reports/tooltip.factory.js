(function() {
'use strict';

// Todo: Make this a service not a factory
angular.module('Scribe')
.factory('tooltip', Tooltip);

Tooltip.$inject = ['$window', 'd3'];
function Tooltip($window, d3) {
  
  var tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tip')
    .style('visibility', 'hidden')
    .text('asdfa');

  var width = $window.innerWidth;

  return {
    text: text,
    show: show,
    hide: hide,
    position: position
  };

  function text(text) {
    tooltip.text(text);
  }

  function show() {
    tooltip.style('visibility', 'visible');
  }

  function hide() {
    tooltip.style('visibility', 'hidden')
  }

  function position(x, y) {
    var w = x > (width-200) ? x-210 : x+20;

    tooltip.style('top', (y-10)+'px')
          .style('left', w+'px');
  }
}

}());
