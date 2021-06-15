queue()
    .defer(d3.json, "/store")
    //.defer(d3.json, "static/geojson/us-states.json")
    .await(makeGraphs);

function makeGraphs(error, data){
    console.log("hello")
}