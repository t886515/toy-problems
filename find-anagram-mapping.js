var anagramMappings = function(A, B) {
  const BMap = B.reduce((obj, b, i) => {
    obj[b] = i;
    return obj;
  }, {});
  return A.map(num => {
    return BMap[num];
  });
};
