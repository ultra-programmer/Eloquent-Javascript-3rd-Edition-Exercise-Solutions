/* Functions that deal with JavaScript Lists.
   A list is defined as a nested set of objects with the first object holding a reference to the second, and so on.
   Example:
   {
    value: 3,
    rest: {
      value: 2,
      rest: {
        value: 1,
        rest: null
      }
    }
   }
*/

// A function that converts an array into a list
function arrToList(arr) {
  let newList = null;
  for (let val of arr.reverse()) {
    newList = prependList(newList, val);
  }
  return newList;
}

// A function that converts a list into an array
function listToArr(list) {
  let newArr = [];
  // Set val to be the value of the passed in list, check if val is not null, set val to be the rest of the given list
  for (let val = list; val; val = val.rest) {
    newArr.push(val.value);
  }
  return newArr;
}

// A function that wraps a list in a new list that contains an additional value
function prependList(list, val) {
  return { value: val, rest: list };
}

// A function that returns the value of the element at the nth position in a list, if it exists
function nthInList(list, num) {
  if (!list) return undefined;
  else if (num === 0) return list.value;
  else return nthInList(list.rest, num - 1);
}

// Tests:
// NOTE: prependList is tested within the arrToList function
console.log(arrToList([1,2,3])); // {value: 1, rest: {value: 2, rest: { value: 3, rest: null } } }
console.log(listToArr(arrToList([1,2,3,4,5]))); // [1,2,3,4,5]
console.log(nthInList(arrToList([1,2,3]), 1)); // 2
