function myFunction(){
    console.log("Welcome to JS");
    console.log("We are practising JS");
}

myFunction();

/* Parameter/argument -> input */
{
    function myFunction(msg, n){
        console.log(msg * n);
    }
    
    myFunction("Hello World", 100);
}
/* Nan - Not a Number - An Error will be there */

/* Function to calculate 2 number */
{
    function sum(x, y){
        console.log(x + y);
    }
    /* In console write sum(3,4) you want to add to get the desired result */
}

{
    function sum(x,y){
        s = x + y;
        console.log("Before Return");
        return s;
        console.log("After Return"); /* This line will never run as it's written after return statement */
    }

    let val = sum(3,4);
    console.log(val);
}