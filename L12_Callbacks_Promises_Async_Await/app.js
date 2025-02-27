/* PROMISES */

/* let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success"); 
    reject("error"); 
}); 
*/

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
