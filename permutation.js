const permutation = (str, prefix) => {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      rem = str.slice(0, i) + str.slice(i + 1);
      permutation(rem, prefix + str[i]);
    }
  }
};
const main = str => {
  permutation(str, '');
};

main('abc');
