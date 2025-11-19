const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2, obj3) // {} optional parameter for maximum robustness
console.log(obj4);
