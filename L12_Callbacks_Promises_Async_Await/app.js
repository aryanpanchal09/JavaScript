/* PROMISES */
{
  let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    reject("error");
  });
}
{
  function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error");
        //   console.log("data", dataId);
        //   resolve("success");
        if (getNextData) {
          getNextData();
        }
      }, 5000);
    });
  }
}
{
  const getPromise = () => {
    return new Promise((resolve, reject) => {
      console.log("I am a Promise");
      resolve("Success");
      // reject("Network error");
    });
  };

  let promise1 = getPromise();
  promise1.then((res) => {
    console.log("promise fullfilled", res);
  });

  promise1.catch((err) => {
    console.log("rejected", err);
  });
}
/* Asynchronous Function - Also function execute parallely - Solve using Promise Chain*/
{
  function asyncFunc1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data 1");
        resolve("Success");
      }, 3000);
    });
  }

  function asyncFunc2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data 2");
        resolve("Success");
      }, 5000);
    });
  }

  /* console.log("Fetching data 1");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log("Fetching data 2");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
}); */

  console.log("fetching data1....");
  asyncFunc1().then((res) => {
    console.log("fetching data2....");
    asyncFunc2().then((res) => {});
  });
}
