console.log('---contoh soal menggunakan forEach--');
function double (arr) {
  var simpan =[];
  
  arr.forEach ( function (val, index, array) {
    simpan.push(val*2);
  });
  return simpan;
}
console.log(double([4,3,2,1])); //[8,6,4,2]

console.log('---forEach---');
//1.Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
function printFirstAndLast (arr) {
  
  var newString = '';
  
  arr.forEach ( function (val) {
    var newVal = val[val.length-1];
    newString = val[0] + newVal;
    console.log(newString);
  });
  //return newString;
}
printFirstAndLast(['awesome','example','of','forEach']); 

// ae
// ee
// of
// fh

//2. Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.
/*function addKeyAndValue () {
  this.name = 'Elie' ;
  this.isInstructor = true ;
}                
  addKeyAndValue.prototype.add = function (val, index, array) {
   array.forEach(function (entry) {
   this.name  = entry;
   this.isInstructor = entry; 
   }, this); 
  return name;
};

var object = new addKeyAndValue ();
object.name.add('tim');
console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));

/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/

console.log('---map---');
//3. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
function valTimesIndex (arr) {
  var newArr = [];
  arr.map(function (val, index, array) {
    newArr.push(val * index);
  });
  return newArr ;
}  
console.log(valTimesIndex([1,2,3])); // [0,2,6]
console.log(valTimesIndex([5,10,15])); // [0,10,30]

//4 Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
function extractKey () {
  var niArray = [{name:'Elie', isInstructor:true},
                {name:'Tim', isInstructor:true},
                {name:'Matt', isInstructor:true}];
                
   var reformatArray = niArray.map(function (obj) {
     var rObj = [];
     rObj[obj.name] = obj.isInstructor;
     console.log(rObj);
     return rObj;
   });   
   
}
console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));
// ["Elie", "Tim", "Matt"]

console.log('---filter---');
//5. Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive
function filterLetters (arr, letter) {
//my own way  
  var count  = 0;
  for (var i=0;i<arr.length; i++){
    if (arr[i].toLowerCase() === letter.toLowerCase()){
      count++;
    }
  }
  /*var bandingkan = arr.filter(function (val) {
      var count =0;
      if (val.toLowerCase()) {
      count++; }
  });*/
  return count;
  }
console.log(filterLetters(["a","a","b","c","A"], "a")); // 3
console.log(filterLetters(["a","a","b","c","A"], "z")); // 0
console.log(filterLetters(["a","a","b","c","A"], "B")); // 1

//6.Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:
function filterKey (arr, name) {
  var arr = [{name:'Elie'},
             {isInstructor:true},
             {isHilarious:'false'}
            ];

}
console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious"));

// [{name: "Tim", isInstructor:true, isHilarious:true}]

console.log('---contoh soal reduce---');
function nilai (arr) {
  var simpan=[];
   return arr.reduce( function (a,b) {
     return a+b ;
    },5);
  return simpan(a+b);
}
console.log(nilai([1,2,3,4]));

// Think about what acc and next are for each step in the iteration!
// Ultimately, this reduce will return the following:
// Object {key2: 2, key3: 3, key4: 4}

console.log('---reduce---');
//7. Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
  function extractKey () {
    
  }
/*console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));*/
// ["Elie", "Tim", "Matt"]
