/* print the number is even or odd */
{
  let num = 2;
  if (num % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}

/*  */

function sumOfDigits(num) {
    // Base case: if num is 0, return 0
    if (num === 0) {
        return 0;
    }
    // Recursive case: return the last digit plus the sum of the remaining digits
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

// Example usage:
let num = 123;
console.log(sumOfDigits(num)); // Output: 6
