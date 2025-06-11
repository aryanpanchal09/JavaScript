/* 
FUNCTION reverseString(str)
    SPLIT str into an array of characters
    REVERSE the array
    JOIN the array back into a string
    RETURN the reversed string

FUNCTION reverseStringalt(str)
    SET reversed to empty string
    FOR i from length of str - 1 down to 0 DO
        ADD str[i] to reversed
    END FOR
    RETURN reversed
*/

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
