/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let lastIndex = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let currStr = s[i];
        let hadLastOccurance = map.has(currStr);
        let lastOccurance = map.get(currStr);
        
        // if this current string had not appear, or it had appear but it's older than the last valud index
        if (!hadLastOccurance || lastOccurance < lastIndex) {
            map.set(currStr, i);
            
        // if this current string had appear and it's after the last index change
        } else if (hadLastOccurance && lastOccurance >= lastIndex) {
            
            // when we find a duplicate, check if this can be new max
            max = i - lastIndex > max ? i - lastIndex : max;
            
            // can not just set it whenever because it needs to meet the above two conditions
            map.set(currStr, i);
            
            // need to reset the last index, or the last starting point since we found the next same char, so have to start from at least one after that last same char
            lastIndex = lastOccurance + 1;
        }
    }
    return s.length - lastIndex > max ? s.length - lastIndex : max;
};