function wordCount(myString) {
    // Convert string to an array of words
    var stringArray = myString.split(" ");
  
    // An object to hold word frequency
    freq_words = {}
  
    // Iterate through the array
    for (var i = 0; i < stringArray.length; i++) {
      var currWord = stringArray[i]
        if (currWord in freq_words){
          freq_words[currWord] += 1;
        }
        else{
          freq_words[currWord] = 1
        }
    }
    console.log(freq_words)
    return freq_words
  }
  
  wordCount("I yam what I yam and always will be what I yam");
  