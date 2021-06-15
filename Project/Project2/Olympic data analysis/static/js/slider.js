queue()
    .defer(d3.json,"/find")
    .await(ready);

function ready(error, dataset){
       
        console.log("hi");
        console.log(dataset)
        test1(dataset);
}
    






