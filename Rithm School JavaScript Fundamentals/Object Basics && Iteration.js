var obj = {
  firstName : 'Yusup',
  lastName : 'Juniadi',
  occupation : 'Jobless'
  
};
//1. Create an object that has your firstName, lastName, and occupation as keys
for (var key in obj){
  console.log('No 1 create key : '  +key);
}
console.log('________________________________________________________________');
//2. Access each value from your object using both dot notation and bracket notation.
/*obj.firstName; //Dot notation
obj['lastName']; //Bracket notation
obj['occupation']; //Bracket notation*/
console.log('No 2 access value : '  +obj.firstName);
console.log('No 2 access value : '  +obj.lastName);
console.log('No 2 access value : '  +obj.occupation);
console.log('________________________________________________________');
//3. Add a key for hobby to your object. Remove the key and value for occupation.
obj.hobby = 'Tidur'; //Adding hobby on object
delete obj.occupation;
for (var key in obj){
 console.log('No 3 add & remove object : '  +key);
}
console.log('________________________________________________________________');
console.log('Model Exercises!!!!');

var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
};
//1. Given the following object below, write code to print the value then the key to the console separated by '=>':
for (var value in namesAndHobbies) {
  console.log('No 1 value in object : ' +namesAndHobbies[value]+ ' => ' +value);
}
console.log('________________________________________________________');
//2. Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.
namesAndHobbies.yusup = 'Tidur';
for (var key in namesAndHobbies) {
  console.log('No 2 add key & value on object : ' +key+ ' => ' +namesAndHobbies[key]);
}
console.log('________________________________________________________');
//3. Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.
if ('Yusup'.toLowerCase() in namesAndHobbies) {
  console.log('This name is already exist!!');
}
else {
  console.log('your name is not exist!!')
}

