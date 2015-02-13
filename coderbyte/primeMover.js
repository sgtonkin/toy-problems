// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = 9Output = 23
// Input = 100Output = 541

function PrimeMover(num) {
  var primes = [2];
  for (var i = 3; i <= 10^4; i += 2) {
    var prime = true;
    if (num === primes.length) {
      return primes[primes.length-1];
    }
    for (var j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        prime = false;
      }
    }
    if (prime) {
      primes.push(i);
    }
  }
}

// console.log(PrimeMover(10));

// // keep this function call here
// // to see how to enter arguments in JavaScript scroll down
// PrimeMover(readline());
