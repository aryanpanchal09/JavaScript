function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char));
}

const vowel = "arrayithub";
console.log(findVowels(vowel));
