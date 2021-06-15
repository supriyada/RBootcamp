 
  //create chart inside test 1 
  function genderChart(data){
      console.log("Inside genderChart.js")
      console.log(data);
  
      // create an object that accumulates the event types by gender
      var accumulator = {};
      //var year = data.map(d=> d.Year)
      var country = data.map(d=> d.Team)

      //default cumulative data
      for (var i=0; i<data.length; i++) {
          const current = data[i];
          const gender = current.Sex;
          const event = current.Sport;
          console.log("Gender:"+gender+":"+event)
          //const curr_year = current.Year;
          //const country = current.Team;
          if (!accumulator.hasOwnProperty(gender))
              accumulator[gender] = {};
          const thing = accumulator[gender];
          console.log("Inside Accumulator" + thing)
          if (thing.hasOwnProperty(event)) {
            thing[event]++;
          }
          else 
            thing[event] = 1;
        
        //loop here that filters the data to just the year user chooses on the slider
        //while (sliderValue == curr_year) {
          //accumulator[curr_year] = {};
        //}

      }
      
       

      //selected value with event listener 

  
      console.log(`${accumulator}`);
      var males = accumulator.M;
      var females = accumulator.F;
      var year = accumulator.curr_year;
      console.log(`Only males: ${males}`);
      console.log(`${females}`);
      //console.log(`years ${year.length}`)
      console.log(year);
      
      if(females === 'undefined'){
        var trace1 = {
          x: Object.keys(males),
          y: Object.values(males),
          name: 'Male',
          type: 'bar'
        };

        var data = [trace1]
      }
      else{
      //begin chart
      //xis events 
      //trace 1 is used for male 
    var trace1 = {
      x: Object.keys(males),
      y: Object.values(males),
      name: 'Male',
      type: 'bar'
    };
  
    var trace2 = {
      x: Object.keys(females),
      y: Object.values(females),
      name: 'Female',
      type: 'bar'
    };
  
    var data = [trace1, trace2];
  }
  
    var layout = { title: "male vs female", barmode: "stack" };
  
    Plotly.newPlot('new_bar', data, layout);
  
  };