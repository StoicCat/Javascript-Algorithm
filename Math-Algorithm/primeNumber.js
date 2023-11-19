const primeCheck = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(primeCheck(1));
console.log(primeCheck(3));
console.log(primeCheck(5));
console.log(primeCheck(4));
console.log(primeCheck(43));

// *Big-O Notation : O(sqrt(n))

/*
  !Integers larger than the square root do not need to be checked because, whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'
*/
