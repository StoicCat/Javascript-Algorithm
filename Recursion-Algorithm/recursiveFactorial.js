const recursiveFactorial = (n) => {
  if(n === 0) {
    return 1
  }
  return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(2))
console.log(recursiveFactorial(3))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(6))
console.log(recursiveFactorial(13))

// *Big O Notation: O(n) - Linear