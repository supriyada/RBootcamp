// Array of student names
var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

// This function will be called for each element in the array
function printName(name) {
  console.log(name);
}

//Print the array by calling the function printName
for(var i = 0; i<students.length;i++){
  printName(students[i]);
}

//Print the array with direct print
for(var i = 0; i<students.length;i++){
  console.log(students[i]);
}

//print using forEach to loop thru array
students.forEach(printName)

//anonymous fns or inline function
students.forEach(function (name) {
  console.log(name);
});