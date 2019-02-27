/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length === 0) return '';
  if (s.length < t.length) return '';
  if (t.length === 1) return s.includes(t) ? t : '';
  let start = 0;
  let end = 0;
  let minNum = s.length + 1;
  let keepIndex = null;
  const hashMap = {};

  for (let i = 0; i < t.length; i++) {
    hashMap[t[i]] = hashMap[t[i]] ? hashMap[t[i]] + 1 : 1;
  }

  let counter = t.length;

  console.log(hashMap);

  while (end < s.length) {
    // as we increase end, if we find s[end] in hashMap is false,
    // then we map it to the corresponding index and decrease counter by 1
    if (typeof hashMap[s[end]] === 'number') {
      hashMap[s[end]]--;
      if (hashMap[s[end]] >= 0) counter--;
    }
    console.log(s[end], hashMap, start, end, '---', counter);

    while (counter === 0) {
      // console.log(end, start, '=f==f=f=f');
      if (end - start < minNum) {
        console.log(start, end);
        minNum = end - start;

        keepIndex = [start, end];
      }

      if (hashMap[s[start]] <= 0) {
        hashMap[s[start]]++;
        console.log(hashMap[s[start]], s[start], hashMap);
        if (hashMap[s[start]] > 0) counter++;
      }
      start++;
    }
    end++;

    // when we are at an end index that has counter = 0, we start increasing the begining index until we turn a character off, then we increase counter
    // by 1, which breaks the second while loop in here where we only will be moving beginning index when counter = 0;
  }
  console.log(keepIndex);

  return keepIndex ? s.slice(keepIndex[0], keepIndex[1] + 1) : '';
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('aa', 'a'));
console.log(minWindow('a', 'aa'));
console.log(minWindow('bba', 'ab'));
console.log(minWindow('aa', 'aa'));
console.log(minWindow('babb', 'baba'));
