/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds) {
  // TODO: your solution here
  var results = [];
  var throwChoices = ['rock', 'paper', 'scissors'];

  var findCombos = function (roundsLeft, prevThrows) {
    if (roundsLeft === 0) {
      results.push(prevThrows);
      return;
    }

    if (prevThrows === undefined) {
      prevThrows = [];
    }

    for (var i = 0; i < throwChoices.length; i++) {
      findCombos(roundsLeft - 1, prevThrows.concat(throwChoices[i]));
    }
  };

  if (rounds === undefined) {
    findCombos(3);
  } else {
    findCombos(rounds);
  }

  return results;
};
