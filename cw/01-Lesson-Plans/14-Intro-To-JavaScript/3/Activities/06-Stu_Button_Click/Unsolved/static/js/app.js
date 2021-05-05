// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
var upvote = d3.select(".upvote");
var downvote = d3.select(".downvote");

// Select the counter h3 element
var counter = d3.select(".counter");
var counter_text = parseInt(counter.text());
// Use D3 `.on` to attach a click handler for the upvote
/*function upHandle(){
  var currVote = parseInt(counter.text());
  currVote += 1;
  counter.text(currVote);
}
upvote.on("click",upHandle);
*/
// function inline handling click
upvote.on("click",function(){
  counter.text(counter_text += 1);
})

// Use d3 `.on` to attach a click handler for the downvote
function downHandle(){
  var currVote = parseInt(counter.text());
  currVote -= 1;
  counter.text(currVote);
}
downvote.on("click",downHandle);