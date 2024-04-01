/*Write a function that takes an array of integers (positive or negative or both) 
and return the sum of the absolute value of each element.
*/

/*
OOP:
Declare a function, 'Collection', which takes in an array as an argument and returns an 
instance of a 'Collection' object when invoked with the 'new' keyword.
'Collection' objects should function similarly to a Set - i.e., they will store UNIQUE 
values (no duplicates) inside where its values and keys are the same.
All Collection objects should contain their own 'size' property, which keeps track of 
the number of items they contain. When a Collection is first created, it should have a 
size of 0.
*/
  

/* 
Declare a function, 'add', which is accessible to ALL instances of 'Collection'. 'add' 
should take in a single argument, and when invoked on a Collection instance, should add 
the argument to that Collection (still ensuring there are no duplicate values in the 
Collection), increment the Collection's size property appropriately, and return the 
size of the collection. 
*/

/* Declare a function 'delete' which is accessible to ALL instances of 'Collection'. 
Delete should take in a single arg, and when invoked on a Collection instance, should 
check if the passed in value exists on that Collection. 
If it does, 'delete' should completely remove that property from the Collection and
change its size property. 
If the element doesn't exist it should return the string 'element doesn't exist'. */

/*Write a function that takes in a string, and reverses the words in a string*/

/*
Create a recursive function "sumAllElements" that takes in two arguments (an array of numbers and an 
initial value). "sumAllElements" will return the sum of the elements in the array starting 
at the initial value.

Example:
sumAllElements([1,2,3,4], 10) -> 20

Note: Do NOT use any native JS methods, or loops
*/

/*
Declare a function called 'fundraiser', which will help keep track of donations towards a cause.
When invoked, 'fundraiser' should return another function that's specific to a single cause's fundraising. The returned function should take one argument, representing a donation to that cause, and should keep track of the total donations received.
The fundraising goal is reached once the total donations exceed a specified amount. On reaching the goal, return a message stating how much was raised. Any subsequent donation attempts after the goal has been reached should return a message stating that the fundraising goal has already been achieved.

Example:
const schoolFund = fundraiser(500); // Goal is 500
*/



