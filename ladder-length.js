/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// not done
var ladderLength = function (beginWord, endWord, wordList) {
    let shortest = Infinity;
    function validTrans(word1, word2) {

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

    function bt(currList, currWord, count) {
        if (currWord === endWord) {
            if (count < shortest) {
                shortest = count;
            }
        }
        for (let j = 0; j < currList.length; j++) {
            let nextPotential = currList[j];
            let checkValid = validTrans(currWord, nextPotential);
            console.log(checkValid, currWord, nextPotential)
            if (checkValid) {
                let nextList = currList.slice(0, j).concat(currList.slice(j + 1));
                bt(nextList, nextPotential, count + 1);
            }
        }
    }

    bt(wordList, beginWord, 0);
    return shortest === Infinity ? 0 : shortest;

};


function validTrans(word1, word2) {

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