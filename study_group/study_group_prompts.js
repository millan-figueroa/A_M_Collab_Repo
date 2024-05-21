
/****************** FUNCTIONS & EXE CONTEXT ****************/

/* BUILD SENTENCE
----------------------------------------------------
Create a functon "buildSentence" that takes three words (strings)and returns the full sentence 
complete with capitalization at the beginning of the sentence and punctuation (add an exclamation 
point to each sentence).
--------------------------------------------------------*/
function buildSentence(word1, word2, word3) {
    // Capitalize the first letter of the first word
    const capitalizedWord1 = word1.charAt(0).toUpperCase() + word1.slice(1);
    
    // Capitalize the first letter of the second word
    const capitalizedWord2 = word2.charAt(0).toUpperCase() + word2.slice(1);
    
    // Capitalize the first letter of the third word
    const capitalizedWord3 = word3.charAt(0).toUpperCase() + word3.slice(1);
    
    // Concatenate the words and add an exclamation point
    const sentence = capitalizedWord1 + ' ' + capitalizedWord2 + ' ' + capitalizedWord3 + '!';

    return sentence;
}

// Example usage
console.log(buildSentence('hello', 'world', 'welcome')); // Output: Hello World Welcome!

/* REVERSE STRING AT CHAR
--------------------------------------------------------
Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
*/


/* REVERSE STRING
--------------------------------------------------------
Write a function that takes in a string, and reverses the words in a string*/



/* COMBINE NUMBERS
--------------------------------------------------------

Create a function combineNum that takes an array and a value that will act as the length of the 
number. combineNum is going to return a number that is the highest combination of the numbers in the 
passed in array with the length of value. If the array cannot be combined to make the number reach 
the value of length, return "combine not possible".

console.log(combineNum([4,6,1,8,2],4)) //=> 8642
console.log(combineNum([4,9,1,8,2],6)) // => combine not possible
console.log(combineNum([7,9,1,8,2],3)) //=> 987

--------------------------------------------------------*/

function combineNum(nums, length) {
  // Sort the array of numbers in descending order
  nums.sort((a, b) => b - a);

  // Check if the array can be combined to make the number reach the desired length
  if (nums.map(num => String(num).length).reduce((a, b) => a + b, 0) < length) {
      return "combine not possible";
  }

  // Initialize an empty string to store the combined number
  let combinedNumber = '';

  // Combine numbers from the array to form the highest combination
  for (const num of nums) {
      combinedNumber += String(num);
      // If the length of combined number reaches or exceeds the desired length, break the loop
      if (combinedNumber.length >= length) {
          break;
      }
  }

  // If the length of the combined number is less than the desired length, return "combine not possible"
  if (combinedNumber.length < length) {
      return "combine not possible";
  }

  return parseInt(combinedNumber);
}

// Example usage:
console.log(combineNum([50, 2, 1, 9], 5));  // Output: 95021
console.log(combineNum([5, 2, 1, 9], 5));   // Output: 95120
console.log(combineNum([5, 2, 1, 9], 6));   // Output: combine not possible

/*
  Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
  
  add_ly = add_suffix("ly")
  
  add_ly("hopeless") ➞ "hopelessly"
  add_ly("total") ➞"totally"
  
  add_less = add_suffix("less")
  
  add_less("fear") ➞ "fearless"
  add_less("ruth") ➞ "ruthless"
  */
  
  function add_suffix(suffixAdder) {
    return function(input) {
      return input + suffixAdder
    }
  }
  
  const add_ly = add_suffix("ly")
  
  console.log(add_ly("hopeless")) //➞ "hopelessly"
  console.log(add_ly("total")) //➞"totally"
  
  const add_less = add_suffix("less")
  
  console.log(add_less("fear")) //➞ "fearless"
  console.log(add_less("ruth")) //➞ "ruthless"
   /*


/**************** CLOSURE ****************/
 

/* TRIGGER
--------------------------------------------------------
Declare a function 'trigger' that takes in a number K and a callback as arguments, and return another 
function. The returned function should take in a single argument and when invoked at the K-th time, 
it should run the callback on the passed-in argument and return that value, then reset the timer for 
that specific argument to be ready for the next time. However, the next invocation at the K-th time on 
the same value, it should run the callback with the previous returned value as the argument. And if 
it's not the time to run the callback, return 'Please invoke the function *time* time(s) more with 
*argument* to see the result'.*/


function trigger(K, callback){
    //initiliaze a counter varible to 0 
    let counter = 0; 
    let results = {}; 
    co
    //return an anon. function(arg){
    return function(arg){
      //increment the counter
      counter ++; 
    //if the counter is equal to K, then return callback(arg)
      if (counter === K) {
        counter = 0; 
        results[arg] = callback(arg);
        return callback(results[arg]);
      } else { 
      return `Please invoke the function ${K-counter} time(s) more with ${arg} to see the result` 
    } 
  }
}
  const multiplyBy2 = (num) => num*2; 
  const myTrigger = trigger(3, multiplyBy2); 
  
  console.log(myTrigger(5)) //=> 'Please invoke the function 2 time(s) more with 5 to see the result'.
  console.log(myTrigger(5)) //=> 'Please invoke the function 1 time(s) more with 5 to see the result'.
  console.log(myTrigger(5)) //=> 10
  
 
  
  /* RECORD
  --------------------------------------------------------

  Declare a function 'record', which takes a callback function as an argument and returns another 
  function. The returned function takes in a number, and when invoked, will run the callback on this 
  number. The function should keep a record of all previous results of running the callback (and if 
  it is invoked more than once with the same argument, it should not run the callback again on 
  that argument). On each invocation, it should return the *highest value so far* among all previous 
  calls. Once complete, make sure to test your function.
   --------------------------------------------------------*/

  //output: highest value of invoking callback on passed in number
  //store results in an object, format arg:result
  //iterate through object and compare result values to output the higher one
  
  function record(callback){

    const obj = {};
    let result = 0;
    
    return function(num){

      /********************************/
      console.log('****NEXT RUN****')
      /*******************************/ 


      if(!obj.hasOwnProperty(num)){ //checks if property (2) exists in obj
        obj[num] = callback(num); // since it doesn't, assign arg as key and cb result as value {2:4}
      }
      
      for(const key in obj){
        
        if(obj[num] > num){ //checks if 4 > 2  {2:4, 4:6}
          result = obj[key]; //if yes, return 4 (higher value)
        }
      }

      //*****Check Values! (Ignore me)*****//

      console.log(`Value of 'obj[num]': ${obj[num]}`)
      console.log(`Value of 'num': ${num}`)
      
      //************************************
      
      return `FINAL OUTPUT: ${result}`;
      
    }
  }

  const addTwo = record(function (num){return num + 2});
  console.log(addTwo(2)) //4
  console.log(addTwo(4)) //6
  console.log(addTwo(1)) //6
  console.log(addTwo(8)) //6
  
  /*
Declare a function called 'fundraiser', which will help keep track of donations towards a cause.
When invoked, 'fundraiser' should return another function that's specific to a single cause's fundraising. The returned function should take one argument, representing a donation to that cause, and should keep track of the total donations received.
The fundraising goal is reached once the total donations exceed a specified amount. On reaching the goal, return a message stating how much was raised. Any subsequent donation attempts after the goal has been reached should return a message stating that the fundraising goal has already been achieved.

Example:
const schoolFund = fundraiser(500); // Goal is 500
*/
function fundrasier(goal){

  let total = 0;
      return (donation) => {
          if(donation >= goal){
              return 'Goal achieved!';
          }
          total = total + donation;
          if(total >= goal) {
              return `Goal reached with ${total}`
          }
      };
  }
  const schoolFund = fundrasier(500); // Goal is 500
  console.log(schoolFund(100));
  console.log(schoolFund(150));
  console.log(schoolFund(200));
  console.log(schoolFund(60)) // --> 'Goal reached with 510!'
  console.log(schoolFund(20)) // --> 'Goal already achieved!'
  
  
  /*



 /***************** RECURSION ****************/
 

/* RETURN FIRST REPEATING CHAR
  --------------------------------------------------------
Create a recursive function that takes a string and returns the first character that 
repeats. If there is no repeat of a character, return "-1".

firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"
*/
  /* ARRAY OF FUNCTIONS
  --------------------------------------------------------
  
  Write a function that takes an array of functions and a number that will be piped through all those 
  functions. The input number passes through the first function, whose output is passed as input to 
  the second function, whose output is passed as input to the third function, and so on. Use recursion 
  to return the final output of the last function in the array.
  

  --------------------------------------------------------------------------*/
 /* SUM ALL ELEMENTS
  --------------------------------------------------------
  Create a recursive function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). 
  "sumAllElements" will return the sum of the elements in the array starting at the initial value.

  Example:
  sumAllElements([1,2,3,4], 10) -> 20

  Note: Do NOT use any native JS methods, or loops
*/



  /***************** OOP ****************/
   
  
  /* MY ARRAY
  --------------------------------------------------------------------------
  
  PART 1
  Declare a function 'MyArray' which returns an instance of a 'MyArray' object when invoked with the 
  'new' keyword. MyArray should mirror a Javascript array - i.e. store values at numbered indices 
  starting at 0. All MyArray objects should contain their own 'length' property to keep track of the 
  number of elements in the array. When a MyArray is first created, it should initialize the length 
  property to 0.
  
  PART 2
  Recreate the push method. It should be available to all instances of MyArray.
  
  PART 3
  Recreate the includes method. It should be available to all instances of MyArray.
  
  */




  /***************** OTHER ****************
   
 
 
  LINKS TO DOCUMENTS I MADE THAT GAVE ME AN IDEA ABOUT THE INTERVIEW PROCESS. LITTLE OUTDATED BUT STILL HELPFUL, AS CS PROBABLY STILL HAS JUST ABOUT THE SAME PROCESS
  
  https://docs.google.com/document/d/1fg9pzCJH0cT3LJfGatpAbjwBlhnuyKgFbi-UxLksLUE/edit
  
  https://docs.google.com/document/d/1Tl6Tj2fmzQ8p0aQEsrdW0u1wDPq0RESgR9vwDxg9cnw/edit
  
  https://docs.google.com/document/d/1ufuwWZ7W1RAsrbZaTdzNBYDlZiJV8QQbW1IiMGkWXTQ/edit
  
  */
