function scoreThrows(scores) {
  var totalPoints = 0;
  var bonusPoints = 100;

  if(!Array.isArray(scores)) {
    throw new Error("Array of Scores Only");
  }
  if (scores.length === 0) {
    totalPoints = -1;
    return totalPoints;
  }

  for (var i = 0; i < scores.length; i++) {
    if (typeof scores[i] !== "number") {
      throw new Error("Valid Numbers Only!");
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

module.exports = scoreThrows;