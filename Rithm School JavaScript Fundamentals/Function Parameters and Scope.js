//1. Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.
console.log('// 1. call add, subtract, multiply, devide function');
function add (a,b){
    return a + b;  
}
console.log('add : ' +add(2,2));
function subtract (a,b){
    return a - b;  
}
console.log('subtract : ' +subtract(2,2));
function multiply (a,b){
    return a * b;  
}
console.log('multiply : ' +multiply(2,2));
function divide (a,b){
    return a / b;  
}
console.log('divide : ' +divide(2,2));

//2. Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.
console.log('// 2. call sayHello function');
function sayHello (str){
  var firstNames = 'Yusup'.toUpperCase();
  if (str === firstNames){
    return 'Hello Boss';
  }
    else {
      return 'Hello ' +str;
  }
}
console.log(sayHello('YUSUP'));
console.log(sayHello('Arsyad'));

//3. Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)
console.log('// 3. call average function');
function average (str){
  var total = 0;
  for (var i=0; i<str.length; i++){
    total += str[i]/str.length;    
  }
  return total;
}
console.log(average([1,2,3,4,5])); // 3
console.log(average([1,2,3,4,5,6])); // 3.5
console.log(average([10,20])); // 15

//4. Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the
console.log('// 4. call createStudent function');
function createStudent (firstName, lastName) {
   return {
        firstName : firstName,
        lastName : lastName
    }
} 
console.log(createStudent("Elie", "Schoppik"));
/*
{
    firstName: "Elie",
    lastName: "Schoppik"
}
*/
console.log(createStudent("Tim", "Garcia"));
/*
{
    firstName: "Tim",
    lastName: "Garcia"
}
*/
console.log('// 5. create variable on findStudentByFirstName parameter');
//5. Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students
  var tim = createStudent("Tim", "Garcia");
  var matt = createStudent("Matt", "Lane");
  var elie = createStudent("Elie", "Schoppik");
  var students = [tim, matt, elie]; 
console.log(students);  
//6. Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization
console.log('// 6. call findStudentByFirstName function');
function findStudentByFirstName (name) {
  var studentItems = name.toLowerCase();
  for (var i=0; i<students.length; i++){
    if(students[i].firstName.toLowerCase() === studentItems){
      return true;
    }
  } 
  return false;
}
console.log(findStudentByFirstName('elie')) // true
console.log(findStudentByFirstName('Elie')) // true
console.log(findStudentByFirstName('Janey')) // false
console.log(findStudentByFirstName('janey')) // false
console.log(findStudentByFirstName('TIM')) // true
console.log(findStudentByFirstName('MMMaaaTTTtttTTT')) // false

console.log('// 7. call extractEveryThird function');
//7 Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.
function extractEveryThird (arr) {
  var save = [];
  
  for (var i=0; i<arr.length; i++) {
    if (arr[i] === arr[2] || arr[i] === arr[5]) {
      save.push(arr[i]);
    }
  }
  return save;
  //cara trainer//
 /* for (var i=2; i<arr.length; i+=3){
      save.push(arr[i]);
  }
  return save;*/
}
console.log(extractEveryThird([1,2,3])); // [3]
console.log(extractEveryThird([1,2,3,4,5,6])); // [3,6]
console.log(extractEveryThird(["a","b","c","d"])); // ["c"]
console.log(extractEveryThird(["first value", "second value", "third value"])); // ["third value"]

console.log('// 8. call countEvensAndOdds function');
//8. Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.
function countEvensAndOdds(arr){
  /*var ganjil = [];
  var genap = [];
  for (var i=0; i<arr.length; i++){
    if (i % 2 === 0) {
      ganjil.push(arr[i]);
    }
    else if (i % 2 == 1) {
      genap.push(arr[i]);
    }
  }
  console.log('ganjil : ' +ganjil);
  console.log('genap : ' +genap);
  var lengthGanjil = ganjil.length;
  var lengthGenap = genap.length;
  if (lengthGanjil) {
    return 'oddCount: ' +lengthGanjil;
  }
  if (lengthGenap) {
    return 'evenCount: ' +lengthGenap;
  }*/
                   //cara trainer//
var obj = {                   
    oddCount : 0,
    evenCount : 0
}  
    for (var i=0; i<arr.length; i++){
      if (i % 2 === 0) {
        obj.oddCount++;
      }
      else {
        obj.evenCount++;
      }
    }
   // console.log('oddCount : ' +obj.oddCount);
   // console.log('evenCount : ' +obj.evenCount);
    return obj;
}
console.log(countEvensAndOdds([1,2,3,4]));
/* 
 {
    oddCount:2,
    evenCount:2
 }
*/
console.log(countEvensAndOdds([1,2,3,4,5,6,7]));
/* 
 {
    oddCount:4,
    evenCount:3
 }
*/

//9. In the following example, what will be printed in the console? Make sure you first try read this code before pasting it into the console :)
console.log('// 9. example for scope practice');
var myVar = "Hello from global";
function scopePractice() {
   var myVar = "Hello from function scope";
}
scopePractice();
console.log(myVar);

var tricky = "Hello from global";
function trickyScopePractice() {
    tricky = "Hello from function scope";
}
console.log(tricky);

//10. Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.
console.log('// 10. call onlyCapitalLetter function');
function onlyCapitalLetters (str){
  /*var pisah = str.toUpperCase().split('');
  //console.log(pisah);
  var simpan ='';
  for (var i=0; i<str.length; i++){
    if (pisah [i] === str[i]) {
      simpan += str[i];
    }
    else if (pisah[i] !== str[i]) {
      return simpan;
    }
  }
  return simpan.toString();*/
      //Cara Trainer//
  var  newStr = '';
  for (var i=0; i<str.length; i++){
    if(str[i].charCodeAt(0) < 96 && str[i].charCodeAt(0) > 64 ){
      newStr += str[i];
    }
  }
  return newStr;
}  

console.log(onlyCapitalLetters("Amazing")); // "A"
console.log(onlyCapitalLetters("nothing")); // ""
console.log(onlyCapitalLetters("EVERYTHING")); // "EVERYTHING"






















