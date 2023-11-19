const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } 
  
  if (arr[mid] > target) {
    return search(arr, target, start, mid - 1);
  } else if (arr[mid] < target) {
    return search(arr, target, mid + 1, end);
  }
}

const arr = [-5, 2, 4, 6, 10];

console.log(recursiveBinarySearch(arr, -6));
console.log(recursiveBinarySearch(arr, -5));
console.log(recursiveBinarySearch(arr, 2));
console.log(recursiveBinarySearch(arr, 4));
console.log(recursiveBinarySearch(arr, 5));
console.log(recursiveBinarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 10));
console.log(recursiveBinarySearch(arr, 11));

// *Big O Notation = O(log n)
