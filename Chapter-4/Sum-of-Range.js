// A function to produce a range of numbers
function range(min, max, step = 1){
  let nums = [];
  let stepVal = step;
  // Check to see if the range is ascending
  if(min < max){
    // Infinite loop prevention
	  if (stepVal <= 0) stepVal = 1;
  	for(var i = min; i <= max; i += stepVal){
    	nums.push(i);
  	}
  }
  // Check to see if the range is descending
  else if(min > max){
    // Infinite loop prevention
	  if (stepVal >= 0) stepVal = -1;
    for(var i = min; i >= max; i += stepVal){
    	nums.push(i);
  	}
  }
  return nums;
}

// A function that produces the sum of an array of numbers
function sum(nums) {
  return nums.reduce((total, num) => total += num);
}

// Tests:
console.log(sum(range(1, 10))); // 55
console.log(sum(range(1, 10, 2))); // 25
console.log(sum(range(1, 10, -2))); // 55

console.log(sum(range(10, 1))); // 55
console.log(sum(range(10, 1, -2))); // 30
console.log(sum(range(10, 1, 2))); // 55
