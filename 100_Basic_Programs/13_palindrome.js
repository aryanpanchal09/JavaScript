function palindrome(str){
    const remove = str.toLowerCase().replace(/[^a-z]/g, '');
    const reversed = remove.split('').reverse().join('');
    return remove === reversed;
}

const check = "Ah0h1a";
console.log(palindrome(check)); // Output: true