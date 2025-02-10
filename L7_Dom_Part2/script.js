{
  let div = document.querySelector("div");
  console.log(div);

  let id = div.getAttribute("id");
  console.log(id);

  let name =
    div.getAttribute("name"); /* new attribute assign to paragraph tag no use */
  console.log(name);

  let para = document.querySelector("p");
  console.log(para.getAttribute("class"));
  console.log(
    para.setAttribute("class", "NewClass")
  ); /* to change the class name we use setAttribute */
  /* Or it can directly be change through console
para.setAttribute("class", "123"); */

  /* Change the attribute name with Style */
  div.style.backgroundColor = "purple";
  /* div.style.visibility = "hidden"; */
  div.style.fontSize = "26px";
  /* div.innerText = "Hello"; */
}
{
  /* Add new attribute with JS */
  let newBtn = document.createElement("button");
  newBtn.innerText = "click me";
  console.log(newBtn);
  /* Element is created but now we have to add it to the tree to show in page  */
  let div = document.querySelector("div");
  div.append(newBtn);
  /* div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn); */

  /* Create a New Heading */
  let newHeading = document.createElement("h1");
  newHeading.innerText = "Heading created in JS";

  document.querySelector("p").append(newHeading);
  /* document.querySelector("body").prepend(newHeading); */

  /* TO REMOVE ANY ELEMENT */
  /* let para = document.querySelector("p");
para.remove(); */
}
