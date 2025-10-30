console.log("hello");

const accId = 1234;
console.log(accId);

let email = "aryantech03@gmail.com";
var pass = "1234";

// accId = "asdf";

console.table([accId, email, pass, accId]);

// DATATYPES

/* number 
BigInt
string
Boolean
smallint
null => standalone value 
undefined 
Symbol => unique */

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// TYPE CONVERSION
let score = "33";

console.log(typeof score);
console.log(typeof(score)); //method

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);

/* 
33abc - Number - NaN
null - Number - 0
undefined - Number - NaN
boolean value true - Number - 1
boolean value false - Number - 0 
*/

let isLoggedIn = 1;
let convertBoolean = Boolean(isLoggedIn);

/* 
Convert 
Number()
Boolean()
String()

1 - true 
0 - false
"" - false
"as" - true
*/

/* Operations */

let negativeValue = 3;
let convertNegative = -negativeValue;
console.log(convertNegative);

console.log("1" + 2); /* left to right conversion first string other numbers where also converted to string */
console.log(1 + 2 + "2"); /* 32 first two numbers addition and remaining string whole string  */
