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

ReportLengthController.$inject = ['_', 'd3'];
function ReportLengthController(_, d3) {
  var vm = this;
  vm.d3 = d3;

  this.graph = function draw(el) {
    vm.setup(el);
    vm.draw(el);
  };

  this.setup = function setup(el) {
    vm.width = angular.element(el)[0].offsetWidth-65;
    vm.data = this.reviews;

    vm.maxPages = d3.max(vm.data, function(d) {
      return +d.book.num_pages;
    });

    vm.yScale = d3.scale.linear()
      .domain([0, vm.maxPages])
      .range([vm.width, 0]);
    vm.yAxis = d3.svg.axis()
      .scale(vm.yScale)
      .orient('left')
      .ticks(8);

    vm.xScale = d3.scale.ordinal()
      .domain(d3.range(vm.data.length))
      .rangeBands([0,vm.width], 0);
  }

  this.draw = function draw(el) {
    var svg = d3.select(el[0])
      .append('svg')
      .style({
        width: '100%',
        height: '100%'
      });

    // Colors
    var colorScale = d3.scale.linear()
      .domain([1,2,3,4,5])
      .range(["#C74131", '#D06559', '#77B789', '#CEE39E', "#9BC83B"])
      .interpolate(d3.interpolateHcl);

    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text('asdfa');

    // Y Axis
    var gy = svg.append('g').attr('transform', 'translate(50, 10)');
    vm.yAxis(gy);
    gy.selectAll('path').style({ fill: 'none', stroke: '#000000'});
    gy.selectAll('line').style({ stroke: '#000000'});

    // Data
    var g = svg.append('g')
               .attr('transform', 'translate(50,  0)')
    var circles = g.selectAll('circle').data(vm.data);
    circles.enter()
      .append('circle')
      .attr({
        cx: function(d, i) { return vm.xScale(i); },
        cy: function(d) { return vm.yScale(+d.book.num_pages); },
        r: vm.xScale.rangeBand(),
        fill: function(d) { return colorScale(+d.rating); },
        title: function(d) {
          return d.book.title + ' is ' + +d.book.num_pages + 'pages long.';
        }
      })
      .on("mouseover", function(d) {
        console.log('mouseover', d);
        tooltip.text(d.book.title+' ('+d.rating+'/5) is '+ (+d.book.num_pages)+ ' long');
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function(){return tooltip.style("top",
          (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
      .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
  }
};

function ReportLengthLink(scope, el, attrs, controller) {
  console.log('linking length report');
  
  //redraw when the window size changes
  var listener = scope.$watch(function() {
    return controller.reviews.length;
  }, function(length) {
    if(length > 0 ) {
      controller.graph(el);
      listener();
    }
  });
}

})();
