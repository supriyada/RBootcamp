// Switch function
function example(input) {
    switch (input) {
        case "A":
            console.log(`The number against ${input} is 1`);
            break;
        case "B":
            console.log(`The number against ${input} is 2`);
            break;
        case "C":
            console.log(`The number against ${input} is 3`);
            break;
        case "D":
            console.log(`The number against ${input} is 4`);
            break;
        case "E":
            console.log(`The number against ${input} is 5`);
            break;
        default:
            console.log(`Input does not match.... 0`);
            break;
    }
}
var input = window.prompt("Enter your name: ");
example(input.toUpperCase());

/*var option = "y";
while (option === "y"){
    var input = window.prompt("Enter your name: ");
    example(input.toUpperCase());
    var option = window.prompt("Do you wish to conitnu:(y/n)");
    if 
}*/