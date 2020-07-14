function multiply(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  if (a === 1) {
    return b;
  }
  if (b === 1) {
    return a;
  }
  // handle negative numbers
  if (b < 0 && a > 0) {
    let lastValue = multiply(b, a - 1);
    return lastValue + b;
  }

  // handle both negative
  if (b < 0 && a < 0) {
    a = Math.abs(a);
    b = Math.abs(b);
  }

  let lastValue = multiply(a, b - 1);
  return lastValue + a;
}


console.log(multiply(9, -10));
