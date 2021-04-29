// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

for (var i = 0; i < movieScores.length; i++) {
  score = movieScores[i]
  sum += score
  console.log("Movie score:", score);
  if (score > 7){
    goodMovieScores.push(score);
    console.log(score," is good movie.");
  }
  else if (score <= 7 && score >= 5){
    okMovieScores.push(score);
    console.log(score, " is okay!!");
  }
  else{
    badMovieScores.push(score);
    console.log(score," is bad movie.");
  }
}
console.log("Good movies list:",goodMovieScores.length);
console.log("Okay movies list:",okMovieScores.length);
console.log("Bad movied list: ",badMovieScores.length);

var avg_rating = sum / movieScores.length
console.log("The average rating is: ",avg_rating)

//for (var i=0; i<goodMovieScores.length; i++) {
  //console.log(goodMovieScores[i]);
//}