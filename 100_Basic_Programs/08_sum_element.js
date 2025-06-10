function sumofarr(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumofarr(numbers));

/*
```
FUNCTION findSum(array)
    SET sum to 0

    FOR each number IN array DO
        ADD number to sum

    RETURN sum
```

### Explanation:
1. Initialize `sum`: Set it to `0` before the loop starts.
2. Iterate through the array: Add each element to `sum`.
3. Return the total: Once all elements are processed, return the accumulated sum.
*/
