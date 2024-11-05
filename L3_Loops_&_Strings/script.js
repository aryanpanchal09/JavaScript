/* FOR LOOP */
{
for(let i = 1; i <= 100; i++){
    console.log("Hii");
}
}
/* Calculate sum of 1 to 5 */
{
    let sum = 0;
    let n = 5;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    console.log("sum =",sum);
}
/* Printing the value of i */
{
    for(let i = 1; i <= 5; i++){
        console.log("i =",i);
    }

    /* console.log(i); - It will give an error as it's defined inside the block scope */
}
/* While loops */
{
    let i = 1;
    while(i <= 5){
        console.log("i");
        i++;
    }
}
/* do while loops */
{
    let i = 1;
    do{
        console.log("i");
        i++
    }while(i <= 0);
}
/* for of loop */
{
    let str = "for of loop";
    for(let i of str){
        console.log("i =",i);
    }
    console.log("for-of loops ends")
}
{
    let str = "JavaScript";
    let size = 0;
    for(let i of str){
        console.log("i =", i);
        size++;
    }

    console.log("string size =", size);
}
/* for in loop */
{
    let student = {
        name: "Aryan Panchal",
        age: 20,
        cgpa: 8.02,
        ispass: true,
    };

    for(let i in student){
        console.log(i, "=" ,student[i]);
    }

    /* i = key, to print key value - object name and in bracket pass the key */
}
/* print all even number from 0 to 100 */
{
    for(let i = 0; i <= 100; i++){
        if(i%2 == 0){
            console.log("i =",i);
        }
        else{

        }
    }
}
/* print all odd number from 0 to 100 */
{
    for(let i = 0; i <= 100; i++){
        if(i%2 !== 0){
            console.log("i =",i);
        }
        else{

        }
    }
}
/* Create a game where you start any random number. Ask the user to keep guessing the game number until the user enters correct value */
{
    let gameNum = 5;
    let userNum = prompt("Guess the Number: ");
    
    /* !== - will not work it's taking number as a string so we use != */

    while(userNum != gameNum){
        userNum = prompt("You entered wrong number. Keep Guessing: ");
    }

    console.log("Congratulations! you entered the right number it's",userNum);
}