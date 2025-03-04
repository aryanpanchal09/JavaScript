const URL = "https://catfact.ninja/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("getting data ...");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data.data[2].fact);
  factPara.innerText = data.data[0].fact;
};

/* Promise Chain 
function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[2].text;
    });
} */

btn.addEventListener("click", getFacts);
