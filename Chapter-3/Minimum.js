// A function that returns the minimum value of an array of numbers
function min(nums) {
  // If "a - b" is negative, "a" is sorted before "b"
  return nums.sort((a, b) => a - b)[0];
}

// Test:
console.log(min([253, 456, 23, 1534])); // 23
