
/* Countdown
Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.

function countdown(n) {

}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);
*/


/* Sum
Write a recursive function sum that calculates the sum of an array of integers.
function sum(array) {

}

// uncomment these to check your work
//  console.log(sum([1,1,1])); // -> returns 3
//  console.log(sum([1,2,3,4,5,6])); // -> returns 21
*/

/* Palindrome
Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.
function palindrome(string) {

}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false
*/

/* isPrime
Write a recursive function isPrime that determines if a number is prime and returns true if it is.
function isPrime(num) {

}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false
*/

/* pathFinder
Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
const arr = ["first","second","third"];
pathFinder(obj,arr);   //-> "finish"*/

/* flattenRecursively
Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.
function flattenRecursively(arr) {

}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
*/

/* findInOrderedSet
Write a recursive function findInOrderedSet that determines if a number is in an ordered array. Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.

function findInOrderedSet(arr, target) {

}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false*/


/* countWaysToReachNthStair
There are n stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See test cases for examples.
function countWaysToReachNthStair(n) {

}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
*/


/* getPermutations
Given a collection of distinct integers, write a function getPermutations to return all possible permutations.
Input:[1, 2, 3]
Output:[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
function getPermutations(arr) {

}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

/* getRangeBetween
Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
function getRangeBetween(x, y) {

}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]*/