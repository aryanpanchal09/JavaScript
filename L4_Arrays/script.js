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
/* Practise Question  
For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. 
Change the array to store final price after applying offer*/
{
    let items = [250, 645, 300, 900, 50];
    let i = 0;
    for(let val of items){
        console.log(`value at index ${i} = ${val}`);
        let offer = val / 10;
        items[i] = items[i] - offer;
        console.log(`value after offer = ${items[i]}`);
        i++;
    }
}
/* Done the same above but this time with the help of Array */
{
    let items = [250, 645, 300, 900, 50];
    for(let i = 0; i < items.length; i++){
        let offer = items[i] / 10;
        items[i] -= offer;
    }
    console.log(items);
}
/* Array Methods 
Push Method */
{
    let foodItems = ["potato","apple","kiwi"];
    console.log(foodItems);
    foodItems.push("chips", "burger", "panner");
    console.log(foodItems);
}
/* Pop Method */
{
    let foodItems = ["potato","apple","kiwi","chips", "burger", "panner"];
    console.log(foodItems);
    // foodItems.pop();
    let deletedItem = foodItems.pop();
    console.log(foodItems);
    console.log("deleted",deletedItem);
}
/* toString Method */
{
    let foodItems = ["potato","apple","kiwi","chips", "burger", "panner"];
    console.log(foodItems);
    console.log(foodItems.toString());
}
/* concat method  */
{
    let marvel_heroes = ["thor","spiderman","ironman"];
    let dc_heros = ["superman","batman"];
    let indian_heroes = ["minnal_muruli", "hanu_man"];
    let heroes = marvel_heroes.concat(dc_heros,indian_heroes);
    console.log(heroes);
}
/* unshift & shift method */
{
    let marvel_heroes = ["thor","spiderman","ironman"];
    marvel_heroes.unshift("antman");
    console.log(marvel_heroes);

    marvel_heroes.shift("thor");
    console.log(marvel_heroes);
}
/* slice */
{
    let marvel_heroes = ["thor","spiderman","ironman","dr_strange"];
    console.log(marvel_heroes);
    console.log(marvel_heroes.slice(1,3));
}
/* splice */
{
    let marvel_heroes = ["thor","spiderman","ironman","dr_strange"];
    console.log(marvel_heroes);
    /* Remove Element */
    console.log(marvel_heroes.splice(1,1,"hulk"));
    console.log(marvel_heroes);
    /* Add Element */
    console.log(marvel_heroes.splice(1,0,"spiderman"));
    console.log(marvel_heroes);
}
/* Practise Question */
{
    let Array = ["bloomberg","microsoft","uber","google","ibm","netflix"]
    console.log(Array);
    /* Remove the first company from the array */
    console.log(Array.slice(0));
    /* Remove Uber & Add Ola in it's place */
    console.log(Array.splice(2,1,"Ola"));
    console.log(Array);
    /* Add Amazon at the end */
    console.log(Array.splice(6,0,"Amazon"));
    console.log(Array);
}