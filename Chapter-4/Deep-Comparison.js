// A function to compare values and objects
function deepComparison(val1, val2) {
  if (val1 === val2) return true;
  
  // Check if both values are objects
  if (val1 == null || typeof val1 != "object" || val2 == null || typeof val2 != "object") return false;
  
  let keys1 = Object.keys(val1), keys2 = Object.keys(val2);
  
  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) return false;
  
  // Check every key and value in each object
  for (let key of keys1) {
    // Return false if the second object doesn't contain one of the keys or the values of both objects are not equal
    if (!keys2.includes(key) || !deepComparison(val1[key], val2[key])) return false;
  }
  return true;
}

// Tests
console.log(deepComparison(null, {"a": "b"})); // false
console.log(deepComparison(null, null)); // true
console.log(deepComparison({"a": "b"}, {"a": "c"})); // false
console.log(deepComparison({"a": "b"}, {"c": "d"})); // false
console.log(deepComparison({"a": "b"}, {"a": "d"})); // false
console.log(deepComparison({"a": "b"}, {"a": "b", "c": "d"})); // false
console.log(deepComparison({"a": "b", "c": "d"}, {"a": "b", "c": "d"})); // true
