var x=["beer", "wine", "martini", "margarita",
"ice tea", "rum & coke", "mai tai", "gin & tonic"]
var y=[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6]

// Part 1 BAR CHART
var trace1 = {x : x,
                y : y,
            type : "bar"}

var data = [trace1];

//Plotly.newPlot("plot",data)
// Part 2 - Adding attributes

var layOut = {title : "Alcoholic beverages",
                xaxis : {title:"Drink Name"},
                yaxis : {title:"content"}};

Plotly.newPlot("plot", data, layOut);
// Part 3 - Line Chart
var trace2 = {x : x,
    y : y,
    type : "line"}

var data1 = [trace2];

var layOut1 = {title : "Alcoholic beverages",
xaxis : {title:"Drink Name"},
yaxis : {title:"content"}};

Plotly.newPlot("plot", data1, layOut1);

// Part 4 - Broken Pie Chart

var trace3 = {labels : x,
    values : y,
    type : "pie"}

var data2 = [trace3];

var layOut2 = {title : "Alcoholic beverages",
xaxis : {title:"Drink Name"},
yaxis : {title:"content"}};

Plotly.newPlot("plot", data2, layOut2);

  
// Part 5 - Working Pie Chart
