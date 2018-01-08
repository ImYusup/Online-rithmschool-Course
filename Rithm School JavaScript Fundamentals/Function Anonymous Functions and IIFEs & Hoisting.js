console.log('// 1. call displayFullName function for IIFE ')
//1. Write a function called displayFullName, which should accept two parameters, firstName and lastName. The function should be immediately invoked and return the firstName + lastName. You should NOT have to call this function, it should invoke right away
var expression = (function displayFullName (firstName, lastName) {
    return firstName +  " " + lastName;
})('Yusup', 'Juniadi');
console.log(expression); //IIFE: Immediately Invoked Function Expressions

// contoh IIFEs That Return Objects
console.log('// contoh IIFEs That Return Objects - 1');
var personObject = (function () {
  return {
    nama: 'Arsyad Al Khawarizmi Priadi',
    age: '7 Bulan',
    ocuppation : 'Nyusu',
    hobbies : 'Meluk Ibu'
  };
})();
console.log(personObject.nama); //return nama
console.log(personObject.age); ///return age
console.log(personObject.ocuppation); //return ocuppation
console.log(personObject.hobbies); //return hobbies
console.log('// contoh IIFEs That Return Objects - 2');
var personObject = (function invokeRightAway () {
    var person = 'Yusup Juniadi as Arsyad Dad';
      return {
        getName: function () {
          return person;
        },
        setName: function (newName) {
          person = newName;
        }
      };
})();
console.log(personObject.getName()); //Yusup Juniadi as Arsyad Dad
console.log(personObject.setName('Putri')); //Undefined
console.log(personObject.getName()); //Putri
//console.log(person);
console.log('// 2. call createCalculator function for return object')
//2. Write a function called createCalculator, which should return an object that has four methods, add, subtract, multiply and divide.
var calc = (function createCalculator () {
  
      return {
        add: function (a, b) {
          return a + b; 
        },
        subtract: function (a, b) {
          return a - b; 
        },
        multiply: function (a, b) {
          return a * b; 
        },
        divide: function (a, b) {
          return a / b; 
        }
      };
}) ();
console.log(calc.add(20,20)); // 40
console.log(calc.subtract(2,2)); // 0
console.log(calc.multiply(2,2)); // 4
console.log(calc.divide(12,2)); // 6

console.log('________HOISTING_______');
console.log(' //1. What does the following code output? Why?');
var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}
//'Tim' is returned since the name variable defined in the function scope is return. JavaScript always starts from in (the closest function) and works its way out (to outer functions and eventually the global scope)
console.log(displayFirstName());  

console.log(' //2. What does the following code output? Why?');
function displaysecondName(){
    var secondName = 'Tim';
    return secondName;
}
displaysecondName();
// ReferenceError - secondName is not defined. We get an error because we are trying to access a variable defined in a function outside of its scope. 
console.log(secondName); 

console.log(' //3. What does the following code output? Why?');
console.log(thirdName); // ?
var thirdName = "Elie"
// undefined is output because the var firstName; is hoisted to the top of the code so it actually looks like this under the hood

/*var thirdName;
console.log(thirdName);
thirdname = "Elie"

console.log(' //4. What does the following code output? Why?');
console.log(pertamaName) // ?
pertamaName = 'Elie' 

// since variables that do not use the var keyword are NOT hoisted, this will return a ReferenceError - firstName is not defined*/

/*console.log(' //5. What does the following code output? Why?');
function sayHi(){
    return 'Hi ' + keduaName;
    var keduaName = 'Elie'
}

sayHi(); // "Hi undefined", since the firstName variable uses the var keyword, it is hoisted to the top and it's value is initialized to undefined. It looks a bit like this:

function sayHi(){
    var keduaName; // the value of firstName is now undefined
    return 'Hi ' + keduaName;
    keduaName = 'Elie' // the value of firstName has been re-assigned to 'Elie'
}
console.log(sayHi());*/

console.log(' //6. What does the following code output? Why?');
function sayHi(){
    return 'Hi ' + ketigaName; 
    ketigaName = 'Elie'
}

sayHi(); // ReferenceError - firstName is not defined. Since we are not using the var keyword, the firstName variable does not get hoisted and JavaScript has no reference to the firstName variable.

console.log(' //7. What does the following code output? Why');
sayHi(); // ?

function sayHi(){
    return 'Hi!';
}

// since function declarations are always hoisted, this will simple return "Hi!"

console.log(' //8. What does the following code output? Why');
sayHallo(); // ?

var sayHallo = function(){
    return 'Hallo!';
}

// TypeError: sayHallo is not a function. Since we are using the var keyword, the declaration of the variable get's hoisted, but not its definition so the code looks like this:

var sayHallo; // the value of sayHallo is undefined

sayHallo();

sayHallo = function(){
    return 'Hallo!';
}    


