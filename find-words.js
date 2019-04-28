/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

// optimization: use backtracking on alreadyVisitedNodes instead of slice() and include method

const dfs = function(x, y, board, word, wordIndex, temp, alreadyVisitedNode) {
  alreadyVisitedNode.push(`${x}${y}`);
  if (board[x][y] === word[wordIndex]) {
    temp.push(board[x][y]);
    if (wordIndex === word.length - 1) return true;
    if (x >= 1 && !alreadyVisitedNode.includes(`${x - 1}${y}`) && dfs(x - 1, y, board, word, wordIndex + 1, temp, alreadyVisitedNode.slice())) return true;
    if (x < board.length - 1 && !alreadyVisitedNode.includes(`${x + 1}${y}`) && dfs(x + 1, y, board, word, wordIndex + 1, temp, alreadyVisitedNode.slice())) return true;
    if (y >= 1 && !alreadyVisitedNode.includes(`${x}${ y-1}`) && dfs(x, y - 1, board, word, wordIndex + 1, temp, alreadyVisitedNode.slice())) return true;
    if (y < board[x].length - 1 && !alreadyVisitedNode.includes(`${x}${ y + 1 }`) && dfs(x, y + 1, board, word, wordIndex + 1, temp, alreadyVisitedNode.slice())) return true;;
  }
  return false;
};

const isWordFoundOnBoard = (board, word) => {
  // looping through board
  const overSizeOfBoard = board.length * board[0].length;
  if (word.length > overSizeOfBoard) return false;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === word[0] && dfs(x, y, board, word, 0, [], [])) {
        return true;
      }
    }
  }
  return false;
};

const findWords = function(board, words) {
  return words.filter((word) => {
    return isWordFoundOnBoard(board, word);
  });
};

let board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];

// console.log(isWordFoundOnBoard(board, "oath"))
// console.log(isWordFoundOnBoard(board, "pea"))
// console.log(findWords(board, ["oath","pea","eat","rain"]))

board = [
  ["a","b"],
  ["a","a"]
];

// console.log(isWordFoundOnBoard(board, "bab"))

board = [
  ["a","b"],
  ["c","d"]
]


console.log(findWords(board, ["cdba"]))
