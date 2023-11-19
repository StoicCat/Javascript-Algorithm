const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
};

const arr = [-6, 20, 8, -2, 4];
const arr1 = [8, 20, -2, 4, -6];
const arr2 = [20, 8, 4, -2, -6];

console.log(insertionSort(arr1));

// *Big O Notation : O(n^2) Quadratic
