const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  let subArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] >= rightArr[0]) {
      subArr.push(rightArr.shift());
    } else {
      subArr.push(leftArr.shift());
    }
  }
  return [...subArr, ...leftArr, ...rightArr];
};

const arr = [-6, 20, 8, -2, 4];
const arr1 = [8, 20, -2, 4, -6];
const arr2 = [20, 8, 4, -2, -6];

console.log(mergeSort(arr));
console.log(mergeSort(arr1));
console.log(mergeSort(arr2));

// *Big O Notation: O(n log n)
