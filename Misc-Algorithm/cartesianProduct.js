const A = [1, 2];
const B = [3, 4, 5];

function cartesian(A, B) {
  const out = [];
  for (let a of A) {
    for (let b of B) {
      out.push([a, b]);
    }
  }
  return out;
}

console.log(cartesian(A, B));

// *Big-O = O(mn)
