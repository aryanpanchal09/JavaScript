/* Find max/min in a given array */

/* Array create 
set operator use 
loop concept use 

BEGIN
  SET array TO [4, 7, 1, 9, 12, 5]
  
  SET max TO first element of array
  SET min TO first element of array

  FOR each number IN array DO
    IF number > max THEN
      SET max TO number
    END IF

    IF number < min THEN
      SET min TO number
    END IF
  END FOR

  PRINT "Max:", max
  PRINT "Min:", min
END

*/

const arr = [1, 2, 3, 4, 5];

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(max);
console.log(min);

/* Alternate Method */

{
  // ...existing code...

  const array = [4, 7, 1, 9, 12, 5];

  let max = array[0];
  let min = array[0];

  for (const number of array) {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
  }

  console.log("Max:", max);
  console.log("Min:", min);

  // ...existing code...
}
