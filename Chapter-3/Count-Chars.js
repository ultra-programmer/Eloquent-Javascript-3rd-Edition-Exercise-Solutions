// A function that returns the number of occurences a given character has in a given string
function countChar(str, char) {
  return str.split('').filter(c => c === char).length;
}

// Test:
console.log(countChar("Hello World!", "l")); // 3
