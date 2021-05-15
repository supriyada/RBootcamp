var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  d3.csv("data.csv").then(function(smurfData) {
      console.log(smurfData)

      var parseTime = d3.timeParse("%d-%b-%Y");

      // Format the data
      smurfData.forEach(function (data) {
          data.date = parseTime(data.date);
          data.dow_index = +data.dow_index;
          data.smurf_sightings = +data.smurf_sightings;
      });

     // Create scaling functions
      var xTimeScale = d3.scaleTime()
          .domain(d3.extent(smurfData, d => d.date))
          .range([0, width]);

      var yLinearScale1 = d3.scaleLinear()
          .domain([0, d3.max(smurfData, d => d.dow_index)])
          .range([height, 0]);

      var yLinearScale2 = d3.scaleLinear()
          .domain([0, d3.max(smurfData, d => d.smurf_sightings)])
          .range([height, 0]);

      var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b-%Y"));
      var yLeftAxis = d3.axisLeft(yLinearScale1);
      var yRightAxis = d3.axisRight(yLinearScale2);

      chartGroup.append("g")
                .attr("transform",`translate(0,${height})`)
                .call(bottomAxis)

      chartGroup.append("g")
                .call(yLeftAxis)

      chartGroup.append("g")
                .attr("transform",`translate(${width},0)`)
                .call(yRightAxis)

      var line1 = d3.line()
                    .x(d => xTimeScale(d.date))
                    .y(d => yLinearScale1(d.dow_index))

      var line2 = d3.line()
                    .x(d => xTimeScale(d.date))
                    .y(d => yLinearScale2(d.smurf_sightings))

                    
      chartGroup.append("path")
                .data([smurfData])
                .attr("d", line1)
                .classed("line green", true);

      chartGroup.append("path")
                .data([smurfData])
                .attr("d", line2)
                .classed("line blue", true);

      chartGroup.append("text")
                .attr("transform",`translate(${width/3},${height+45})`)
                .text("Dow Index")
                .classed("line green", true);

        chartGroup.append("text")
                .attr("transform",`translate(${width/2},${height+45})`)
                .text("Sightings")
                .classed("line blue", true);
  })