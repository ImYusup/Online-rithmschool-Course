console.log('--------------Nested Objects---------------')
//1. Write a function called displayCities that console.logs all the values in the citiesLivedIn array:
// "Seattle"
// "Providence"
// "New York"
//2. Write a function called displayHometownData that console.logs all the values inside of the hometown object
// "West Orange"
// "NJ"
//3. Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object
//addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
//addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/
//4. Finally, let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples).
//removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
//('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
//removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/
/*function removeDetail (key){
   //Buat var object 
 var instructorData = {
    name: "Yusup Juniadi",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Dota", "Coding", "Football", "Travelling"],
        moreDetails: {
            favoriteFootballTeam: "PERSIB",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "Bandung",
                state: "Cibangkong",
            },
            citiesLivedIn: ["Bekasi", "Bandung", "Jakarta"],
      }
    }
  };

var cityArray = instructorData.additionalData.moreDetails.citiesLivedIn;
var hometownValues = instructorData.additionalData.moreDetails.hometown;
var addKey = instructorData.additionalData.moreDetails;
var remKey = instructorData.additionalData.moreDetails;
//No 1. citiesLivedIn array
console.log('//1. called displayCities function');
for(var i=0; i< cityArray.length; i++){
      console.log(cityArray[i]);
    }
     //return cityArray //console.log(cityArray);
console.log('//2. called displayHometownData function');
//No 2. hometown called values object
for (var values in hometownValues) {
  console.log(hometownValues[values]);
  }
console.log('//3. called addDetail function');
//No 3. adding moreDetails object
//addKey[key] = value;
//return addKey;
console.log('//4. called removeDetail function');
//No 4. remove moreDetails 
var remKeyVal = remKey[key];
delete remKey[key];
return remKey;
}
//console.log(addDetail("isHilarious", true));
//console.log(addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]));
console.log(removeDetail('citiesLivedIn'));
console.log(removeDetail('hometown'));
console.log(removeDetail('favoriteFootballTeam'));*/

console.log('----------Nested Objects Exercises---------')
//Given the following nested object:
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
      //No 5 Exercises---------
        console.log('what is this?', this)
        this.snacks.push(snack);
        return this;
    }
  }
}
console.log('//1. Using a for loop, console.log all of the numbers in the primeNumbers array');
//1.Using a for loop, console.log all of the numbers in the primeNumbers array.
var primeArr = nestedData.innerData.numberData.primeNumbers;
for (var i=0; i<primeArr.length; i++){
  console.log(primeArr[i]);
}
console.log('//2. Using a for loop, console.log all of the even Fibonnaci numbers');
//2. Using a for loop, console.log all of the even Fibonnaci numbers.
var fibArr = nestedData.innerData.numberData.fibonnaci;
for (var j=0; j<fibArr.length; j++){
  if (fibArr[j] % 2 === 0) {
  console.log(fibArr[j]);
 }
}
console.log('//3. Console.log the value "second" inside the order array')
//3. Console.log the value "second" inside the order array.
var nestedDataArrSec = nestedData.innerData.order;
console.log(nestedDataArrSec[1]);
console.log('//4. Invoke the addSnack function and add the snack "chocolate');
//4. Invoke the addSnack function and add the snack "chocolate"
var nestedDataAddSnack = nestedData.innerData.snacks;
nestedDataAddSnack.push('chocolate');
console.log(nestedDataAddSnack);
console.log('//5. spesial keyword called this <--- see object')
//5.Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

//Given the following nested object: 
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
};
console.log('//6 called addSpeaker function');
//6. Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
function addSpeaker (speakerName) {
  var addNestedSpeak = nestedObject.speakers;
  addNestedSpeak. push({
    name: speakerName,
  });
  return addNestedSpeak;
}
console.log(addSpeaker('Arsyad'));
console.log(addSpeaker('Yusup'));
console.log(addSpeaker('Putri'));

console.log('//7 called addLanguage function');
//7. Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
function addLanguage (key, value) {
  var addNestedLang = nestedObject.data.languages;
  addNestedLang[key] = {
  hello: value
  }
 return addNestedLang;
}
console.log(addLanguage('indonesia', 'Asslamualaikum'))

console.log('//8 called addCountry function');
//8.Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
function addCountry (name, capital, population) {
  var addNestedCou = nestedObject.data.continents.europe.countries;
  addNestedCou[name] = {
    capital: capital,
    population: population
  }
  return addNestedCou;
}
console.log(addCountry('Indonesia', 'Jakarta', 200000000))



