const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else if (arr[i] < pivot) {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr = [-6, 20, 8, -2, 4];
const arr1 = [8, 20, -2, 4, -6];
const arr2 = [20, 8, 4, -2, -6];

console.log(quickSort(arr));
console.log(quickSort(arr1));
console.log(quickSort(arr2));

//* Worst Big O Notation: O(n^2)
//* Avg case = O(n log n)
