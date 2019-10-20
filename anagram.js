function anagramPosition (string) {
  var result = [];
  var stringArr = string.split('');
  inner = (subset, array, n) => {
    if (subset.length === n) {
      if (result.indexOf(subset.join('')) === -1) {
        result.push(subset.join('')); 
      }
      return;
    }
    for (let i= 0; i < array.length; i++) {
      subset.push(array[i]);
      inner(subset, array.slice(0, i).concat(array.slice(i+1)), n);
      subset.pop();
    }
  }
  
  inner([], stringArr, string.length);
  
  result.sort();
  // console.log(result[29]);

  // return result
  // let count = 0;
  // for (let item of result) {
  //   if (item[0]==='A' && item[1]==='C') {

  //     count++
  //   }

  // }
  // return count;
  // for 
  return result.indexOf(string) +1;
}


// console.time('anagramPosition');

console.log(anagramPosition("STARK"))
