console.log('_______PART I ___________');
console.log('1. called difference function on two paramaters');
//1. this function takes in two parameters and returns the difference of the two;
function difference (a,b) {
  return a - b
}
console.log(difference(2,2)); // 0
console.log(difference(0,2)); // -2

console.log('2. called product function on two paramaters');
//2. this function takes in two parameters and returns the product of the two;
function product (a,b) {
//my own way
  /*if (a === 2 ) {
   return a + b;
  }
  else {
    return 0;
  }*/
//cara trainer
  return a*b;
}
console.log(product(2,2)); // 4
console.log(product(0,2)); // 0

console.log('3. called printDay function on one parameter');
//3. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay (num)  {
//nyerah pake cara trainer  
  var obj =  {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };
  return obj[num] ;
}
console.log(printDay(4)); // "Wednesday"
console.log(printDay(41)); // undefined

console.log('4. called lastElement function on one parameter');
//4. this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
function lastElement (str) {

  return str[str.length-1];
}
console.log(lastElement([1,2,3,4])); // 4
console.log(lastElement([])); // undefined

console.log('5. called numberCompare function on two parameter');
//5. this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
function numberCompare (a,b) {
// my own way  
  if (a === b){
    return 'Number are equal';
  }  
  else if (a > b){
    return 'First is greater';
  }
  else {
    return 'Second is greater'; 
  }
//cara trainer  <-- same with me
}
console.log(numberCompare(1,1)); // "Numbers are equal"
console.log(numberCompare(2,1)); // "First is greater"
console.log(numberCompare(1,2)); // "Second is greater"

console.log('6. called singleLetterCount function on two parameter');
//6.this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
function singleLetterCount (word, letter) {
// my way own  
  /*  var uniques = [];
    var frequency = [];
    
    for (var i=0; i<word.length; i++){
      var position = uniques.indexOf(word[i]);
      if (position === -1) {
        uniques.push(word[i]);
        frequency.push(1);
      }
      else {
        frequency[position]++;
      }
    }
    
    var frequencyMax = frequency[0];
    for (var j=0; j<frequency.length; j++){
      if (frequency[j] > frequencyMax) {
        frequencyMax = frequency[j];
    }
  }
  //console.log('Unik : ' +uniques);
  //console.log('Freq : ' +frequency);
  //console.log('Freq Max : ' +frequencyMax );
  return frequencyMax;*/
// cara trainer
  var finalCount = 0;
  for (var i=0; i<word.length; i++){
    if (word[i].toLowerCase() === letter.toLowerCase()){
      finalCount++;
    }  
  }//console.log(finalCount);
  return finalCount;
}
console.log(singleLetterCount('amazing','A')); // 2
console.log(singleLetterCount('Rithm School','o')); // 2

console.log('____________PART II___________');
console.log('1. called multipleLetterCount function on two parameter');
//1. this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
function multipleLetterCount (str) {
//my own way
   /* var unik = [];
    var freq = [];
    
    for (var i=0; i<str.length; i++){
      var posisi = unik.indexOf(str[i]);
    if (posisi === -1) {
      unik.push(str[i]);
      freq.push(1);
    }  
    else {
      freq[posisi]++;
    }
  }
  //console.log('Unik : ' +unik);
  //console.log('Freq : ' +freq);
  
  var gabung = [];
  for (var j=0; j<unik.length; j++){
  gabung.push({
      nama: unik[j],
      frekuensi: freq[j]
   });
  }
  //console.log(Object.values(gabung));
 var gabungStr = [];
  for (var k=0; k<gabung.length; k++) {
    gabungStr[k] = gabung[k].nama + ':' + gabung[k].frekuensi;
  }
  
  //console.log('Gabung STR : ' +gabungStr);
  return gabungStr.toString();*/
//cara trainer
var finalObj = {};
for (var i=0; i<str.length; i++){
  if (!(str[i] in finalObj)) {
    finalObj[str[i]] = 1;
   }
   else {
     finalObj[str[i]]++;
   }
  }//console.log(finalObj);
  return finalObj;
}
console.log(multipleLetterCount("hello")); // {h:1, e: 1, l: 2, o:1}
console.log(multipleLetterCount("person")); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

console.log('2. called arrayManipulation function on four parameter');
//2. this function should take in at most four parameters (an array, command, location, and value).
// - If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// - If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// - If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
// - If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.
function arrayManipulation (arr, command, location, val) {
  var simpan = [];
    if (command === 'remove') { 
      if (location === 'end') { 
      return arr.splice(0,2); //Menghasilkan 3
      }  
      else {
      return arr.splice(-2,3); //menghasilkan 1
      }
    }
    
    if (command === 'add') {  
      if (location === 'beginning') {
       return arr.unshift(val); //Menghasilkan [20,1,2,3]
      }
      else {
      return arr.push(val); //Menghasilkan [1,2,3,30]
      }
    }  
    
}   
//No output, this is wrong // cara trainer    
    /*if (command === 'remove') { 
     if (location === 'end'){
     return arr.pop();
    }
     return arr.shift();
    }
    
    else if (command === 'add') {
      if (location === 'end'){
        arr.push(val);
        return arr;
      }
        arr.unshift(val)
        return arr;
      }*/
    //console.log('arr : ' +arr);
console.log(arrayManipulation([1,2,3]), "remove", "end"); // 3
console.log(arrayManipulation([1,2,3]), "remove", "beginning"); // 1
console.log(arrayManipulation([1,2,3]), "add", "beginning", 20); // [20,1,2,3]
console.log(arrayManipulation([1,2,3]), "add", "end", 30); // [1,2,3,30]

console.log('3. called isPalindrome function on one parameter');
//A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true
function isPalindrome (string) {
// my own way    
    var isString = '';
    for (var i=string.length-1; i>=0; i--){
      isString += string[i];
    }
    if (isString === string) {
      return true;
    }
    else {
      return false;
    }
// cara trainer  
  /*return string.toLowerCase().split('').reverse().join('') === string. toLowerCase();*/
}
console.log(isPalindrome('testing')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('hannah')); // true
console.log(isPalindrome('robert')); // false

console.log('4. called Rock/Paper/Scissor function');
//4. using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.
/*function RPS () {
//Cara trainer, gga kepikiran dan males <-- bonus soal
//Buat fungsi di dalam RPS. untuk membuat range angka
    function determinceComputer (num) {
//If computerChoice is between 0 and 0.33, make computerChoice equal to rock.      
      if (num <= .33) return 'Rock';
//If computerChoice is between 0.34 and 0.66, make computerChoice equal to paper.
      else if (num <= .66) return 'Paper';
//If computerChoice is between 0.67 and 1, make computerChoice equal to scissors.
      return 'Scissor';
    }
//Buat prompt untuk user choice
  var userChoice = prompt('Choose Rock/Paper/Scissor').toLowerCase();
  var computerChoice = determinceComputer(Math.random());
  
//Pilihan jawaban dari prompt
var answer = ['rock', 'paper', 'scissor'];
//Buat kondisi bila tidak ada list 
if (!userChoice || answer.indexOf(userChoice) === -1) {
  return 'Please select a valid option';
}
//Buat kondisi untuk permainan jika kalah
if (userChoice === computerChoice) return 'Tie!';
if (userChoice === 'rock' && userChoice === 'paper') return 'You lose, computer picked : ' +computerChoice;
if (userChoice === 'paper' && userChoice === 'scissor') return 'You lose, computer picked : ' +computerChoice;
if (userChoice === 'scissor' && userChoice === 'rock') return 'You lose, computer picked : ' +computerChoice;
//Buat kondisi permainan jika menang
return 'You win! Computer picked : ' +computerChoice;
}
console.log(RPS());*/

