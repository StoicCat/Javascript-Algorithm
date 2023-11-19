const binarySearch = (n, t) => {
  let start = 0;
  let end = n.length - 1;
  
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (n[mid] === t) {
      return mid;
    } else if (n[mid] > t) {
      end = mid - 1;
    } else if (n[mid] < t) {
      start = mid + 1;
    }
  }
  return -1;
};

const arr = [-5, 2, 4, 6, 10];

console.log(binarySearch(arr, -6));
console.log(binarySearch(arr, -5));
console.log(binarySearch(arr, 2));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 11));

// *Big O Notation: O(logn)
