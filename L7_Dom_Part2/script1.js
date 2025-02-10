/* Practise Questions */
/* Create a new button element. Give it a text "Click me", background color of red & text color of white. Insert the button as the first element inside the body tag */
let newBtn = document.createElement("button");
newBtn.innerText = "Submit";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);

/* Create a p tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the p element 
Did you notics, how you overwrite the class name when you add a new one? 
Solve this problem using classList
*/
let para = document.querySelector("p");
para.classList.add("newClass");
/* para.innerHTML = "Stylish Para";
para.style.fontStyle = "italic";
document.querySelector("body").append(para); */

/* 
para 
para.getAttribute("class");
para.setAttribute("class", "newClass") - completly overwrite the existing class;
*/