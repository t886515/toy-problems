/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n, upperScope = true) {
  if (n === 0) {
    return [''];
  }
  if (n === 1) {
    return ['0', '1', '8'];
  }
  if (n === 2) {
    return ['11', '69', '88', '96'];
  }

  const theList = findStrobogrammatic(n - 2, false).slice();
  const newList = [];
  if (n === 4) {
    theList.push('00');
  }
  theList.forEach(base => {
    if (!upperScope) {
      newList.push('0' + base + '0');
    }
    newList.push('1' + base + '1');
    newList.push('6' + base + '9');
    newList.push('8' + base + '8');
    newList.push('9' + base + '6');
  });
  return newList;
};

// console.log(findStrobogrammatic(3));
console.log(findStrobogrammatic(5));
