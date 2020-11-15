/**
 Write a function with the following signature:

function nextPalindrome(int inputNumber): int

Your function should accept one argument of type integer and return the next
integer which is both larger than the input integer and a palindrome.

A palindrome is a number that reads the same from left to right and
right to left, for example 121 or 68786 but not 12345.

Example: 

nextPalindrome(12345);

Should yield: 13331 (> 12345) Wrong: 12321

Keep efficiency and time complexity in mind when designing your solution.

 */

function nextPalindrome(inputNumber) {
  // write solution
  for (let i = inputNumber; i < Infinity; i++) {
    if (i.toString().split("").reverse().join("") == i.toString()) {
      return i;
    }
  }
}

nextPalindrome(12345);
