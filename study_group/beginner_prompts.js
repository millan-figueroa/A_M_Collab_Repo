//*****************************
//FUNCTIONS AND EXE CONTEXT (VERY EASY)
//***************************** 
 //*****************************
//FUNCTIONS AND EXE CONTEXT (MEDIUM)
//***************************** 

/*Create a function multiply that accepts a number, and returns the number times itself.*/

// console.log(typeof multiply); // => 'function'
// console.log(multiply(5));     // => 25


/*Write a function minsToSecs that takes an integer minutes and converts it to seconds.*/

//console.log(minsToSecs(10)) => 600


/*Create a function addS that accepts a string and an array, and returns the third item of the array with an "s" added to the end.*/
//console.log(addS('s', ['cat', 'dog', 'elephant', 'sloth'])); // => elephants


/*Create a function daysOld that takes the age in years and returns the age in days. It should return the string "I am (num) days old!"*/

//console.log(daysOld(age)); // =>'I am [age] days old!'


/*Create a function secondLetter that takes a string and returns the second character/letter of that string.*/

// console.log(lastLetter("hello")); //=> "e"
// console.log(lastLetter("goodbye!")); //=> "o"
// console.log(lastLetter("ZeltoiD")); //=> "e"


/*Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.*/

// console.log(getRemainder(17, 5)); // => 2
// console.log(getRemainder(20, 5)); // => 0
// console.log(getRemainder(8, 22)); // => 6
// console.log(getRemainder(7, 42)); // => 0


/*Using an IF/ELSE statement, write a function greetings which returns 'Good Morning!' if the hour is before 12, 'Good Afternoon!' if the hour is before 15, or 'Good Night!' if the hour is 15 or after.*/

// console.log(greetings(8)); // => 'Good Morning!'
// console.log(greetings(12)); // => 'Good Afternoon!'
// console.log(greetings(14)); // => 'Good Afternoon!'
// console.log(greetings(15)); // => 'Good Night!'
// console.log(greetings(18)); // => 'Good Night!'


/*Write a function findPlurals that takes in an array and returns the any words that ends with 's'*/

//console.log(findPlurals(["cats", "dog", "houses", "car", "trees"])); // Output: ["cats", "houses", "trees"]
  

/*Write a function countVowels that takes a single string as an input and returns the count of vowels (i.e., 'a', 'e', 'i', 'o', 'u') in the input string.*/
// countVowels("Hello World"); // Output: 3
// countVowels("JavaScript is fun"); // Output: 5

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
  

/*Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/
// console.log(lessThan100(22, 15)) // => true
// console.log(lessThan100(83, 34)) // => false
// console.log(lessThan100(3, 77))// => true


/*Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.*/
//console.log(minMax([1, 2, 3, 4, 5])) //➞ [1, 5]
//console.log(minMax([2334454, 5])) //➞ [5, 2334454]
//console.log(minMax([1])) // ➞ [1, 1]

//pull test