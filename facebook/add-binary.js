/**
  Input: a = "11", b = "1"
  Output: "100"

  Input: a = "1010", b = "1011"
  Output: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

let addPrefixZeros = (length, str) => {
  let num = length - str.length;
  let prefix = '0'.repeat(num);
  return prefix + str;
}

let addBinary = function(a, b) {
  let amountToLoop = a.length > b.length ? a.length : b.length;
  let realA = a;
  let realB = b;
  if (amountToLoop > a.length) {
    realA = addPrefixZeros(amountToLoop, a);
  } else if (amountToLoop > b.length) {
    realB = addPrefixZeros(amountToLoop, b);
  }
  // let realA = a.padStart(amountToLoop, "0");
  // let realB = b.padStart(amountToLoop, "0");

  let temp = 0;
  let final = "";
  for (let i = amountToLoop - 1; i >= 0; i--) {
    const localA = realA[i];
    const localB = realB[i];
    if (localA !== localB) {
      final = temp ? "0" + final : "1" + final;
      temp = temp ? 1 : 0;
    } else if (temp) {
      final = "1" + final;
      temp = localA === "0" ? 0 : 1;
    } else {
      final = "0" + final;
      temp = localA === "0" ? 0 : 1;
    }
    // let calculate = Number(realA[i]) + Number(realB[i]) + temp;
    // if (calculate === 1) {
    //   final = "1" + final;
    //   temp = 0;
    // } else if (calculate === 2) {
    //   final = "0" + final;
    //   temp = 1;
    // } else if (calculate === 3) {
    //   final = "1" + final;
    //   temp = 1;
    // } else if (calculate === 0) {
    //   final = "0" + final;
    //   temp = 0;
    // }
  }

  return temp ? "1" + final : final
};


let a = "11";
let b = "1";

console.log(addBinary(a, b));

a = "1010";
b = "1011";
console.log(addBinary(a, b));

a = "0";
b = "0";
console.log(addBinary(a, b));

a = "100";
b = "110010";
console.log(addBinary(a, b));




