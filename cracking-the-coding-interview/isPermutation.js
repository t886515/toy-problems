function permutation(str1, str2) {
  const str1Map = {};
  for (let c in str1) {
    str1Map[c] = str1Map[c] ? str1Map[c]++ : 1;
  }

  for (let c in str2) {
    if (str1Map[c] > 0) {
      str1Map[c] = str1Map[c] - 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(permutation('cata', 'taca'));