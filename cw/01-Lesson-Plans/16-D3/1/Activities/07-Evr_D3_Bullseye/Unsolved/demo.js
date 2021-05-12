// Part 1
// Generating an SVG
var svg = d3.select("body").append("svg")
svg.attr("width","300px")
   .attr("height","300px")

// Part 2
// Binding the SVG to data
var radius = [60,40,20];

var circles = svg.selectAll("circle");

circles.data(radius)
        .enter()
        .append("circle")
        .attr("cx",100)
        .attr("cy",100)
        .attr("r", function(d){
            return d
        })
        .attr("stroke","black")
        .attr("stroke-width","5")
        .attr("fill","red")
