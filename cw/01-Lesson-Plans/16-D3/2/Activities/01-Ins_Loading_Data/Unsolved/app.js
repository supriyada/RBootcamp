d3.csv("./hours-of-tv-watched.csv").then(function (tvData){
    console.log(tvData);
    var names = tvData.map(data => data.name);
    var hours = tvData.map(data => parseInt(data.hours));
    
})