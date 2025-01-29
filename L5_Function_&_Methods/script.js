{
  function myFunction() {
    console.log("Welcome to JS");
    console.log("We are practising JS");
  }

  myFunction();
}
/* Parameter/argument -> input */
{
  function myFunction(msg, n) {
    console.log(msg * n);
  }

  myFunction("Hello World", 100);
}
/* Nan - Not a Number - An Error will be there */

/* Function to calculate 2 number */
{
  function sum(x, y) {
    console.log(x + y);
  }
  /* In console write sum(3,4) you want to add to get the desired result */
}

{
  function sum(x, y) {
    s = x + y;
    console.log("Before Return");
    return s;
    console.log(
      "After Return"
    ); /* This line will never run as it's written after return statement */
  }

  let val = sum(3, 4);
  console.log(val);
}

{
  for (let i = 0; i <= 5; i++) {
    console.log(i, "hii");
  }
}

/* Arrow Function  */
{
  function sum(a, b) {
    return a + b;
  }

  const arrowSum = (a, b) => {
    console.log(a + b);
  };

  function multi(a, b) {
    return a * b;
  }

  const arrowMulti = (a, b) => {
    console.log(a * b);
  };
}

const printHello = () => console.log("hello");

/* Practise Questions  */
/* Q.1 Create a function using the function keyword that takes a String as an argument & returns the number of vowels in the string */

function countVowels(str) {
  let count = 0;
  //"Hello", count = 2
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log("The number of vowels is : ", count);
}

/* Create an arrow function to perform the same task */

const countVow = (str) => {
  let count = 0;
  //"Hello", count = 2
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log("The number of vowels is : ", count);
};

/* forEach LOOP IN ARRAYS */
function abc() {
  console.log("hello");
}
function myFunc(abc) {
  return abc;
}

/* forEach Working Mechanism */
{
  let arr = [1, 2, 3, 4, 5];

  arr.forEach(function printVal(val) {
    console.log(val);
  });
}

{
  let arr = [1, 2, 3, 4, 5];

  arr.forEach((val) => {
    console.log(val);
  });
}

{
  let arr = ["pune", "hyderabad", "ahmedabad"];

  arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
  });
}

/* practise question */
/* For a given array of numbers, print the square of each value using the ForEach loop  */

{
  let arr = [1, 2, 3, 4];

  arr.forEach((val) => {
    console.log(val * val);
  });
}

/* another way of doing the above problem */
{
  let arr = [4, 8, 12, 16];

  let calcSquare = (num) => {
    console.log(num ** 2);
  };

  arr.forEach(calcSquare);
}

/* Map Method */
{
  let arr = [7, 8, 9];

  let newArr = arr.map((val) => {
    return val ** 2;
  });
}

/* Filter Method */
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let evenArray = arr.filter((val) => {
    return val % 2 === 0;
    /* return val % 2 !== 0; - odd number
     return val > 3; */
  });

  console.log(evenArray);
}

/* Reduce Method 
val can also be written as curr
result = previous/starting value 
val / curr = current/next value 
first add sum save in res only that's how the loop continues
*/
{
  let arr = [1, 2, 3, 4];

  const output = arr.reduce((res, val) => {
    return res + val;
  });

  console.log(output);
}
/* To return the highest or lowerst number from the array */
{
  let arr = [1, 2, 3, 4, 5, 6];

  const output = arr.reduce((res, val) => {
    return res > val ? val || res : val;
  });

  console.log(output);
}

/* Practise Questions */
/* We are given array of marks of students. Filter out the marks of students that scored 90+ */
{
  let arr = [85, 90, 91, 92];

  let newArr = arr.filter((val) => {
    return val >= 90;
  });

  console.log(newArr);
}

/* Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all the numbers in the array. Use the reduce method to calculate product of all numbers in the array */
{
  let num = prompt("Enter a number : ");
  console.log(num);

  let arr = [];

  for (i = 1; i <= num; i++) {
    arr[i - 1] = i;
  }

  console.log(arr);

  let sum = arr.reduce((res, curr) => {
    return res + curr;
  });

  console.log("sum = ", sum);
  console.log(arr);

  let factorial = arr.reduce((res, curr) => {
    return res * curr;
  });

  console.log("factorial = ", factorial);
}
