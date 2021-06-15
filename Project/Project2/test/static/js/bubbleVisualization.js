   
    function bubbleChart(dataset){
        console.log("Inside bubblechart.js")
        console.log(dataset);
    
    ///I NEED CODE WITH WILL ADD UP THE TOTAL AMOUNT OF MEDAL COUNT 
    function generateRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
      
    //var randomColor=generateRandomColor();
    //onsole.log("randomColor")
    //console.log(randomColor)
    
    var countryList = []
        var countryData = dataset.map(countryListFn => countryListFn.NOC);
        countryData.forEach((countryName) => {
            if (!(countryList.includes(countryName))){     
                countryList.push(countryName);
            }
        })
        var medalObj = [];
        countryList.forEach((countryName)=> {
            var countryItem = {};
            var goldMedal = dataset.filter(medalFn => (medalFn.NOC === countryName) && (medalFn.Medal === "Gold"));
            var silverMedal = dataset.filter(medalFn => (medalFn.NOC === countryName) && (medalFn.Medal === "Silver"));
            var bronzeMedal = dataset.filter(medalFn => (medalFn.NOC === countryName) && (medalFn.Medal === "Bronze"));
            console.log(countryName+":"+goldMedal.length+":"+silverMedal.length+":"+bronzeMedal.length)
            countryItem["Country"] = countryName;
            //countryItem["Gold"] = goldMedal.length;
            //countryItem["Silver"] = silverMedal.length;
            //countryItem["Bronze"] = bronzeMedal.length;
            countryItem["TotalMedal"]  = goldMedal.length + silverMedal.length + bronzeMedal.length;
            medalObj.push(countryItem);
        })
        console.log("medalobj")
        console.log(medalObj)
        console.log("countrydata")
        console.log(countryData)
        
        ///get count of each country total medal count 
        // var totmed = [];
        // for (i=0;i<medalObj.length;i++){
        //   var selectedmed = medalObj[i].TotalMedal;
        //   totmed.push(selectedmed);
        // }
        // console.log("totmed")
        // console.log(totmed)
    
        ///get each country unique name 
        // var uniquecoun = [];
        // for (i=0;i<medalObj.length;i++){
        //   var selectedcon = medalObj[i].Country;
        //   uniquecoun.push(selectedcon);
        // }
        // console.log("uniquecoun")
        // console.log(uniquecoun)
    
    result = [];
    medalObj.forEach(function(item) {
        // simple way is to take item as the original form
        //result.push(item); 
        // or do your own way
        result.push({
            
            value: item.TotalMedal,
            name: item.Country,
            color: generateRandomColor()
            
        });
    });
    
    console.log("result");
    console.log(result);
    
    Highcharts.chart('container', {
      chart: {
          type: 'packedbubble',
          height: '100%',
          backgroundColor: "transparent"
      },
      title: {
          text: 'Country'
      },
      subTitle: {
        text: 'Select Country'
      },
      tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}</sub>'
      },
      plotOptions: {
        series: {
        cursor: 'pointer',
        point: {
            events: {
              click: function () {
                clickselect(this.name);
                alert(this.name);
            }
            }
        },
        marker: {
            lineWidth: 1
        }
    },
        
          packedbubble: {
              maxSize: '200%',
              minSize: '50%',
              dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  style: {
                      color: 'black',
                      textOutline: 'none',
                      fontWeight: 'normal'
                  }
              },
              minPointSize: 10
          }
      },
      legend: {
        bubbleLegend: {
            enabled: false
        }
    },
      series: [{name: "Country",
          data:result,
          }]
    });
    
    }