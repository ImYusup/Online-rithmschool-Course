console.log('---Higher Order Functions----')
console.log('//1. Practice')
//1. Let's try to write a function called each which accepts two parameters: an array and a callback function. The each function should loop over the array passed to it and run the callback function on each element in it.
// this function should accept 2 parameters, put them in!
function each(array, fn){
    // put your code inside here!
      for(var i=0; i< array.length; i++){
      fn(array[i]);
    }
    return fn;
  }
console.log(each([1,2,3,4], function(val){console.log(val);}));
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

console.log(each([1,2,3,4], function(val){console.log(val*2);}));

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8

console.log('---Higher Order Functions (Exercises)----');
console.log('//1. called map functions');
//2. Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example:
function map (array, callback) {
  var simpan = [];
  for (var i=0; i<array.length; i++){
    //console.log(callback(array[i]));
      simpan.push (callback(array[i]));
  }
  //console.log(simpan);
  return simpan;
}
console.log(map([1,2,3,4], function(val){ return val * 2;})); // [2,4,6,8]
console.log('//2. called reject function');
//3.Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:
function reject (arr, callback) {
  var save = [];
  var simpan = [];
  //var startWith = false;
  for (var i=0; i<arr.length; i++){
    save.push(callback(arr[i])); 
      if (save[i] === false) {
       simpan.push(arr[i]);  
       //console.log (simpan);
    }
  }    
    return simpan;
    //console.log(save);
 
}
console.log(reject([1,2,3,4], function(val){return val > 2;})); // [1,2]
console.log(reject([2,3,4,5], function(val){return val % 2 === 0;})); // [3,5]

console.log('Higher Order Functions, Timers, and Closures Exercises(Exercises)');
/*console.log('//1 called countdown function (TIMER)');
//1. Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.
function countDown (time) {
  //buat variable timer & setInterval 
  var timer = setInterval(function(){
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log('DONE!');
    }
     else {
       console.log(time);
     }
     
},1000);

  return time;
}
console.log(countDown(4));
// 3
// 2
// 1
// "DONE!

console.log('//2 called randomGame function (TIMER)');
//2. Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.
function randomGame () {
  var num ;
  var times =0;
  
  var waktu = setInterval(function(){ 
    num = Math.random();
    times++;
    if (num > .75) {
      clearInterval(waktu);
      console.log('It Looks ' + times + 'Try Again!!');
    }
  },1000);
}
console.log(randomGame());*/

console.log('//3 called isEven function');
//3 Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
function isEven (num) {
//My own way
 if (num % 2 === 0){
   return true;
 }
 else {
   return false;
 }
}
console.log(isEven(2)); // true
console.log(isEven(3)); // false

console.log('//4. called isOdd function')
//4.Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
function isOdd (num) {
//My own way
  if (num % 2 !== 0){
    return true;
  }
  else {
    return false;
  }
}
console.log(isOdd(3)); // true
console.log(isOdd(14)); // false

console.log('//5. called isPrime function');
//5.Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
function isPrime (num) {
  //My own way  
    var prime = true;
    for (var i=2; i<num; i++){
      if (num % i === 0){
        prime = false;
    }
  }
  return prime;
  //cara trainer
}
console.log(isPrime(8)); // false
console.log(isPrime(17)); // 

console.log('//6. called numberFact function');
//6. Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it
function numberFact (num, fn) {
//my trainer 
  //console.log('fn' +fn);
  return fn(num);
  
}
console.log(numberFact(59,isEven)); // false
console.log(numberFact(59,isOdd)); // true
console.log(numberFact(59,isPrime)); // true

console.log('//7. called find function (Higher Order Functions)');
//7.Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.
function find (arr, fn) {
  //my own way  
    /*var simpan =[];
    var save =[];
    for (var i=0; i<arr.length; i++){
      simpan.push(callback(arr[i]));
        if (simpan[i] === true){
          save.push(arr[i]);
        }
    }
    //console.log(save);
    var hasil =[];
    for (var j=0; j<save.length; j++){
      if(save[j] === save[0]){
        hasil.push(save[j]);
      }
    }
    console.log(hasil.toString());*/
  //cara trainer  
  for (var i=0; i<arr.length; i++){
    if(fn(arr[i])) {
      return arr[i];
    }
  }
}
console.log(find([8,11,4,27], function(val){return val >= 10})); // 11
console.log(find([8,11,4,27], function(val){return val === 5})); // undefined

console.log('//8. called findIndex function (Higher Order Functions)')
//8. Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.
function findIndex (arr, fn) {
//cara trainer  
  for (var i=0; i<arr.length; i++){
    if (fn(arr[i])) {
      //console.log('fn' +fn);
      return i;
    }
  }
}
// returns 1 (index of the first value greater than or equal to 10)
console.log(findIndex([8,11,4,27], function(val){return val >= 10})); //1
console.log(findIndex([8,11,4,27], function(val){return val === 7})); // undefined

console.log('//9. called findIndex function');
//9. Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
function specialMultiply (a,b) {
  
  if (arguments.length === 1) {
    return function (b) {
      return a*b;
    }
  }
  return a*b;
}
console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // returns a function 

