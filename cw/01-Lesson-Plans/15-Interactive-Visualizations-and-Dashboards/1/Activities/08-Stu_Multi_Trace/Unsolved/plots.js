console.log(data);
// YOUR CODE HERE
// Trace1 for the Greek Data
var trace1 = {
    x: data.map(name => name.pair),
    y: data.map(name => name.greekSearchResults),
    text: data.map(name => name.greekName),
    name: "Greek",
    type: "bar"
  };
  
  // Trace 2 for the Roman Data
  var trace2 = {
    x: data.map(name => name.pair),
    y: data.map(name => name.romanSearchResults),
    text:data.map(name => name.romanName),
    name: "Roman",
    type: "bar"
  };
  
  // Combining both traces
  var data =[trace1,trace2];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Greek vs Roman gods search results",
    xaxis:{title:"Paired name"},
    yaxis:{title:"Search count"},
    barmode: "stack"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot",data,layout)
  