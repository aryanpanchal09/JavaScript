function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("error");
      console.log("data", dataId);
      resolve("success");
      /*       if (getNextData) {
        getNextData();
      } not required as we are using promise.then */
    }, 3000);
  });
}

// Promise Chain

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log("success");
  });

/* let p1 = getData(1);
p1.then((res) => {
  console.log(res);
  getData(2).then(() => {
    console.log(res);
  });
}); */
