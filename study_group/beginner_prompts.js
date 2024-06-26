
/*Community Agreements: 
-All levels are welcome but in this group we cover material from pre-course 2 through callbacks on CSX 
-Mute yourself while someone is solving a problem 
-You get 15-20mins to work through the problem on your own before we jump in to help you 
-If you're stuck before time's up, ask for help, but we encourage you to keep trying until your time is up even if you hit a block! 
-Try talking through what each line of code is doing, its ok if you don't know the 'correct' terminology yet! 
-Keep it positive and supportive! :)

https://us06web.zoom.us/j/84847921942?pwd=H6X6YbJ4jNLLSbjSLF5aUaIKnKSdOO.1

Claim host: 339263

CSbin Link: http://csbin.io/interview/community-study-group

Paste at top of CSBin: 
/* Welcome to Community Study Group! // Feel free to copy the problem and work on it yourself - just open csbin in a new tab but change the URL: http://csbin.io/unique-word // Join our Slack channel #community-study-group */


// ****************************************************// FUNCTIONS AND EXE CONTEXT //*************************************************************************

//*********************
//(EASY) : Pre-Functions
//*********************

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE


// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE


//************************** */

/*You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array and increase each number by two.*/

const increaseByTwo = [1, 2, 3, 4, 5];

console.log(increaseByTwo) // -> should print [3, 4, 5, 6, 7];

//************************** */

/* Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. Otherwise, set final to be two times the value of num. Console.log final to check your work!*/

const num = 40;
let final;

//*********************
//(EASY) : Functions
//*********************
/* Write a function wereFriends that takes 2 names as paramaters and returns the string "[name1] and [name2] are friends!" */

//console.log(wereFriends(Mary, Elizabeth)) // 'Mary and Elizabeth are friends!'



/* Create a function multiply that accepts a number, and returns the number times itself. */

//console.log(multiply(5)); // => 25



/* Create a function addFour that accepts a number, and returns the number plus 4. */

//console.log(addFour(8)); // => 12



/* Write a function minsToSecs that takes an integer minutes and converts it to seconds. Remember there's 60 secs in a min! */

//console.log(minsToSecs(10)) => 600



/* Create a function daysOld that takes any age in years and returns it in days. Remember 365 days in a year. For this problem, ignore leap years. It should return the string "I am (num) days old!" */

//console.log(daysOld(age)); // =>'I am [age] days old!'



/* Create a function addS that accepts a string and an array, and returns the third item of the array with the string added to the end. */

//console.log(addS('s', ['cat', 'dog', 'elephant', 'sloth'])); // => elephants



/* Create a function secondLetter that takes a string and returns the index of first occurrence of the given string. */

// console.log(lastLetter("hello"), "e"); //=> 1
// console.log(lastLetter("goodbye!"), "y"); //=> 5
// console.log(lastLetter("ZeltoiD"), "t"); //=> 3



/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. */

// console.log(lessThan100(22, 15)) // => true
// console.log(lessThan100(83, 34)) // => false
// console.log(lessThan100(3, 77))// => true



/* Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one. */

// console.log(getRemainder(17, 5)); // => 2
// console.log(getRemainder(20, 5)); // => 0
// console.log(getRemainder(8, 22)); // => 6
// console.log(getRemainder(7, 42)); // => 0



/* Using an IF/ELSE statement, write a function meals which returns 'Breakfast time!' if the hour is before 12, 'Lunch Time!' if the hour is before 15, or 'Dinner Time!' if the hour between 15 and 20. */

// console.log(meals(8)); // => 'Breakfeast Time!'
// console.log(meals(12)); // => 'Lunch Time!'
// console.log(meals(14)); // => 'Lunch Time!'
// console.log(meals(15)); // => 'Dinner Time!'
// console.log(meaks(18)); // => 'Dinner Time!'



/*Create a function gradeCalculator which takes a grade (number) and returns its letter grade.

grades 90 and above should return "A"

grades 80 to 89 should return "B"

grades 70 to 79 should return "C"

grades 60 to 69 should return "D"

59 and below should return "F"*/

// console.log(gradeCalculator(92)); // => "A"
// console.log(gradeCalculator(84)); // => "B"
// console.log(gradeCalculator(70)); // => "C"
// console.log(gradeCalculator(61)); // => "D"
// console.log(gradeCalculator(43)); // => "F"


/*Write a JavaScript function that prints numbers from 4 to 12. However, for multiples of 4, print "Quad" instead of the number, and for multiples of 6, print "Hex". For numbers which are multiples of both 4 and 6, print "QuadHex".*/

// console.log(4);      // Expected output: "Quad"
// console.log(5);      // Expected output: 5
// console.log(6);      // Expected output: "Hex"
// console.log(7);      // Expected output: 7
// console.log(8);      // Expected output: "Quad"
// console.log(9);      // Expected output: 9
// console.log(10);     // Expected output: 10
// console.log(11);     // Expected output: 11
// console.log(12);     // Expected output: "QuadHex"
  

//********
//(MEDIUM)
//********


/*Write a function findPlurals that takes in an array and returns a new array with any words that ends with 's' */

//console.log(findPlurals(["cats", "dog", "houses", "car", "trees"])); // => ["cats", "houses", "trees"]


/*Create a function warOfNumbers that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.*/

//console.log(warOfNumbers([12, 90, 75])) // ➞ 27

//console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])) // ➞ 168


/*Write a function repeatChars that takes an input character and returns that character concated 7 times.*/

// console.log(repeatChars('a')); // => 'aaaaaaa'
// console.log(repeatChars('z')); // => 'zzzzzzz'
  

/*Create a function divisibleBy2 that accepts an arr of numbers, and returns true if every number in the array is divisible by 2.*/

//console.log(divisibleBy2([8,2,5,4])) // false
//console.log(divisibleBy2([16,2,8,4])) // true



//********
//(HARD)
//********


/*Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.*/

//console.log(minMax([1, 2, 3, 4, 5])) //➞ [1, 5]
//console.log(minMax([2334454, 5])) //➞ [5, 2334454]
//console.log(minMax([1])) // ➞ [1, 1]


/*Write a function countVowels that takes a single string as an input and returns the count of vowels (i.e., 'a', 'e', 'i', 'o', 'u') in the input string.*/

// countVowels("Hello World"); // Output: 3
// countVowels("JavaScript is fun"); // Output: 5 


/*Write a function findRepeating that checks if the passed in str has any repeating char. Function should return a boolean value */

//console.log(repeating('Banana')) // return false
//console.log(repeating('zoo')) // return true


/*Create a function reverseStrings that takes an array of strings as input and returns a new array with each string reversed. For example, if the string "hello" is in the input array, it should become the string "olleh" in the output array*/
  
// console.log(reverseStrings(["hello", "world"])); // ["olleh", "dlrow"]





// ************************************************* CALLBACKS *************************************************************************


/*Create a function letterCounter that counts the number of times a particular letter shows up in the word search.*/

/*console.log(letterCounter(
  [["D", "E", "Y", "H", "A", "D"],                         
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D")) // ➞ 3 */

/* console.log(letterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "H")) // ➞ 2 */


/*Create a function uniqueWords that takes an array of words and returns an array of words that appear only once in the input array.*/

function uniqueWords(words) {
  // Your code here
}

//console.log(uniqueWords(["apple", "banana", "apple", "orange", "banana", "grape"])); // ➞ ["orange", "grape"]
//console.log(uniqueWords(["one", "two", "three", "one", "two", "four"])); // ➞ ["three", "four"]

//Create a function flattenAndFilter that takes a nested array of numbers and a callback function. The function should flatten the array and filter out the numbers based on the callback function.

function flattenAndFilter(arr, callback) {
  // Your code here
}

//console.log(flattenAndFilter([1, [2, 3, [4, 5]]], num => num % 2 === 0)); // ➞ [2, 4]
//console.log(flattenAndFilter([1, [2, [3, [4, 5, 6]]]], num => num > 3)); // ➞ [4, 5, 6]

//Create a function longestWord that takes a string and returns the longest word in the string. If there are multiple words with the same length, return the first one.

//console.log(longestWord("I love programming with JavaScript")); // ➞ "programming"
//console.log(longestWord("The quick brown fox jumps over the lazy dog")); // ➞ "jumps"

//Create a function filterByLength that takes an array of strings and a number. The function should return an array of strings that are longer than the given number.

function filterByLength(arr, length) {
  // Your code here
}

//console.log(filterByLength(["short", "medium", "longer", "longest"], 5)); // ➞ ["medium", "longer", "longest"]
//console.log(filterByLength(["tiny", "small", "average", "big", "huge"], 4)); // ➞ ["small", "average"]

//Create a function filterByStartingLetter that takes an array of strings and a letter. The function should return an array of strings that start with the given letter.

function filterByStartingLetter(arr, letter) {
  // Your code here
}

//console.log(filterByStartingLetter(["apple", "banana", "cherry", "apricot"], "a")); // ➞ ["apple", "apricot"]
//console.log(filterByStartingLetter(["dog", "cat", "deer", "camel"], "c")); // ➞ ["cat", "camel"]

  //********
  //(EASY)
  //********

  /* Write a function that takes in two functions (a and b), that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.*/
  
//   console.log(isLarger(() => 5, () => 10)) // => "b"
//   console.log(isLarger(() => 25,  () => 25)) // => "neither"
//   console.log(isLarger(() => 505050, () => 5050)) // => "a"
  
  //********
  //(MEDIUM)
  //********
  /*An array is special if every EVEN INDEX contains an EVEN NUMBER and every ODD INDEX contains an ODD NUMBER. Create a function that returns true if an array is special, and false otherwise.*/

  // console.log(specialArr([2, 3, 4, 5])) // true
  //console.log(specialArr([6, 5, 7, 3])) // false
  
  
  //********
  //(HARD)
  //********  
  
  /* Create a function arrToObj that returns an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.*/
  
  // Uncomment these to check your work!
  // const arrOfStrings = ['beer', 'glue'];
  // const capitalize = str => str.toUpperCase();
  // console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
  
  // TESTING
  // Testing Two
  
  
  