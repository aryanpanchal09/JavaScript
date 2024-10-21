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
a = 10;
console.log(a); //undefined


const b = 10;
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
student["age"] + 1;

student["age"] = student["age"] + 1;

// To access a particular key 
student['age']

console.log(student.age);

console.log(student['name']);