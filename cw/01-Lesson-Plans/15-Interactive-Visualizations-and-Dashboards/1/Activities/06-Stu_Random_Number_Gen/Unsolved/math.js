// @TODO: Complete the following sections to create a lottery number generator.


// Create an empty array to add the numbers.
var powerBallNumbers = [];

function gen_random_number(min_value,max_value){
    return Math.floor((Math.random()*max_value)+min_value)
}

// Create a for loop to generate 5 random numbers between 1 and 59.
for( var i=0; i < 5; i++){
    powerBallNumbers.push(gen_random_number(1,59));
}

//  Check your numbers.
console.log(powerBallNumbers);

//Bonus: Add a 6th number to the array between 1 and 35.
powerBallNumbers.push(gen_random_number(1,35));

//  Check your numbers.
console.log(powerBallNumbers);


//  Additional bonus.
// How would you generate the random numbers using python?
