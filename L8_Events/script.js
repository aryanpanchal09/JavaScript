let btn1 = document.querySelector("#btn1");
/* {
  btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
  };
} */
{
  let div = document.querySelector("div");
  div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log("You are inside div");
  };
}
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - Handler1");
});
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - Handler2");
});

const handler3 = () => {
    console.log("button1 was clicked - Handler3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - Handler4");
});
btn1.addEventListener("dblclick", () => {
    console.log("button1 was clicked 2 times");
});

btn1.removeEventListener("click", handler3);

let modeBtn = document.querySelector("#btn")
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
  if(currMode === "light") {
    currMode = "dark";
    /* document.querySelector("body").style.backgroundColor = "black"; */
    /* document.querySelector("body").classList.add("dark"); */
    body.classList.add("dark");
    body.classList.remove("light");
  }else {
    currMode = "light";
    /* document.querySelector("body").style.backgroundColor = "white"; */
    /* document.querySelector("body").classList.add("light"); */
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currMode);
})