var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1.Write the command to add the language "Go" to the end of the languages array.
programming.languages.push('Go');
    console.log('No 1 adding array on value : ' +programming.languages);
console.log('___________________________________________________________')   
//2.Change the difficulty to the value of 7.
programming.difficulty = 7;
   console.log('No 2 replace values on an object : ' +programming.difficulty);
console.log('___________________________________________________________')
//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
  console.log('No 3 remove key & values : ' +programming.jokes); //undefined
console.log('___________________________________________________________')
//4. Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
  console.log('No 4 Add Key & Value : ' +programming.isFun);
console.log('___________________________________________________________')
//5. Using a loop, iterate through the languages array and console.log all of the languages.
for (var i=0; i<programming.languages.length; i++){
   console.log('No 5 Languages Values : ' +programming.languages[i]);
}
console.log('___________________________________________________________')
//6. Using a loop, console.log all of the keys in the programming object.
for (var key in programming) {
  console.log('No 6 Key : ' +key);
}
console.log('___________________________________________________________')
//7. Using a loop, console.log all of the values in the programming object
for (var key in programming){
  console.log('No 7 Value : ' +programming[key]);
}