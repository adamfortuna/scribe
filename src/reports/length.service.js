(function() {
'use strict';

// Todo: Make this a service not a factory
angular.module('Scribe')
.service('LengthReport', LengthReportFactory);

LengthReportFactory.$inject = ['_', 'd3', 'tooltip'];
function LengthReportFactory(_, d3, tooltip) {
  var el, data, graph = {};
  return LengthReport;

  function LengthReport(_el, _data) {
    data = _data;
    el = _el;
    setupGraph();
    drawGraph();
  }

  LengthReport.prototype.setupGraph = setupGraph;
  LengthReport.prototype.drawGraph = drawGraph;


  // Setup the D3 graph
  function setupGraph() {
    var width = angular.element(el)[0].offsetWidth-65;

    var maxPages = d3.max(data, function(d) {
      return +d.book.num_pages;
    });

    graph.yScale = d3.scale.linear()
      .domain([0, maxPages])
      .range([width, 0]);

    graph.yAxis = d3.svg.axis()
      .scale(graph.yScale)
      .orient('left')
      .ticks(8);

    graph.xScale = d3.scale.ordinal()
      .domain(d3.range(data.length))
      .rangeBands([0, width], 0);

        // Colors
    graph.colorScale = d3.scale.linear()
      .domain([1,2,3,4,5])
      .range(['#C74131', '#D06559', '#77B789', '#CEE39E', '#9BC83B'])
      .interpolate(d3.interpolateHcl);
  }

  // Draw the D3 graph
  function drawGraph() {
    //if(el) { el.empty(); }

    var svg = d3.select(el[0])
      .append('svg')
      .style({
        width: '100%',
        height: '100%'
      });

    // Y Axis
    var gy = svg.append('g').attr('transform', 'translate(50, 10)');
    graph.yAxis(gy);
    gy.selectAll('path').style({ fill: 'none', stroke: '#000000'});
    gy.selectAll('line').style({ stroke: '#000000'});

    // Data
    var g = svg.append('g').attr('transform', 'translate(50,  0)');
    var circles = g.selectAll('circle').data(data);
    circles.enter()
      .append('circle')
      .attr({
        cx: function(d, i) { return graph.xScale(i); },
        cy: function(d) { return graph.yScale(+d.book.num_pages); },
        r: graph.xScale.rangeBand(),
        fill: function(d) { return graph.colorScale(+d.rating); },
        title: function(d) {
          return d.book.title + ' is ' + (+d.book.num_pages) + 'pages long.';
        },
        stroke: function(d) {
          if(+d.rating === 1) { return 'red'; }
          else if(+d.rating === 5) { return 'green'; }
        },
        strokeWidth: function(d) {
          if(+d.rating === 1 || +d.rating === 5) {
            return 10;
          }
        }
      })
      .on('mouseover', function(d) {
        console.log('mouseover', d);
        tooltip.text(d.book.title+' ('+d.rating+'/5) is '+ (+d.book.num_pages)+ ' long');
        tooltip.position(d3.event.pageX, d3.event.pageY);
        tooltip.show();
      })
      .on('mouseout', function() {
        return tooltip.hide();
      });
  }
}

}());
