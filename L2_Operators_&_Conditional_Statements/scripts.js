console.log("hello world!", "JS");

/* Arithmetic Operators  */
let a = 9;
let b = 7;
let c = a + b;

/* console.log("a : ", a);
console.log("b : ", b); */

console.log("a = ", a, "b = ", b);

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

/* Unary Operators - Operators only require a single variable */
/* Post Increment */
a++;
console.log("a++ = ", a);

b--;
console.log("b-- = ", b);

/* Pre-Increment */
++a;
console.log("++a = ", a);

--b;
console.log("--b = ", b);

/* Assignment Operator */

let x = 5;
let y = 2;

console.log("x =",x ,"y =", y)

x += 4; /* x = x + 4 */
console.log("x = ", x); 

x -= 4; /* x = x - 4 */
console.log("x = ", x); 

x *= 4; /* x = x * 4 */
console.log("x = ", x); 

x /= 4; /* x = x / 4 */
console.log("x = ", x); 

x **= 4; /* x = x ** 4 */
console.log("x = ", x); 

x %= 4; /* x = x % 4 */
console.log("x = ", x); 

/* Comparision Operator */
{
let co1 = 5;
let co2 = 2;

console.log("5 == 2", co1 == co2);
console.log("5 == 5", co1 == co2);

console.log("5 ! = 2", co1 != co2);

console.log("5 === 2", co1 === co2);
}
{
let co1 = 5;
let co2 = 5;

console.log("5 > 2", co1 > co2);
console.log("5 < 2", co1 < co2);

console.log("5 >= 5", co1 >= co2);
console.log("5 <= 5", co1 <= co2);
}

/* Logical Operators */
{
    let a = 6;
    let b = 5;

    let cond1 = a > b; //true
    let cond2 = a === 6; //true

    console.log("cond1 && cond2: ", cond1 && cond2);
}
{
    let a = 6;
    let b = 5;

    let cond1 = a > b; //true
    let cond2 = a === 5; //false

    console.log("cond1 && cond2: ", cond1 && cond2);
}

/* We can write the condition directly in the console.log statement */
{
    let a = 6;
    let b = 5;

    console.log("cond1 && cond2 = ", a < b && a === 6);
}
/* || pipe symbol - OR Logical Operator */
{
    let a = 6;
    let b = 5;

    let cond1 = a > b; //true
    let cond2 = a === 5; //false

    console.log("cond1 && cond2: ", cond1 || cond2);
}
/* Logical Not Operator */
{
    let a = 6;
    let b = 5;

    console.log("!(6 < 5)", !(a < b));
}