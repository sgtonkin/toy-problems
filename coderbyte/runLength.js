// Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = "aabbcde"Output = "2a2b1c1d1e"
// Input = "wwwbbbw"Output = "3w3b1w"

// Initialize count as 1
// Start with the first letter
// If the next letter is the same increment count, increment letter
// If the next letter is different, add count + letter, reset count

function RunLength(str) {
  var count = 1;
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      result += count + str[i];
      count = 1;
    }
  }

  return result;
}

// // keep this function call here
// // to see how to enter arguments in JavaScript scroll down
// RunLength(readline());
