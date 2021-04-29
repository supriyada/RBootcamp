var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function avg(movieScore){
    sum = 0
    for(var i = 0;i<movieScore.length;i++){
        sum += movieScore[i];
    }
    avg_score = sum/movieScore.length
    return avg_score
}

function variance(movieScore){
    var mean_value = avg_score;
    var s =0;
    for(var i = 0;i<movieScore.length;i++){
        b = (movieScore[i]-mean_value)**2;
        s += b
    }
    var_score = s/(movieScore.length)
    return var_score
}

function std(movieScore){
    var var_value = var_score;
    std_score = Math.sqrt(var_value)
    return std_score

}

console.log("Movie statistics:")
console.log("The average is: ",avg(movieScore));

console.log("The variance is:",variance(movieScore));

console.log("The standard deviation is:",std(movieScore));
console.log("************************")
monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23]
console.log("Rainfall statistics:")
console.log("The average is: ",avg(monthlyAvgRainFall));

console.log("The variance is:",variance(monthlyAvgRainFall));

console.log("The standard deviation is:",std(monthlyAvgRainFall));
console.log("************************")

mileRunTimes = [5.06, 4.54, 5.56, 4.40, 7.10]
console.log("Miles Run statistics:")
console.log("The average is: ",avg(mileRunTimes));

console.log("The variance is:",variance(mileRunTimes));

console.log("The standard deviation is:",std(mileRunTimes));
