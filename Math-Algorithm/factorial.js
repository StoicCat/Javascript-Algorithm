const factorial = (n) => {
  let result = 1
  for(let i=0;i<n;i++) {
    result *= (n-i)
  }
  return result
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(5))

// *Big-O = O(n)