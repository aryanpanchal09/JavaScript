function missingelement(arr) {
  const missing = [];

  for (let i = 1; i <= 10; i++) {
    if (!arr.includes(i)) missing.push(i);
  }
  return missing;
}

console.log(missingelement([2, 4, 6, 8]));

/*
```
FUNCTION findMissingElements(array, expectedRange)
    SET missingElements to an empty list

    FOR each number IN expectedRange DO
        IF number NOT IN array THEN
            ADD number to missingElements

    RETURN missingElements
```
### Explanation:
1. Iterate through the expected range: This could be a sequence from `min(array)` to `max(array)`.
2. Check for missing elements: If a number is not found in the original array, add it to `missingElements`.
3. Return the missing numbers.
*/
