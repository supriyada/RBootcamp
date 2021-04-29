// Create a variable called "name" that holds a string
var name = "Priya";
// Create a variable called "country" that holds a string
var country = "United states";
// Create a variable called "age" that holds an integer
var age = 33;
// Create a variable called "hourlyWage" that holds an integer
var hourlyWage = 15.2;
console.log(`The hourly wage is: ${hourlyWage}`)
// Calculate the "dailyWage" for the user
var dailyWage = hourlyWage*8;
// Create a variable that holds a number as a string
var weekly_hrs = "42";

// Create a variable called 'weeklyWage' that converts a string into an integer
var weeklyWage = hourlyWage * parseInt(weekly_hrs);
// Create a variable called "satisfied" that holds a boolean
var satisfied = false;
// Print out "Hello <name>!"
console.log(`Hello ${name}!`);
// Print out what country the user entered
console.log(`The country you live is ${country}.`);
// Print out the user's age
console.log(`You are ${age} years old.`);
// Print out the daily wage that was calculated
console.log(`Your daily wage is ${dailyWage}.`);
// Print out the weekly wage that was calculated
console.log(`The weeklyWage is ${weeklyWage}.`);
// Using an IF statement to print out whether the users were satisfied
if (satisfied === true){
    console.log("You are satisfied by the pay!!!");
}
else {
    console.log("You are not satisfied by the pay!!!");
}