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