const linearSearch = (n, t) => {
  for (let i of n) {
    if (i === t) return n.indexOf(i)
  }
  return -1;
};

const a = [-5, 2, 10, 4, 6];

console.log(linearSearch(a, 10));
console.log(linearSearch(a, 6));
console.log(linearSearch(a, 20));

// *Big O Notation: O(n) - Linear