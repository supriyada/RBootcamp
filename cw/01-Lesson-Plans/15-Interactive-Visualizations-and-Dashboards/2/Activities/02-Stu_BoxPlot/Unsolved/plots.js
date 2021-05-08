var data = temps;
console.log(data);

var trace1 = {
    y:temps.newyork,
    name: "New York",
    type: "box",
    boxpoints:"all"
  };
  
  var trace2 = {
    y:temps.houston,
    name: "Houston",
    type: "box"
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    title: "Temp in NY & Houston",
    yaxis:{title:"Degree in F"}
  };
  
  // Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout)
  