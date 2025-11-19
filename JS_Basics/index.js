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