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

/* string */

let stringOne = "one"
let stringTwo = "two"

/* Traditional Method */

console.log(stringOne + stringTwo + "Traditional Method");

/* New Method */

console.log(`New method is string interpolation ${stringOne.toUpperCase()} add ${stringTwo.toLocaleUpperCase()} we can also use many methods with it`);

/* Another way to declare String - it's like key value pair behave like Object but still a string */

let stringThree = new String('three');
console.log(stringThree.indexOf('e'))

console.log()

let formName = "  name  ";
console.log(formName.trim());

let formUrl = "https://localhost:8080/dashboard%20history"
console.log(formUrl.replace('%20', '-'))

console.log(formUrl.includes('localhost'))

console.log(formUrl.split('%20'))

/* Number & Maths */

const newValue = 300;
console.log(newValue);

const valueNew = new Number(300)
console.log(valueNew)

console.log(valueNew.toString().length);

const otherValues = 1123.89;
console.log(otherValues.toFixed(1));
console.log(otherValues.toPrecision(4));

const hundreds = 1000000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'))

/* 
Number.MAX_VALUE
Number.MIN_VALUE
Number.SAFE_MAX_INTEGER
*/

console.log(Math);
console.log(Math.random());
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));

const max = 30;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/* DATES */

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

/* Date typeof is an Object */

let myCreatedDate = new Date('2025', '0', '14', '8', '3'); /* Month starts from 0 in JS */
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let mySpecificDate = new Date("01-01-2001");
console.log(mySpecificDate.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime()); /* timestamp - this new time will give accurate timestamp */
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMilliseconds());
console.log(newDate.getMonth());

/* to define properties */

/* object define */
console.log(newDate.toLocaleString('default', {
    weekend: "long"
}))

/* 
() - paranthesis
{} - braces, curly brackets
[] - square brackets
*/

/* Array */

let myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray)
console.log(myArray.pop())
console.log(myArray.push(1))
console.log(myArray.unshift(7))
console.log(myArray.shift())
console.log(myArray)

console.log(myArray.indexOf(2)) /* For false value it will always returns -1 */
console.log(myArray.includes(2))

let meArr = myArray.join()
console.log(meArr)

/* slice and splice */

let sliceSplice = [0, 1, 2, 3, 4, 5];
console.log("A", sliceSplice);

const myn1 = sliceSplice.slice(1, 3);
console.log(myn1);
console.log("B", sliceSplice);

const myn2 = sliceSplice.splice(1, 3);
console.log(myn2);
console.log("C", sliceSplice);
console.log(myn2);

/* Array */

const marvel = ["ironman", "dr strange"];
const dc = ["superman", "batman"];
const sony = ["spiderman", "morbius"];

let heros = marvel.concat(dc, sony);
let real_heros = [...sony, ...dc, ...marvel, ["1", "2"], "3"]
console.log(heros);
console.log(real_heros);

let real_values = real_heros.flat(2);
console.log(real_values)

/* convert in array */

console.log(Array.isArray("is it array"));
console.log(Array.from("is it array"));
console.log(Array.from({name: "no name"})); /* returns empty array as it don't know what to convert so specify it */

/* Another concat method for Array */

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

/* Objects */

// Singleton
// Objects.create

// print a symbol in the object
const sym1 = "key1";
console.log(sym1);

// Object Literals 
const JsUser = {
    name: "aryan", /* here name is also stored as string */
    "full name": "aryan panchal", /* here "full name" now only be accessed with JsUser["full name"] not with JsUser.full name it will give error */
    age: 16,
    [sym1]: "mykey1",
};

console.log(JsUser[sym1]);
console.log(sym1);

JsUser.name = "aryan panchal"
Object.freeze(JsUser);

const JsUser1 = {
    name: "aryan", /* here name is also stored as string */
    anotherObject : {
        age: "16"
    }
};

console.log(JsUser1.anotherObject) /* if value doesn't exist use ? */

/* optional parameter */
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign(obj1, obj2) // one way to get value
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2, obj3) // {} optional parameter for maximum robustness
console.log(obj4);
const obj5 = {...obj1, ...obj2, ...obj3} // spread operator 
console.log(obj5);

const JsUser = {
    name: "aryan", /* here name is also stored as string */
    "full name": "aryan panchal", /* here "full name" now only be accessed with JsUser["full name"] not with JsUser.full name it will give error */
    age: 16
};

console.log(Object.keys(JsUser));
console.log(Object.values(JsUser)); /* to get values and keys */
console.log(Object.entries(JsUser)); /* to get each key and value in array */


console.log(JsUser.hasOwnProperty('name')); /* to get each key and value in array */

/* destructuring of objects */

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "John Doe"
}

const { courseName: cn, price, courseInstructor } = course;

console.log(cn);

/* Destructuring Example for React */

const navbar = ({company}) => {

}

navbar(company = "hitest");

console.log(company)

/* JSON API */
{
    "name": "pc",
    "number": 123,
    "object": null
}

/* Function */


function sayMyname(){
    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
    console.log("5")
    console.log("")
}

function five(){
    sayMyname();
    sayMyname();
    sayMyname();
    sayMyname();
    sayMyname();
}

five();

function addtownumber(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}
let sum = addtownumber(1,2);
console.log(sum)

/* function userloggedin(username){
    return `${username} just logged in`
} */

function userloggedin(username = "pc"){ /* we can give default value till no value is given  */
    if(username === undefined){ /* if(!username) - can also be written like that */
        console.log("Please enter some username")
        return
    }
    return `${username} just logged in`
}


console.log(userloggedin()) /* if i had not passed anything it will give undefined just logged in */
console.log(userloggedin("Aryan")) 

/* function object calling  */

function calculate(num1){
    return num1
}
console.log(calculate(200))

function calculate(num2){
    return num2
}
console.log(calculate(200, 400, 600))

function calculate(...num3){
    return num3
}
console.log(calculate(200, 400, 600))

function calculate(n01, n02, ...num03){
    return {n01, n02, num03} /* can be return as an array[] or object{}  */
}
console.log(calculate(200, 400, 600, 2000))

/* Handle Array in Function */

const user = [200, 300, 400]

function handleArray(getarray){
    return getarray[0]
}

// console.log(handleArray([200,400,600,800]))
console.log(handleArray(user))

/* scope */

function one(){
    const username = "aryan"

    function two(){
        console.log(username)
        const website = "youtube"
        console.log(website)
    }

    return two;

}
const callTwo = one();
callTwo()

/* function declaration */

console.log("addOne return", addOne(5))
function addOne(num) {
    return num + 1
} /* here we can declare it above */

/* The only difference between two is the declaration  */

const addTwo = function(num){ /* here addTwo is known as expression */
    return num + 1
}
console.log("addTwo return", addTwo(7))

/* this keyword  */

/* This keyword used for current context  */

const user = {
    username: "aryan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "sam" /* Here the current context/value got changed before it was Aryan */
user.welcomeMessage() /* it runs as method and will print console.log */

console.log(this); /* now this refer to empty object as it's in node environment as there is no context/value in global */

/* In brower the global object is window object that's why we are able to capture window event like click, form-submit etc etc */


function pc(){
    let username = "pc"
    console.log(this); /* we will get diff values */
    console.log(this.username); /* We can't use them as this keyword can't be used in function it can only be used in object only it will always print undefined */
}
pc()

/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
} */

/* arrow function */

const pc = function() {
    let username = "pc"
    console.log(this.username)
}
pc()


const pc2 = () => {
    let username = "pc"
    console.log(this.username)
}
pc2()

/* Implicit and Explicit Return */

/* Implicit Return */

const sum = (num1, num2) => (num1 + num2) /* No need to write return if it's executing in 1 line or statement */
console.log(sum(1,2))
const sum1 = (num1, num2) => num1 + num2
console.log(sum1(1,2))
const sum3 = (num1, num2) => ({username: "aryan"}) /* to return a object in a function you must wrap them in () */
console.log(sum3(3,4))

/* Explicit Return */

const sum2 = (num1, num2) => {
    return num1 + num2
}
console.log(sum2(1,2))

/* IIFE - Immediately Invoked Function Expression */

/* An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It’s a common pattern used to create a private scope, helping avoid polluting the global namespace.
 */

(function pc2() {
  console.log("DB Connected 2"); /* named iife */
})();

function pc() {
  console.log("DB Connected");
}
pc();

(() => {
  /* argument */
  console.log("DB Connected 3"); /* unamed iife  */
})(); /* parameter */

((name) => {
  /* argument */
  console.log(`DB Connected 4 ${name}`); /* unamed iife with parameter  */
})("Aryan"); /* parameter */

/* To avoid messing up the global space (called the global scope).
Variables inside an IIFE stay private — they don’t leak outside. */

(function () {
  let secret = "hidden";
  console.log("Inside IIFE");
})();
console.log(secret); // Error! secret is not defined

/* CONTROL FLOW */

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

/* SWITCH CASE */

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

/* Truthy & Falsy Values */

// const user = ""; /* user not identified as it's empty string */
const user = []; /* user logged in as it's array */
// const user = "aryan@gmail.com"; /* user identified */

/* empty array - true, empty string - false */

if (user) {
  console.log("User logged in");
} else {
  console.log(`User not identified ${user}`);
}

/* To check array use it's length property*/

if (user.length === 0) {
  console.log("Empty Array");
}

/* To check empty object  */
const userObj = {};
if (Object.keys(userObj).length === 0) {
  console.log("Empty Object");
}

/* Truthy Values */
// "0", "false", " ", {}, [], function(){} - empty function

/* Falsy Values */
// 0, -0, false, "", null, undefined, NaN, BigInt 0n

false == 0 
true 

false == ''
true

0 == ''
true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10 /* used for null safety */

console.log(val1)

// LOOPS 

let index = 0;
while (index <= 10){
    console.log(`The value of index is ${index}`)
    index = index + 2;
}

// While Loop for Arrays 

let myArray = ['flash', 'batman', 'superman']
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`)
    arr = arr + 1;
}

// DO WHILE LOOP

let score = 1;

do {
  console.log(`The score is ${score}`);
  score++;
} while (score <= 10);

// HIGH ORDER ARRAY LOOPS

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}