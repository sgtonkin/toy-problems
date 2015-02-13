// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = "1","2","E","E","3"Output = "1,2"
// Input = "4","E","1","E","2","E","3","E"Output = "4,1,2,3"

// 4, 3, 3, 5, 3, 1, E, E, E, E


function OffLineMinimum(strArr) {
  // Create an array of mins
  // Every time you encounter a new min, add it to the end of the array
  // Every time you encouter a number > than the current min, put it at the beginning
  // Whenever you hit an E, pop the min off the array and put it in results

  var mins = [];
  var results = [];

  for(var i = 0; i < strArr.length; i++) {
    var char = strArr[i];
    var currentMin = mins[mins.length - 1];
    if (char !== 'E') {
      if (parseInt(char) <= parseInt(currentMin) || !currentMin) {
        mins.push(char);
      } else {
        mins.unshift(char);
      }
    } else {
      results.push(mins.pop());
    }
  }

  // code goes here
  return results.join(',');

}

console.log(OffLineMinimum(["6","5","1","2","3","4","E","E","E"]));

// // keep this function call here
// // to see how to enter arguments in JavaScript scroll down
// OffLineMinimum(readline());
