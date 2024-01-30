/*Challenge: union
Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. 
If there are duplicate elements, only add it //once to the new array. Preserve the order of the elements starting from the first element of 
the first input array. BONUS - Use reduce!*/


// Uncomment these to check your work!
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]


/*Challenge: CountBy
Create a function countBy that accepts an array and a callback, and returns an object. 
countBy will iterate through the array and perform the callback on each element. Each return 
value from the callback will be saved as a key on the object. The value associated with each key 
will be the number of times that particular return value was returned.
*/

/*Challenge: multiMap
Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return 
an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be 
arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/

// Uncomment these to check your work!
// function uppercaser(str) { return str.toUpperCase(); }
// function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
// function repeater(str) { return str + str; }

// const items = ['catfood', 'glue', 'beer'];
// const functions = [uppercaser, capitalize, repeater];

// console.log(multiMap(items, functions)); 
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], 
// glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


/*Challenge: reduce
The function reduce takes an array and reduces the elements to a single value.

The reduce function loops through the array and applies any operation that you can 
put into a function to each element in the array while keeping track of the outcome 
of each loop. In this way, we could use reduce to do things like sum all the numbers 
in an array or multiply them all together.
*/

// Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0)); // should log 8

/*Challenge: objOfMatches
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches 
will build an object and return it. To build the object, objOfMatches will test each 
element of the first array using the callback to see if the output matches the 
corresponding element (by index) of the second array. If there is a match, the 
element from the first array becomes a key in an object, and the element from the 
second array becomes the corresponding value. 
*/

// Uncomment these to check your work!
// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

/*Challenge: arrToObj
Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to 
achieve the desired console logs. arrToObj should return an object that has elements 
from the passed-in array as keys, and the outputs from the callback (when those 
elements are passed in) as the corresponding values. */

// Uncomment these to check your work!
// const arrOfStrings = ['beer', 'glue'];
// const capitalize = str => str.toUpperCase();
// console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

/*Challenge: joinAndMap
Construct a function joinAndMap with three parameters: array1, array2, and a callback 
function. The function should combine the two arrays then invoke the callback function 
on each element, returning the resulting array. This function should not mutate the 
passed-in arrays. */

// Uncomment these to check your work!
// const arrRed = ['strawberry', 'cherry', 'wine'];
// const arrBlue = ['blueberry', 'sky', 'ocean'];
// const capitalize = str => str.toUpperCase();
// console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']

/*Challenge: multiMap
Construct a function multiMap that will accept two arrays - an array of values and an 
array of callbacks. multiMap will return an object whose keys match the elements in 
the array of values. The corresponding values that are assigned to the keys will be 
arrays consisting of outputs from the array of callbacks, where the input to each 
callback is the key. */

// Uncomment these to check your work!
// function uppercaser(str) { return str.toUpperCase(); }
// function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
// function repeater(str) { return str + str; }
// const items = ['catfood', 'glue', 'beer'];
// const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/*Challenge: majority
Create a function majority that accepts an array and a callback. The callback will 
return either true or false. majority will iterate through the array and perform the 
callback on each element until it can be determined if the majority of the return 
values from the callback are true. If the number of true returns is equal to the 
number of false returns, majority should return false. */

// // Uncomment these to check your work!
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/*Challenge: prioritize
Create a function prioritize that accepts an array and a callback. The callback will 
return either true or false. prioritize will iterate through the array and perform 
the callback on each element, and return a new array, where all the elements that 
yielded a return value of true come first in the array, and the rest of the elements 
come second. */

// Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/*Challenge: countBy
Create a function countBy that accepts an array and a callback, and returns an object. 
countBy will iterate through the array and perform the callback on each element. Each 
return value from the callback will be saved as a key on the object. The value 
associated with each key will be the number of times that particular return value was 
returned. */

// Uncomment these to check your work!
// function evenOdd(n) {
//   if (n % 2 === 0) return 'even';
//   else return 'odd';
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

/* Challenge: groupBy
Create a function groupBy that accepts an array and a callback, and returns an object. 
groupBy will iterate through the array and perform the callback on each element. Each 
return value from the callback will be saved as a key on the object. The value 
associated with each key will be an array consisting of all the elements that 
resulted in that return value when passed into the callback.*/

// Uncomment these to check your work!
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/*Challenge: goodKeys
Create a function goodKeys that accepts an object and a callback. The callback will 
return either true or false. goodKeys will iterate through the object and perform the 
callback on each value. goodKeys will then return an array consisting only the keys 
whose associated values yielded a true return value */

// Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']



