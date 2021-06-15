queue()
    .defer(d3.json,"/find/")
    //.defer(d3.json,"/findMedal/")
    .await(ready);

//Function call to visualizations during initial load
function ready(error, defaultAllData, defaultTableData){
       var all = "all"
        console.log("Inside slider.js");
        console.log(defaultAllData)
        //tableByYear(data); <--Include visualization function calls here
        tableByYear(defaultAllData); //Priya
        //createPlot(defaultAllData); //Priya
        genderChart(defaultAllData) //Summya
        bubbleChart(defaultAllData) //Lipika
        mapChart(defaultAllData) //Amita
}

// function selectedYear(element){
//     findYear(element);
//     findTableByYear(element);
// }

function findYear(element){
    var all = "all"
    //Function call to visualizations after onclick event on year
    fetch('/findByYear?year=' + element)
    .then((response) => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        genderChart(data); //Summya
        tableByYear(data); //Priya<--Include visualization function calls here
        bubbleChart(data) //Lipika
        mapChart(data) //Amita
        });
}

//Onclick from bubble
function clickselect(clickval){
    fetch('/findByCountry?country=' + clickval)
    .then((response) => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        genderChart(data); //Summya
        tableByCountry(data); //Priya<--Include visualization function calls here
        
        });
  }







