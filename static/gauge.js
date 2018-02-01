
function create_gauge() {

  console.log('create_gauge')

  var   width = 200
  var   height = 100

  var svgContainer = d3.select("div#temp")
    .append('svg')
    .attr('width', width)
    .attr('height', height);


  var xScale = d3.scaleLinear()
      .domain([-5, 30])
      .range([15, 185]);

  var rect = svgContainer
    .append('rect')
    .attr('x','10')
    .attr('y','20')
    .attr('height', height - 40)
    .attr('width', width - 20)
    .attr('class','border');

  var defs1 = svgContainer
    .append('defs')
    .append('linearGradient')
      .attr('id','Gradient1')
      .attr('x1','0')
      .attr('y1','0')
      .attr('x2','0')
      .attr('y2','1')

   defs1.append('stop')
    .attr('offset','0')
    .attr('class','stop-right')

    defs1.append('stop')
    .attr('offset','1')
    .attr('class','stop-left');

  var line = svgContainer
    .append('line')
    .attr('id','t')
    .attr('stroke','#d00')
    .attr('stroke-width','2')

  var axis = d3.axisBottom(xScale);

  svgContainer.append("g")
      .attr("transform", "translate(0," + height / 2 + ")")
      .call(axis);

  var x = -5

  xInterval = setInterval(function() {



    x = x + 1
    line.attr('x1',xScale(x))
    line.attr('x2',xScale(x))
    line.attr('y1',20)
    line.attr('y2',80)

    if (x > 28) {
      clearInterval(xInterval)
    }

  } , 200)












}
