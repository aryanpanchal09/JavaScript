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

/* Comparision  */

console.log("2" > 1); /* true - automatic comparision */
console.log("02" > 1); /* true - 02 string will be converted to number */

/* to tackle all this issues we use typescript */

console.log(null > 0); /* true */
console.log(null == 0); /* false */
console.log(null >= 0); /* true */

/* comparision converts null to a number, treating it as 0 */

console.log("2" === 0); /* false as comparision operator and equality check (>, <) works differently */

/* Primitive - Call by value */

/* Primitive Data Types - String, Boolean, Null, BigInt, Undefined, Symbol, Number */

/* Non Primitive - Call by reference */

/* Non Primitive Data Type - Functions, Objects, Array */

/* JS Dynamic type - Static Type  */

const id = Symbol('123'); 
const anotherId = Symbol('123');
/* Eventhough we declare Symbol same but still it's different for both */
console.log(id);
console.log(anotherId);

const bigNumber = 1234567891011121314151617181920n;
/* to declare bigint write n at the end of the number */
console.log(typeof bigNumber);

/* arrays, objects, functions */
const valuesToStore = ["1", "2", "3"]
console.log(valuesToStore);

const valuestwo = {
    "key": "value",
    "name": "anyname",
}
console.log(valuestwo)