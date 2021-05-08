// Initializes the page with a default plot
/*function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
  
    Plotly.newPlot("plot", data);
  }
  
init();*/

trace1 = {
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 4, 8, 16]};
  
trace2 = {
  x: [1, 2, 3, 4, 5],
  y: [3, 6, 9, 12, 15]
};

function init() {
  data = [trace1];
  Plotly.newPlot("plot",data);
}

d3.selectAll("#selDataset").on("change",updateChart);

function updateChart(){
  var selectedValue = d3.selectAll("#selDataset").node().value;
  console.log(selectedValue);
  if(selectedValue === "dataset1"){
    //Plotly.newPlot("plot",[trace1]);
    Plotly.restyle("plot", "x", [trace1.x]);
    Plotly.restyle("plot", "y", [trace1.y]);

  }
  else{
    //Plotly.newPlot("plot",[trace2]);
    Plotly.restyle("plot", "x", [trace2.x]);
    Plotly.restyle("plot", "y", [trace2.y]);
  }
}

init();