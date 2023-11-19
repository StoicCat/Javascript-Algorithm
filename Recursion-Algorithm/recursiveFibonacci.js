const recursiveFib = (n, fib, fab) => {
  if (typeof fib !== "number" && typeof fab !== "number") {
    fib = 0;
    fab = 1;
  }
  if (n > 0) {
    fib = recursiveFib(n - 1, fab, fib + fab);
  }
  return fib;
};

const recursiveFib2 = (n) => {
  let fib = -1;
  if (n === 0) {
    fib = 0;
  } else if (n === 1) {
    fib = 1;
  }
  if (n > 1) {
    fib = recursiveFib2(n - 1) + recursiveFib2(n - 2);
  }
  return fib;
};

const recursiveFib3 = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFib3(n - 1) + recursiveFib3(n - 2);
};

// *Type 1
console.log(recursiveFib(0));
console.log(recursiveFib(1));
console.log(recursiveFib(2));
console.log(recursiveFib(3));
console.log(recursiveFib(4));
console.log(recursiveFib(5));
console.log(recursiveFib(6));

// *Type 2
console.log(recursiveFib2(0));
console.log(recursiveFib2(1));
console.log(recursiveFib2(2));
console.log(recursiveFib2(3));
console.log(recursiveFib2(4));
console.log(recursiveFib2(5));
console.log(recursiveFib2(6));

// *Type 3
console.log(recursiveFib3(0));
console.log(recursiveFib3(1));
console.log(recursiveFib3(2));
console.log(recursiveFib3(3));
console.log(recursiveFib3(4));
console.log(recursiveFib3(5));
console.log(recursiveFib3(6));

// * Big O Notation : O(2^n) - Exponential