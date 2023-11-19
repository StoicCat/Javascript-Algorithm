const isPowerOfTwoBitWise = (n) => {
  if(n<1){
    return false
  }
  return (n & (n-1)) === 0
}

const isPowerOfTwo = (n) => {
  let hasil = n
  if(n === 1){
    return true
  }
  for(let i=2;i<=n;i*=2) {
    if(hasil%2 === 0) {
      hasil /= 2
      if(hasil === 1) {
        return true
      }
    }
  }
  return false
}

for(let i=0;i<100;i++) {
  if(isPowerOfTwo(i)) {
    console.log(`Nilai ${i} = ${isPowerOfTwo(i)}`)
  }
}

for(let i=0;i<100;i++) {
  if(isPowerOfTwo(i)) {
    console.log(`Nilai ${i} = ${isPowerOfTwoBitWise(i)}`)
  }
}

// *Big-O Notation of isPowerOfTwo: O(log n)
// *Big-O Notation of isPowerOfTwoBitWise: O(1)