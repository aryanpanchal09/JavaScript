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
{
    /* Conditional Statements */
    let age = 20;
    if(age > 18, age < 21){
        console.log("You are in your 20's");
    }
    else{
        console.log("you aren't in your 20's");
    }
}
{
    let mode = "light";
    let color;
    if(mode === "dark"){
        color = "black";
    }
    if(mode === "light"){
        color = "white";
    }
    console.log(color);
}
{
    let num = 7;
    if(num % 2 === 0){
        console.log(num, "is even");
    }
    else{
        console.log(num, "is odd");
    }
}
{
    age = 25;
    if(age<18){
        console.log("junior");
    }
    else if(age > 60){
        console.log("senior");
    }
    else{
        console.log("middle");
    }
}
{
    let mode = "blue";
    let color;
    if(mode === "dark"){
        color = "black";
    }
    else if(mode === "blue"){
        color = "blue"
    }
    else if(mode === "pink"){
        color = "pink";
    }
    else {
        color = "white";
    }
    console.log(color);
}
{
    let mode = "dark";
    if(mode == "dark")
        console.log(mode);
}
/* Ternery Operator */
{
    let age = 23;
    /* let result = age >= 18 ? "adult" : "not adult"; */
    age >= 18 ? console.log("adult") : console.log("not adult");
    /* console.log(result); */
}
{
    /* alert("hello!"); */
    /* prompt("hello") */
    let num = prompt("Enter a value:");
    console.log(num);
    if(num % 5 === 0){
        console.log(num, "is a multiple of 5");
    }
    else{
        console.log(num, "is not a multiple of 5");
    }
}
{
    let score = 82;
    if(score >= 90 && score <= 100){
        console.log("Grade A");
    }
    else if(score >= 70 && score <= 89){
        console.log("Grade B");
    }
    else if(score >= 60 && score <= 69){
        console.log("Grade C");
    }
    else if(score >= 50 && score <= 59){
        console.log("Grade D");
    }
    else if(score >= 0 && score <= 49){
        console.log("Grade F");
    }
    else{
        console.log("Enter proper value");
    }
}
{
    let score = 82;
    let grade;
    if(score >= 90 && score <= 100){
        grade = "A";
    }
    else if(score >= 70 && score <= 89){
        grade = "B";
    }
    else if(score >= 60 && score <= 69){
        grade = "C";
    }
    else if(score >= 50 && score <= 59){
        grade = "D";
    }
    else if(score >= 0 && score <= 49){
        grade = "F";
    }
    else{
        console.log("Enter proper value");
    }
    console.log("Your Grade is",grade);
}