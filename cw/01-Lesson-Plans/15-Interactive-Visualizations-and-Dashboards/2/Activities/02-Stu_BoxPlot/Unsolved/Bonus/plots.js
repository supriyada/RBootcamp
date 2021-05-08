// Create the Traces
var trace1 = {
  x:data.organ,
  y: data.survival.map(val => Math.sqrt(val)),//calculate sqrt for all the values retrieved...
  type:"box",
  name:"Cancer"
  };
  
  // Create the data array for the plot
var data = [trace1];
  
  // Define the plot layout
  var layout = {title:"Cancer ",
                xaxis:{title:"Organs"},
                yaxis:{title:"sqrt of the survival"}}
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot",data,layout);
  