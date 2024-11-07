{
    let marks = [97,82,75,64,36];
    marks[0] = 98; /* to change array value */
    console.log(marks);
    console.log(marks.length); /* property */

    let heroes = ["ironman","thor","hulk","batman","superman","spiderman"];
/*     console.log(heroes); */
    for(let idx = 0; idx < heroes.length; idx++){
        console.log(heroes[idx]);
    }
    /* for(let idx = 1; idx <= heroes.length; idx++){
        console.log(heroes[idx - 1]);
    } */
   console.log("\n");
    for(let element of heroes){
        console.log(element);
    }
}

{
    let cities = ["delhi","mumbai","gujarat","haryana"];
    for(let city of cities){
        console.log(city);
        /* console.log(city.toUpperCase()); - to uppercase the value*/ 
    }
}

{
    let marks = [85,97,44,37,76,60];
    let sum = 0;
    for(let i = 0; i < marks.length; i++){
        sum = sum + marks[i];
    }
    console.log(sum);

    sum = sum/marks.length;
    console.log(sum);
}

