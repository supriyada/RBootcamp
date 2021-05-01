// A JavaScript object is similar to a Python dictionary
var movie = {
    name: "Star Wars",
    year: 1977,
    profitable: true,
    sequels: [5, 6, 1, 2, 3, "The Last Jedi"]
  };
  
  // JavaScript also allows value lookup via dot notation
  console.log(movie.name);
  console.log(movie.profitable);
  console.log(movie.sequels[2]);
  
  // JS also allows value lookup via bracket notation--note the similarity to Python
  console.log(movie["name"]);
  console.log(movie["profitable"]);
  
  // Add a key-value pair to an existing object
  movie.creator = "Disney"
  console.log(movie.creator)
  // Delete a key-value pair
  delete movie.creator;
  console.log(movie);
  // Check whether a key exists in an object
  if ("sequels" in movie){
    console.log("Exists")
  }
  else{
    console.log("Does not exists")
  }
  
  // Built-in object methods in JavaScript
  // An array of objects
  var people = {
    mom: "wilma flintstone",
    dad: "fred flintstone",
    daughter: "pebbles",
    son: "bambam"
  };
  
  // Display the entire object, both keys and values
  console.log(people);
  
  // Display only the keys of the object
  console.log(Object.keys(people));
  
  // Display only the values of the object
  console.log(Object.values(people));
  
  // Display a key-value pair held in an array
  console.log(Object.entries(people));
  