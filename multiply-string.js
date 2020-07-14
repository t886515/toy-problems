function multiply(string1, string2) {
  if (string1 === "0" || string2 === "0") return "0";
  const numMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let product = "";

  for (let i = string1.length - 1; i >= 0; i--) {
    let firstNum = numMap[string1[i]];
    let carryOver = 0;
    for (let j = string2.length - 1; j >= 0; j--) {
      let secondNum = numMap[string2[j]];
      let tenthPower = string1.length - 1 + string2.length - 1 - i - j;

      let value = secondNum * firstNum + carryOver;
      let newNum = value % 10;
      carryOver = Math.floor(value / 10);

      if (product.length > tenthPower) {
        let insertIndex = product.length - 1 - tenthPower;
        let currValue = numMap[product[insertIndex]];
        newNum = newNum + currValue;
        if (newNum >= 10) {
          newNum = newNum % 10;
          carryOver++;
        }
        product =
          product.slice(0, insertIndex) +
          newNum +
          product.slice(insertIndex + 1);
      } else {
        product = newNum + product;
      }
    }
    if (carryOver > 0) {
      product = carryOver + product;
    }
  }
  return product;
}

console.log(multiplyString('123', '456'));