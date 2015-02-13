// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = 4Output = 0
// Input = 19Output = 2

function AdditivePersistence(num, count) {
  count = count || 0;
  num = num.toString();
  var sum = 0;

  if (num.length === 1) {
    return count;
  } else {
    for (var i = 0; i < num.length; i++) {
      sum += Number(num[i]);
    }
    return AdditivePersistence(sum, ++count);
  }

}

console.log(AdditivePersistence(19));

// 2342
// Initialize count at zero
// Add all the numbers together
// If the sum is less than or equal to 9, return count
// Else
// Recurse with the sum



// // keep this function call here
// // to see how to enter arguments in JavaScript scroll down
// AdditivePersistence(readline());
