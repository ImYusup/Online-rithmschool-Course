console.log('//1. called printEvens function ');
//1. Given the following array, write a function called printEvens that console.logs all of the even numbers
function printEvens () {
  var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];
  for (var i=0; i<nestedArr.length; i++){
    for (var j=0; j<nestedArr[i].length; j++) {
      if (nestedArr[i][j] % 2 === 0){
        console.log(nestedArr[i][j]);
      }
    }
  }
}
console.log(printEvens());

console.log('//2. called printEvens function ');
//2. Given the following array, write a function called sumTotal returns the sum of all numbers in the array
function sumTotal () {
  var nestedArr = [[[1,2],[3,4]],[[5,6]]];
  var total = 0;
  for (var i=0; i<nestedArr.length; i++) {
    for (var j=0; j<nestedArr[i].length; j++) {
      for (var k=0; k<nestedArr[i][j].length; k++) {
      //console.log(nestedArr[i][j][k]);
      total += nestedArr[i][j][k];
    }
  }
}
  //console.log(total);
  return total;
}
console.log(sumTotal());

console.log('//3. Optional Bonus');
//3. Given the following array, write a function called countVowels, which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

/*var arr = [];
Array.isArray(arr); // true
Array.isArray('Hello'); // false

var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

function seeIfVowel(char, count){
    var vowels = "aeiou";
    if(vowels.includes(char.toLowerCase())){
        return ++count; // add 1 to count then return the value (this is called a prefix operator)
    }
    return count;
}

function countCharacters(str,count){
    for(var i = 0; i < str.length; i++){
        count = seeIfVowel(str[i], count);
    }
        return count;
}

function countVowels(arr){
  
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            for(var j = 0; j < arr[i].length; j++){
                if(Array.isArray(arr[i][j])){
                    for(var k = 0; k < arr[i][j].length; k++){
                        if(Array.isArray(arr[i][j][k])){
                            for(var l = 0; l < arr[i][j][k].length; l++){
                                count = countCharacters(arr[i][j][k][l], count);    
                            }
                        } else {
                            count = countCharacters(arr[i][j][k], count);    
                        }
                    }
                } else {
                    count = countCharacters(arr[i][j], count);
                }
            }
        } else {
            count = countCharacters(arr[i], count) ;  
        }
    }
    return count;
}

function countVowelsEasier(arr){
    var str = arr.toString();
    var count =0 ;
    count = countCharacters(str, count);
    console.log(count);
    return count;
}
console.log(countVowelsEasier()); // 13 */

console.log('-----------Nested Arrays Exercises----------');
console.log('//1. called rotate fucntion');
//1. Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
function rotate (arr, num) {
  //cara trainer
  var  amount = num % arr.length;
  //console.log('amount : ' +amount);
    for (var i=0; i<amount; i++){
    arr.unshift(arr.pop());
    //console.log('arr : ' +arr);
  }
  return arr;
}
console.log(rotate([1,2,3], 1)); // [3,1,2]
console.log(rotate([1,2,3], 2)); // [2,3,1]
console.log(rotate([1,2,3], 3)); // [1,2,3]

console.log('//1. called makeXOGrid function');
//2. Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
function makeXOGrid (rows, columns) {
    var finalArr = [];
    var startWithX = true;
    
    for (var i=0; i<rows; i++){
      var newRow = [];
        for (var j=0; j<columns; j++){
          if (startWithX) {
            newRow.push('X');
          }
          else {
            newRow.push('O');
          }
          startWithX = !startWithX;
        } 
        finalArr.push(newRow);
        //console.log('beda ' +newRow)
    }            
    //.log(finalArr);
    return finalArr;

} 
console.log(makeXOGrid(1,4)); 

/*/
[["X","O","X","O"]]
/*/

console.log(makeXOGrid(3,2)); 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

console.log(makeXOGrid(3,3)); 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/