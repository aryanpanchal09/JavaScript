console.log("Document Object Model");
console.dir(window);
console.dir(window.document);
console.dir(document.body); /* access html code through JS */
console.log(document.body);
console.log(document.head); /* available in child nodes */
console.dir(document.body.childNodes[1]);
document.body.childNodes[1].innerText="abcd";