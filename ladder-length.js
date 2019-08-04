/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const isATransform = (word1, word2) => {
    let once = false;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        if (!once) {
          once = true;
        } else {
          return false;
        }
      }
    }
    return true;
  }
  const composeRelationships = (wordList) => {
    const relationships = {};
    for (let i = 0; i < wordList.length; i++) {
      let currWord = wordList[i];
      relationships[currWord] = [];
      for (let j = 0; j < wordList.length; j++) {
        if (i !== j) {
          let compareWord = wordList[j];
          isATransform(currWord, compareWord)? relationships[currWord].push(compareWord) : null;
        }
      }
    }
    return relationships;
  }

  const relationships = composeRelationships(wordList);

  
  let shortestPath = Infinity;

  function bfs(startWord) {

    const visited = [startWord];
    const queue = [{ currWord: startWord, path: 1 }];

    // once u have a begin word, now since we are on that 
    while (queue.length > 0) {
      const { currWord, path } = queue.shift();
      console.log(currWord, path);
      if (currWord === endWord) {
        console.log(currWord, path, shortestPath, '===');
        shortestPath = path < shortestPath ? path : shortestPath;
      }
      const nextList = relationships[currWord];
      
      for (let i = 0 ; i < nextList.length; i++) {
        let nextWord = nextList[i];
        if (!visited.includes(nextWord)) {
          visited.push(nextWord);
          queue.push({ currWord: nextWord, path: path + 1});
        }
      }
    }

  }

  for (let i = 0 ; i < wordList.length; i++) {
    let nextWord = wordList[i];
    if (isATransform(beginWord, nextWord)) {
      bfs(nextWord);
    }
  }
  
  // bfs to find out the relationship graph


  console.log(shortestPath)
  return shortestPath === Infinity? 0 : shortestPath + 1;

};
ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]);