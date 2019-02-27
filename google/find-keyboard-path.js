/**
 * This is the question from my first Google phone interview. - 2/25/2019
 */

// inputs:
// width: 5
// word to type: 'DOG'

// A B C D E
// F G H I J
// K L M N O
// P Q R S T
// U V W X Y
// Z

// output: RRR * DDR * LLLU *

// 'A'.charCodeAt(0) -> 65

// // 26 alph
// // [ [] , [], [], ]
// 3, 14,
// 1 -> 1
// 1 -> 4
// 3 -> 5
// 2 -> 2

// PIZZA -> <some instructions> -> PIUUA

function findKeyboardPath(str, width) {
  // iterate thru str, compute the indexes based off of its value in alphabet
  // output -> [[0, 3], [2, 4], [1, 1]];
  const wordIndexCollections = [[0, 0]];
  const lastRow = Math.floor(26 / width);

  for (let i = 0; i < str.length; i++) {
    const mathPlace = str.charCodeAt(i) - 64; // 27
    const x = Math.floor(mathPlace / width);
    const y = (mathPlace % width) - 1;
    wordIndexCollections.push([x, y]);
  }
  return wordIndexCollections.reduce((finalStr, indexSet, i) => {
    if (i === wordIndexCollections.length - 1) {
      return finalStr;
    }
    const cur = indexSet;
    const next = wordIndexCollections[i + 1];
    const xMovement = next[0] - cur[0];
    const yMovement = next[1] - cur[1];

    // whenever if my x is at the very last row
    // cur x is at the last -> collect my D/U
    // next x is at the last row -> collect my R/L
    if (cur[0] === lastRow) {
      if (yMovement > 0) {
        finalStr += 'R'.repeat(yMovement);
      } else if (yMovement < 0) {
        finalStr += 'L'.repeat(yMovement * -1);
      }
      if (xMovement > 0) {
        finalStr += 'D'.repeat(xMovement);
      } else if (xMovement < 0) {
        finalStr += 'U'.repeat(xMovement * -1);
      }
    }

    if (xMovement > 0) {
      finalStr += 'D'.repeat(xMovement);
    } else if (xMovement < 0) {
      finalStr += 'U'.repeat(xMovement * -1);
    }
    if (yMovement > 0) {
      finalStr += 'R'.repeat(yMovement);
    } else if (yMovement < 0) {
      finalStr += 'L'.repeat(yMovement * -1);
    }

    // y+ R, y- L, x+ D, x- U

    return (finalStr += '*');
  }, '');
}
