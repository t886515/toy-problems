/**
 * @param {string[]} words
 * @return {string[][]}
 */
function checkIsSquares(tempArray) {
  const loopAmount = tempArray.length;
  for (let i = 0; i < loopAmount; i++) {
    for (let j = 0; j < loopAmount; j++) {
      if (tempArray[i][j] !== tempArray[j][i]) {
        return false;
      }
    }
  }
  return true;
}

const wordSquares = function (words) {
  let finalSet = [];

  function recursivelyAdding(wordsArray, tempArray, targetLength) {
    if (targetLength === 0) {
      finalSet.push(tempArray.slice());
      return;
    }

    for (let wordIndex = 0; wordIndex < wordsArray.length; wordIndex++) {
      tempArray.push(wordsArray[wordIndex]);
      if (checkIsSquares(tempArray)) {
        recursivelyAdding((wordsArray.slice(0, wordIndex).concat(wordsArray.slice(wordIndex))), tempArray, targetLength - 1);
      };

      tempArray.pop();
    }

  };

  let tempArray = [];

  // tempArray.length will be the base case
  //
  recursivelyAdding(words, tempArray, words[0].length);
  return finalSet;


};


console.log(wordSquares(["area","lead","wall","lady","ball"]));
console.log(wordSquares(["abat","baba","atan","atal"]))

// console.log(checkIsSquares(["wall", "xrea"]));
