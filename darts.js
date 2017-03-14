function scoreThrows(scores) {
  var totalPoints = 0;
  var bonusPoints = 100;

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] === undefined) {
      totalPoints = -1;
      bonusPoints = 0;
      break;
    } else if (scores[i] < 5) {
      totalPoints += 10;
    } else if (scores[i] < 10) {
      totalPoints += 5;
      bonusPoints = 0;
    } else {
      bonusPoints = 0;
    }
  }
  totalPoints += bonusPoints;
  return totalPoints;
}

console.log(scoreThrows( [1, 5, 11] )); // returns 15
console.log(scoreThrows( [15, 20, 30] )); // returns 0
console.log(scoreThrows( [1, 2, 1, 4, 4, 2] )); // returns 160