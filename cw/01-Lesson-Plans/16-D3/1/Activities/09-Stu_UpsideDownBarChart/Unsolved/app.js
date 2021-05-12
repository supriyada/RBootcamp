// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [15,20,25,20,15];

// Setting variable for height and width for ease of calculations
var svgHeight = 600;
var svgWidth = 400;

// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-area")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(booksReadThisYear)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 10;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
