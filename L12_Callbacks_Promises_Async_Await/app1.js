async function hello() {
  console.log("hello");
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api();
  await api();
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

//Async-await
async function getAllData() {
  console.log("Data 01");
  await getData(1);
  console.log("Data 02");
  await getData(2);
  console.log("Data 03");
  await getData(3);
  console.log("Data 04");
  await getData(4);
}

/*
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("error");
      console.log("data", dataId);
      resolve("success");
      /*       if (getNextData) {
        getNextData();
      } not required as we are using promise.then 
    }, 3000);
  });
}
*/
// Promise Chain
/* 
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
*/

/* let p1 = getData(1);
p1.then((res) => {
  console.log(res);
  getData(2).then(() => {
    console.log(res);
  });
}); */
