function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disc one from ${fromRod} to ${toRod}`);
    i++;
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move Disc ${n} from ${fromRod} to ${toRod}`);
  i++;
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(4, "A", "C", "B");

// *Big O Notation = O(2^n)
