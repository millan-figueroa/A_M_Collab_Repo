/* Write a function after that takes the number of times the callback needs to be 
called before being executed as the first parameter and the callback as the second 
parameter.
*/
 

// console.log(afterCalled(5)); //undefined
// console.log(afterCalled(5)); //undefined
// console.log(afterCalled(5)); //9

/* Create a function saveOutput that accepts a function (that will accept one argument), 
and a string (that will act as a password). saveOutput will then return a function that 
behaves exactly like the passed-in function, except for when the password string is 
passed in as an argument. When this happens, the returned function will return an 
object with all previously passed-in arguments as keys, and the corresponding outputs 
as values*/

// Uncomment these to check your work!
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // should log: 4
// console.log(multBy2AndLog(9)); // should log: 18
// console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }


/*
Challenge: cycleIterator
Create a function cycleIterator that accepts an array, and returns a function. The returned function 
will accept zero arguments. When first invoked, the returned function will return the first element 
of the array. When invoked a second time, the returned function will return the second element of 
the array, and so forth. After returning the last element of the array, the next invocation will 
return the first element of the array again, and continue on with the second after that, and so 
forth.*/

// Uncomment these to check your work!
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);

/*Challenge: dateStamp
Create a function dateStamp that accepts a function and returns a function. The returned function 
will accept whatever arguments the passed-in function accepts and return an object with a date key 
whose value is today's date (not including the time) represented as a human-readable string (see 
the Date object for conversion methods), and an output key that contains the result from invoking 
the passed-in function. */

// Uncomment these to check your work!
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }


/* Create a function censor that accepts no arguments. censor will return a function that will accept 
either two strings, or one string. When two strings are given, the returned function will hold onto 
the two strings as a pair, for future use. When one string is given, the returned function will 
return the same string, except all instances of a first string (of a saved pair) will be replaced 
with the second string (of a saved pair).*/

// Uncomment these to check your work!
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
// should log: 'The slow, brown fox jumps over the lazy cats.'

function after(count, func) {
    let timesCalled = 0;

      return () => {

        timesCalled++;

        if (timesCalled === count){
          return func();

        } else {          
          return undefined;
        }
      }
    }
    // /*** Uncomment these to check your work! ***/
    const called = function() { console.log('hello') };
    const afterCalled = after(3, called);
    console.log(afterCalled()); // => nothing is printed
    console.log(afterCalled()); // => nothing is printed
    console.log(afterCalled()); // => 'hello' is printed
