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
{
  function sum(a, b) {
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
}

/* Nested if else */
{
  let age = 19;
  if (age >= 18) {
    if (age >= 60) {
      console.log("senior");
    } else {
      console.log("Your Age is in Middle Section");
    }
  } else {
    console.log("child");
  }
}

// Nested for loop 

{
  for(let i=0; i<5; i++){
    let str = "";
    for (let j=0; j<5; j++) {
      str = str + j;
    }
    console.log(i, str);
  }
}

/* Database recreate */
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

/* Callback hell example */
getData(1, () => {
  console.log("getting Data 2...");
  getData(2, () => {
    console.log("getting Data 3...");
    getData(3);
  });
});