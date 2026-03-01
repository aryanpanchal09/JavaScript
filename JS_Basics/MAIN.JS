const coding = ["js", "java", "c++"];

// for each property doesn't return any value

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})

console.log(values);b