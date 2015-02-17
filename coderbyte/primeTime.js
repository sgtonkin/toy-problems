// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = 19Output = true
// Input = 110Output = false


function PrimeTime(num) {
  if (num < 2) {
    return false;
  }
  if (num != Math.round(num)) {
    return false
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true;
}

console.log(PrimeTime(6));



// keep this function call here
// to see how to enter arguments in JavaScript scroll down
//PrimeTime(readline());


//** sieve of eratosthenes **//

// var createArray = function(num) {
//   var numbers = [false, false];
//   for(var i = 2; i <= num; i++) {
//     numbers[i] = null;
//   }
//   return numbers;
// };

// var findNextPrime = function(numbers, prime) {
//   for (var i = ++prime; i < numbers.length; i++) {
//     if (numbers[i] === null) {
//       return i;
//     }
//   }
// }

// function PrimeTime(num, prime, numbers) {
//   var numbers = numbers || createArray(num);
//   var prime = prime || 2;

//   numbers[prime] = true;
//   var multiple = 2;
//   while(prime * multiple <= num) {
//     numbers[prime * multiple] = false;
//     multiple++;
//   }
//   var nextPrime = findNextPrime(numbers, prime);

//   if(!nextPrime) {
//     return numbers;
//   }

//   return PrimeTime(num, nextPrime, numbers);
// }

// // A better implementation

// var eratosthenes = function(n) {
//     // Eratosthenes algorithm to find all primes under n
//     var array = [], upperLimit = Math.sqrt(n), output = [];

//     // Make an array from 2 to (n - 1)
//     for (var i = 0; i < n; i++) {
//         array.push(true);
//     }

//     // Remove multiples of primes starting from 2, 3, 5,...
//     for (var i = 2; i <= upperLimit; i++) {
//         if (array[i]) {
//             for (var j = i * i; j < n; j += i) {
//                 array[j] = false;
//             }
//         }
//     }

//     // All array[i] set to true are primes
//     for (var i = 2; i < n; i++) {
//         if(array[i]) {
//             output.push(i);
//         }
//     }

//     return output;
// };
