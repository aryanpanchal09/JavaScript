{
  console.log("one");
  console.log("two");
  console.log("three");
}
{
  function hello() {
    console.log("hello after 2sec");
  }
  // 2s = 2000ms timeout;
  setTimeout(hello, 2000);
}
{
  setTimeout(() => {
    console.log("hello after 4sec");
  }, 4000);
}
console.log("four");
console.log("five");

/* CALLBACK FUNCTION */

function sum(a,b) {
    console.log(a + b);
}
/* sumCallback can also be written as sum - it's written just for better understanding of callback function*/
function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);

/* calcularot(1, 2, (a, b) => {
    console.log(a + b);
}) */

const hello = () => {
    console.log("hello after 3sec");
};

setTimeout(hello, 3000);