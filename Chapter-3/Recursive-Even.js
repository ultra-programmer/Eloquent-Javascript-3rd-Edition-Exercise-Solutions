// A recursive function to check whether a number is even or not
function checkEven(num) {
  if (num === 0) return true;
  else if (num === 1) return false;
  else return checkEven(num - 2);
}
