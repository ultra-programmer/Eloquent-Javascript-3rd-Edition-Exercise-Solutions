// Creating a new, reversed array
function newReverse(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Reversing an array in place
function inPlaceReverse(arr) {
  for (let i  = 0; i < Math.floor(arr.length / 2); i++) {
    let frontEl = arr[i];
    let backEl = arr[arr.length - (i + 1)];
    // Set items in array
    arr[i] = backEl;
    arr[arr.length - (i + 1)] = frontEl;
  }
}

// Tests:
console.log(newReverse(["code", "to", "love", "I"])); // ["I","love","to","code"]
console.log(newReverse(["fun", "is", "It"])); // ["It","is","fun"]

let arr1 = ["code", "to", "love", "I"];
inPlaceReverse(arr1);
console.log(arr1); // ["I","love","to","code"]

let arr2 = ["fun", "is", "It"];
inPlaceReverse(arr2);
console.log(arr2); // ["It","is","fun"]
