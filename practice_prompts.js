/* Declare a function 'OrderedList', which takes in no arguments and returns an instance of an 'OrderedList' object when invoked with the 'new' keyword. 

OrderedList objects should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. However, all elements are in sorted order. 

All OrderedList objects should contain their own 'length' property, 
which keeps track of the number of items they contain. 

An OrderedList should also keep track of whether it is sorted in reverse order with a isReversed property. When an OrderedList is first created, it should have a length of 0 and an isReversed value of false.*/

//input: none 
//output: object instance that stores values at numbered indexes starting at 0
//create length prop and initialize to 0, and isReveresed prop with value of false
//iterate through object to check if values are reversed
// declare a varible and creat object instance using the new keyword

function OrderedList() {
    this.length = 0;
    this.isReversed = false;
    
  }
  
  /* - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'OrderedList'. 
  
  'add' should take in a number as a single argument, and when invoked on an OrderedList instance, should add the number to that OrderedList in descending order if the list is not reversed, or ascending order if the list is reversed. 
  
  Update the OrderedList's length property appropriately, and return the length of the OrderedList.*/
  
  //add a 'add' method to OderedList prototype
  //input: number  output: object instance with input values stored in ordered indexes
  
  OrderedList.prototype.add = function (num) {
    //create index property using length prop, store values accordingly 
    this[this.length] = num;
    //increment length prop each time value is added
    this.length++;
    //remove values using Object.values() store in variable
    let values = Object.values(this);
    //use .slice method to remove last 2 elements
    values = values.slice(0, -2);
    //use conditional to check if isReverse prop is true/ false
  
    //use .sort method to sort array accordingly
    if (this.isReversed === false) {
       //if false = NOT reversed = ascending order
        values.sort((a, b) => a - b);
     
  //if true = YES reversed = descending order
      } else {
           values.sort((a, b) => b - a)
  }
   //use for loop to add each value at appropriate index : this[i] = array[i]
    for (let i = 0; i < values.length; i++) {
      
      this[i] = values[i];
    }
  }
  
  const list = new OrderedList();
  list.add(2)
  list.add(7)
  list.add(5)
  list.add(1)
  console.log(list)
  console.log(list)