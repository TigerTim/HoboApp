function create_graph(data) {
  console.log('init')

  height = d3.select('div.graph').node().offsetHeight
  width = d3.select('div.graph').node().offsetWidth

  svg = d3.select('div.graph').append('svg')
  svg.attr('width', width)
  svg.attr('height', height)

  var xScale = d3.scaleLinear()
      .domain([0, 30])
      .range([10, width]);

  var yScale = d3.scaleLinear()
      .domain([0, 30])
      .range([10, height]);

  var valueline = d3.line()
    .x(function(d) { return xScale(d.a); })
    .y(function(d) { return yScale(d.b); });

  svg.append('g').append("path")
      .data([data])
      .attr("stroke",'#fff')
      .attr("fill",'none')
      .attr("stroke-width",'1')
      .attr("d", valueline);

  var axis = d3.axisBottom(xScale).ticks(5);

  svg.append("g")
      .attr('transform', 'translate(0,' + (height - 20) + ')')
      .attr('class', 'white')
      .call(axis);

}
