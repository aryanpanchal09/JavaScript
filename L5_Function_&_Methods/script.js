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
        console.log("After Return"); /* This line will never run as it's written after return statement */
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
        console.log(a + b)
    }

    function multi(a, b) {
        return a * b;
    }

    const arrowMulti = (a, b) => {
        console.log(a * b)
    }
}

const printHello = () => console.log("hello");

/* Practise Questions  */
/* Q.1 Create a function using the function keyword that takes a String as an argument & returns the number of vowels in the string */

function countVowels(str) {
    let count = 0;
    //"Hello", count = 2
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        };
    };
    console.log("The number of vowels is : ",count);
};
