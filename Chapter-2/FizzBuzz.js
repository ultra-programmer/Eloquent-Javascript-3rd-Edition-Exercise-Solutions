// My overcomplicated FizzBuzz Solution
for (num of [...Array(100).keys()].slice(1)) {
  console.log( ( (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") ) || num)
}
