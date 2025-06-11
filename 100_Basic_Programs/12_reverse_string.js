function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseStringalt(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const reverse = "string";
console.log(reverseStringalt(reverse));
