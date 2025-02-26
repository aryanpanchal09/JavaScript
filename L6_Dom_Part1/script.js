{
  console.log("Document Object Model");
  console.dir(window);
  console.dir(window.document);
  console.dir(document.body); /* access html code through JS */
  console.log(document.body);
  console.log(document.head); /* available in child nodes */
  console.dir(document.body.childNodes[1]);
  /* document.body.childNodes[1].innerText = "abcd"; */
}
/* DOM - Selecting by ID */
let heading = document.getElementById("heading");
console.dir(heading);

/* Selecting with Class */
{
  let headings = document.getElementsByClassName("heading1");
  console.dir(headings);
  console.log(headings);
}

/* Selecting with Tag */
let parahs = document.getElementsByTagName("p");
console.dir(parahs);

/* Query Select element access using tag */
{
  let element = document.querySelector("p");
  console.dir(element);

  let elements = document.querySelectorAll("p");
  console.dir(elements);
}

/* Query select element access using class */
{
  let myclass = document.querySelector(".heading");
  console.dir(myclass);

  let myclasses = document.querySelectorAll(".heading1");
  console.dir(myclasses);
}

/* Query select element with the help of id */
{
  let buttonid = document.querySelector("#submit");
  console.dir(buttonid);
}

{
  console.dir(document.body.firstChild);
}

{
  let div = document.querySelector("div");
  console.dir(div);
}

{
  let h4 = document.querySelector("h4");
  console.dir(h4.innerText);

  h4.innerText = h4.innerText + " from Javascript";
} // concatinating the string

let divs = document.querySelectorAll("div");
console.log(divs);

let idx = 1;
for(div of divs){
  console.log(div.innerText);
  div.innerText = `value changes ${idx}`;
  idx++;
}

/* divs[4].innerText = "Value Changed HAHA"; */

function createHelloWorld() {
  return function() {
      return "Hello World";
  }
};

const helloWorldFn = createHelloWorld();
console.log(helloWorldFn());