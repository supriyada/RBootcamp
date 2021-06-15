queue()
    .defer(d3.json,"/budget/projects")
    .await(read_val);

var sliderValue;
var slider = new Slider("#ex1", {
	tooltip: 'always'
});


function read_val(error,data,sliderValue){
    //test(sliderValue);
    console.log(data);
    test1(data);
}

slider.on("slide", function(sliderValue) {
	console.log(sliderValue);
    test(sliderValue);
    sliderValue = sliderValue;
});





