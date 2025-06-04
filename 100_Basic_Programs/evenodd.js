/* find even or odd numbers in an array */

function evenodd(arr) {
    const even = [];
    const odd = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
            
        }
        else {
            odd.push(num);
        }
    }

    return { even, odd };
}

const number = [1,2,3,4,5,6,7,8,9];
console.log(evenodd(number));

/* Alternate method */

const evens = number.filter(n => n%2===0);
console.log(evens);

const odds = number.filter(n => n%2 !== 0);
console.log(odds);