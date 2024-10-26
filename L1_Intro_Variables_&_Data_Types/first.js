fullName = "Aryan Panchal";
console.log(fullName);

age = 14;
console.log(age);

price = 99.99;
console.log(price);

x = null;
console.log(x); // we know the content but it's empty 

y = undefined;
console.log(undefined); // don't know what it is

isFollow = false; // true or false 
console.log(isFollow);

age = "String";
console.log(age);

console.log("First JS Code");

_$1a = "_ $ a-z A-Z is allowed in variable name";
console.log(_$1a);

// Variable 

let a;
/* a = 10; */
console.log(a); //undefined


const b = 10;
/* const b; */ // we can't declare b in const we must assign the value
console.log(b); //error 


// Block 
// -----
{
  let a = 5;
  console.log(a);
}

// let a = 10; it will give an error to initialize it use second block 

{
  let a = 10;
  console.log(a);
}

typeof a;

// Collection 

const student = {
    name : "Aryan",
    age : 23,
    subject : "js",
};

student['name'] = "rahul";

student["age"] + 1;

student["age"] = student["age"] + 1;

// To access a particular key 
student['age']

console.log(student.age);

console.log(student['name']);

const practisequestion01 = {
    name: "shradhakhapra",
    posts: 195,
    followers: 569000,
    following: 4,
    isFollow: true
};

console.log(practisequestion01);

console.log(typeof practisequestion01["isFollow"]);