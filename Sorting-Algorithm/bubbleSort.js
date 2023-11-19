const bubbleSort = (arr) => {
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const arr = [-6, 20, 8, -2, 4];
const arr1 = [20, 8, 4, -2, -6];

console.log(bubbleSort(arr1));

// *Big O Notation: O(n^2) Quadratic
