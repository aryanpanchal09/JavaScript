const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = arr1.concat(arr2);

const merged2 = [...arr1, ...arr2];

const merged3 = [...new Set([...arr1, ...arr2])];

console.log(merged, merged2, merged3);
