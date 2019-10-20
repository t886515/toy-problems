// var stockPricesYesterday = [5, 8, 2, 9, 18, 7];
var stockPricesYesterday = [10, 9, 8, 7, 6, 3];

const getMaxProfit = (priceArray) => {
  
  var kingRange = priceArray[1] - priceArray[0];
  var min = priceArray[0];
  // var curr = priceArray[0];
  for (let i = 1; i < priceArray.length; i++) {
    curr = priceArray[i];
    let diff = curr - min;
    diff > kingRange? kingRange = diff : null;
    curr < min? min = curr : null;
    // for (let j = i+1; j < priceArray.length; j++) {
    //   (priceArray[j] - priceArray[i]) > kingRange? kingRange = priceArray[j] - priceArray[i] : null;
    // }
  }
  return kingRange;
}

console.log(getMaxProfit(stockPricesYesterday));
