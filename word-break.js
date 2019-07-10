/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

 // COME BACK AND STUDY

// with this implementation, we are mainly keeping track of the major S and use it as the major "orientation" of backtracking.
// instead like the normal combination array or collection for other backtracking, the start index keeps track of the "combination"
// or, in this case, the portions of the first couple Ss that were "crossed out"

var wordBreak = function(s, wordDict) {
    if (!s.length) return true;
    if (s.length === 1) return wordDict.includes(s);
    
    function backtracking(start, memo) {
        if (start === s.length) {
            return true;
        }
        
        if (memo[start] !== undefined) {
            return memo[start];
        }
        
        for (let end = start + 1; end < s.length + 1; end++) {
            
            if (wordDict.includes(s.slice(start, end)) && backtracking(end, memo)) {
                
                memo[start] = true;
                return true;
            }
        }
        memo[start] = false;
        return false;
    }
    return backtracking(0, new Array(s.length));
    
};