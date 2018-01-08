console.log('// Exercises => 1. myName');
//1. Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.
function myName(){
  var nama = 'Yusup Juniadi';
  console.log('My Name : ' +nama);
}
myName();

console.log('// Exercises => 2 & 3. favoriteFoods & randomFood');
//2. Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".
var favoriteFoods = ['pizza', 'ice cream']; 
//3. Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back from Math.random.
function randomFood() {
  var randomIndex = Math.floor(Math.random() * favoriteFoods.length);
  console.log('My Favorite Foods : ' +favoriteFoods[randomIndex]);
}
randomFood();

console.log('// Exercises => 4 & 5. Numbers & displayOddNumbers');
// 4 Create a variable called numbers which is an array that contains the numbers 1 through 10.
var numbers = [1,2,3,4,5,6,7,8,9,10];
// 5. Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. Here is what that might look like:
function displayOddNumbers () {
  for (var i=0; i<numbers.length; i++){
    if (i % 2 === 0){
    console.log('Display Odd Numbers : ' +numbers[i]);
    }
  }
}
displayOddNumbers();

// 6. Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even. Here is what that might look like:
console.log('// Exercises => 6 displayEvenNumbers');
function displayEvenNumbers() {
  for (var j=0; j<numbers.length; j++) {
  if  (j % 2 === 1) {
      console.log('Display Even Numbers : ' +numbers[j]);
    }
  }  
}
displayEvenNumbers();

console.log('// Exercises => 7 returnfirstOddNumber');
// 7 Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstOddNumber() {
  for (var k=0; k<numbers.length; k++){
    if (k % 2 === 0) {
      return('First Odd Numbers : ' +numbers[k]);
    }
  }
}
console.log(returnFirstOddNumber());

console.log('// Exercises => 8 returnfirstEvenNumber');
// 8 Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstEvenNumber() {
  for (var m=0; m<numbers.length; m++){
    if (m % 2 === 1) {
      return('First Even Numbers : ' +numbers[m]);
    }
  }
}
console.log(returnFirstEvenNumber());

console.log('// Exercises => 9 returnFirstHalf');
// 9. Create a function called returnFirstHalf which returns the first half of the numbers array
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstHalf() {
  var firstHalf = numbers.slice(0,numbers.length/2);
  return firstHalf ;
}
console.log(returnFirstHalf());

console.log('// Exercises => 10 returnSecondHalf');
//10 Create a function called returnSecondHalf which returns the second half of the numbers array
var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnSecondHalf() {
  var secondHalf = numbers.slice(numbers.length/2);
  return secondHalf ;
}
console.log(returnSecondHalf());

