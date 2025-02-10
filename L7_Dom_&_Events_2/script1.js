/* Practise Questions */
/* Create a new button element. Give it a text "Click me", background color of red & text color of white. Insert the button as the first element inside the body tag */
let newBtn = document.createElement("button");
newBtn.innerText = "Submit";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);

/* Create a p tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the p element */
let para = document.createElement("p");
para.innerHTML = "Stylish Para";
para.style.fontStyle = "italic";
document.querySelector("body").append(para);