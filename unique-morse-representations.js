/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const uniqueSet = new Set();
  const dictionary = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];
  words.forEach(word => {
    console.log(word);
    let temp = '';
    for (let i = 0; i < word.length; i++) {
      let index = word[i].charCodeAt(0) - 97;
      console.log(index);
      temp += dictionary[index];
    }
    console.log(temp);
    uniqueSet.add(temp);
  });
  return uniqueSet.size;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
