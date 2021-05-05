// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");
  // Get the value property of the input element
  var inputValue = inputElement.property("value")
  console.log(inputValue);
  // Use the form input to filter the data by blood type
  var dataBloodType = people.filter(people => people.bloodType == inputValue);
  console.log(dataBloodType)

  
  // BONUS: Calculate summary statistics for the age field of the filtered data
  var ageArray = dataBloodType.map(person => person.age);
  console.log(ageArray);
  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  var meanAge = math.mean(ageArray);
  var medianAge = math.median(ageArray);
  var modeAge = math.mode(ageArray);
  var varAge = math.variance(ageArray);
  var stdAge = math.std(ageArray);

  console.log(`Average age : ${meanAge}`);
  console.log(`Median age : ${medianAge}`);
  console.log(`Mode age : ${modeAge}`);
  console.log(`Variance age : ${varAge}`);
  console.log(`Standard Deviation age : ${stdAge}`);

  // Finally, add the summary stats to the `ul` tag
  var summary_list = d3.select(".summary");
  summary_list.html("");
  summary_list.append("li").text(`Average age : ${meanAge}`);
  summary_list.append("li").text(`Median age : ${medianAge}`);
  summary_list.append("li").text(`Mode age : ${modeAge}`);
  summary_list.append("li").text(`Variance age : ${varAge}`);
  summary_list.append("li").text(`Standard Deviation age : ${stdAge}`);


};
