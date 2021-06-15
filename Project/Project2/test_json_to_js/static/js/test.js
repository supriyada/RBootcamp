queue()
    .defer(d3.json,"/budget/projects/another")
    .await(ready);

function ready(error,data){
    var storeData = data
    console.log(storeData)
    storeData.forEach(function (sd){
        console.log(sd)
    })
}