/*console.log('//1. What does the throw keyword do?');
//1.What does the throw keyword do?
console.log('Answer : The throw keyword allows you to return an error/exception of your choice');
console.log('//2. What does the finally keyword do?');
//2. What does the finally keyword do?
console.log('Answer : The finally keyword allows you to return an code regardless of an error being thrown')
console.log('//3. What is the difference between a TypeError and ReferenceError?');
//3. What is the difference between a TypeError and ReferenceError?
console.log('Answer : 1. TypeErrors occur when JavaScript is unable to perform a certain operation on a data type (invoking something that is not a function, accessing properties on something that is not an object). 2. ReferenceErrors occur when JavaScript does not have a reference to the variable in memory (accessing a variable that is not defined or not in the current or outer scope)');
console.log('//4. How do you create a snippet in the Chrome dev tools?');
//4. How do you create a snippet in the Chrome dev tools?
console.log('Answer : Open the sources tab, head to the left hand panel and click on snippets, then right click inside the tab and click new')
console.log('//5. In the Chrome dev tools, what is the pause function?')
//5. In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
console.log('An exception is an error that occurs in your program. Caught exceptions are errors that are evaluated in a try/catch block');
console.log('//6. How do we "catch" errors in JavaScript? Give an example with code for what that might look like');
//6. How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
console.log('We catch errors using a try/catch block');
try {
   undefined()
} catch(e){
	console.log("We just made a TypeError, we can learn more using the error object returned to us:", e);
}*/
console.log('Explain type of error to fix it');
console.log('//1. Explain type of error to fix it');
//7.Explain what type of error will be thrown, why the error is occuring, and how to fix it:
//person; //code here
console.log('Answer : Type of error - ReferenceError. Why - Because we are accessing a variable that has not been defined')
console.log('//2. Explain type of error to fix it');
//var data = {}; //code here
//data.displayInfo(); //code here
console.log('Answer : Type of error - TypeError Why - The value of data.displayInfo is undefined, so we are invoking undefined which we can not do. Undefined is not a function');
console.log('//3. Explain type of error to fix it');
//var data = {};
//data.displayInfo.foo = "bar";
console.log('Answer : Type of error - TypeError Why - **We are trying to assign a property of foo on undefined. Undefined is not an object so we can not do that**')
console.log('//4. Explain type of error to fix it');
//function data(){
  //  var thing = "foo";
//}
//data();
//thing;
console.log('Type of error - ReferenceError Why - The thing variable is only available in the scope of the data function. We are trying to access it out of scope and JavaScript does not have a reference to it')
console.log('Part II - Fix the broken code and explain what was wrong:')
console.log('//1.Fix the broken code and explain what was wrong:');
/*for(var i=0; i > 5; i++){ //code here
    console.log(i);
}*/
for(var i=0; i < 5; i++){ //fix code here
    console.log(i);
}
console.log('//2.Fix the broken code and explain what was wrong:');
/*function addIfEven(num){ //code here
    if(num % 2 = 0){   //code code here
        return num + 5;
    }
  return num;
} */
function addIfEven(num){ //code here
    if(num % 2 === 0){   //code code here
        return num + 5;
    }
  return num;
}  
console.log('//3.Fix the broken code and explain what was wrong:');
/*function loopToFive(){ //Code here
    for(var i=0, i < 5, i++){
        console.log(i);
    }
}*/
function loopToFive(){
    for(var j=0; j < 5; j++){
        console.log(j);
    }
}loopToFive();
console.log('//4.Fix the broken code and explain what was wrong:');
/*function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8] */

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
      return evenNumbers;
}
console.log(displayEvenNumbers()); // should return [2,4,6,8] 

