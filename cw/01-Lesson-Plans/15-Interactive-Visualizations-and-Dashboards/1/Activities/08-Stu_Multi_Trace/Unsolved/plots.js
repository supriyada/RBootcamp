console.log(data);
// YOUR CODE HERE
// Trace1 for the Greek Data
var trace1 = {
    x: data.map(name => name.pair),
    y: data.map(name => name.greekSearchResults),
    text: data.map(name => name.greekName),
    type: "bar"
  };
  
  // Trace 2 for the Roman Data
  var trace2 = {
    x: data.map(name => name.pair),
    y: data.map(name => name.romanSearchResults),
    text:data.map(name => name.romanName),
    type: "bar"
  };
  
  // Combining both traces
  var data =[trace1,trace2];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Greek vs Roman gods search results",
    barmode: "group"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot",data,layout)
  