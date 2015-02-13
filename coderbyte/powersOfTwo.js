// Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = 4Output = "true"
// Input = 124Output = "false"

var powerOfTwo = function(number) {
  var integer = 2;
  if(number === 1) {
    return true;
  }
  while(integer <= number) {
    if(integer === number) {
      return true;
    }
    integer *= 2;
  }
  return false;
};

console.log(powerOfTwo(-2));





