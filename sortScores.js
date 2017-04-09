// function sortScores(unsortedScores, highestPossibleScore) {

// 	var scores = [];
// 	var sortedScores = [];

// 	for (var i = 0; i <= highestPossibleScore; i++) {
// 		scores[i] = 0;
// 	}

// 	for (var i = 0; i < unsortedScores.length; i++) {
// 		scores[unsortedScores[i]]++;
// 	}

// 	for (var i = 0; i < scores.length; i++) {
// 		if (scores[i] > 0) {
// 			sortedScores.concat(Array(scores[i]).fill(i));
// 		}
// 	}
// 	return sortedScores;
// }

function sortScores(unorderedScores, highestPossibleScore) {

  // array of 0s at indices 0..highestPossibleScore
  var scoreCounts = [];
  for (var i = 0; i < highestPossibleScore + 1; i++) {
      scoreCounts.push(0);
  }

  // populate scoreCounts
  unorderedScores.forEach(function(score) {
      scoreCounts[score]++;
  });

  // populate the final sorted array
  var sortedScores = [];

  // for each item in scoreCounts
  scoreCounts.forEach(function(count, score) {

      // for the number of times the item occurs
      for (var time = 0; time < count; time++) {
          sortedScores.push(score);
      }
  });

  return sortedScores;
}