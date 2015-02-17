// Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = 4Output = 0
// Input = 25Output = 2

function MultiplicativePersistence(num, count) {
  var count = count || 0;
  var total = 1;
  if (num < 10) {
    return count;
  }
  var digits = num.toString().split('');
  for (var i = 0; i < digits.length; i++) {
    total *= Number(digits[i]);
  }
  return MultiplicativePersistence(total, ++count);
}

console.log(MultiplicativePersistence(25));

// // keep this function call here
// // to see how to enter arguments in JavaScript scroll down
// MultiplicativePersistence(readline());
