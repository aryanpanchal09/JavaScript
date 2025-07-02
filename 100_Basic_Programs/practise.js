var filter = function (arr, fn) {
  let newArr = [];
  arr.forEach((value, index) => {
    if (fn(value, index)) {
      newArr.push(value);
    }
  });
  return newArr;
};

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (value) => value % 2 === 0;

console.log(filter(numbers, isEven));
