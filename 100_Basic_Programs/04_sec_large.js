/* Fint the secong largest value in an array */

function secondlarge(arr) {
  const num = [...new Set(arr)].sort((a, b) => b - a);
  return num.length >= 2 ? num[1] : null;
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(secondlarge(number));

/* 
FUNCTION secondlarge(array)
    CREATE a set from array to remove duplicates
    CONVERT the set back to a list
    SORT the list in descending order
    IF length of list >= 2 THEN
        RETURN the element at index 1 (second largest)
    ELSE
        RETURN null
*/

/*
```
FUNCTION findSecondLargest(array)
    IF length of array < 2 THEN
        RETURN "Array should have at least two elements"

    SET largest to MIN_VALUE
    SET secondLargest to MIN_VALUE

    FOR each number IN array DO
        IF number > largest THEN
            SET secondLargest to largest
            SET largest to number
        ELSE IF number > secondLargest AND number != largest THEN
            SET secondLargest to number

    RETURN secondLargest
```
### Explanation:
1. Initialize variables: `largest` and `secondLargest` are both set to the smallest possible value.
2. Iterate through the array:
   - If the current number is greater than `largest`, update both `largest` and `secondLargest`.
   - Otherwise, if it's greater than `secondLargest` (but not equal to `largest`), update `secondLargest`.
3. Return the second largest value.

Would you like to see an optimized version in JavaScript?
*/

{
  function findSecondLargest(array) {
    if (array.length < 2) {
      return "Array should have at least two elements";
    }

    let largest = Number.MIN_SAFE_INTEGER;
    let secondLargest = Number.MIN_SAFE_INTEGER;

    for (const number of array) {
      if (number > largest) {
        secondLargest = largest;
        largest = number;
      } else if (number > secondLargest && number !== largest) {
        secondLargest = number;
      }
    }

    return secondLargest;
  }

  // Example usage:
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(findSecondLargest(arr)); // Output: 8
}
