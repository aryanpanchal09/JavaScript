/* Fint the secong largest value in an array */

function secondlarge(arr) {
    const num = [...new Set(arr)].sort((a,b) => b - a);
    return num.length >= 2 ? num[1] : null;
}

const number = [1,2,3,4,5,6,7,8,9];
console.log(secondlarge(number));

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