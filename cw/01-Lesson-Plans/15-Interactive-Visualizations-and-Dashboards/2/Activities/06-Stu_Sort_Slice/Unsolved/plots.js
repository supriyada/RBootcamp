// Sort the data by Greek search results
var searchResult = data.map(name => name.greekSearchResults);
console.log(searchResult);

searchResult.sort((a,b) => b-a);
console.log(searchResult);

// Slice the first 10 objects for plotting
var firstTen = searchResult.slice(0,10);
console.log(firstTen);
// Reverse the array to accommodate Plotly's defaults
//firstTen.sort((a,b) => b-a);
console.log(firstTen);
// Trace1 for the Greek Data
var trace1 = {x:firstTen.map(name => name.greekName),
             y:firstTen.map(name => name.greekSearchResults),
            type:"bar",
            orientation:"horizontal"}
// data
var data = [trace1]
// Apply the group bar mode to the layout

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot",data);