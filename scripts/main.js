// function hello(name) {
//     if (name == null) {
//         console.log("hello world");
//     } else {
//      console.log("hello " + name);
//     }
// }

// hello();

// function madlib(name, subject) {
//     return name + "'s favorite subject is " + subject;
// }

// madlib('tom', 'cs');

// function tipAmount(billAmount,levelOfservice) {
//     if (levelOfservice == 'good') {
//         return (1.2 * billAmount);
//     } else if (levelOfservice == 'fair') {
//         return (1.15 * billAmount);
//     } else {
//         return (1.1 * billAmount);
//     }
// }

// function splitAmount(billAmount, levelOfservice, numPeople) {
//     return (tipAmount(billAmount,levelOfservice)/numPeople);
// }

// console.log(splitAmount(50,'good',2));


// var bigNumber = 123412351234123;

// function theSummarizer(number) {
//     var bigSum = 0;
//     var i;
//     var numLength = number.toString().length;
//     for (i=0;i < numLength;i++) {
//         var currentNumber = (number.toString()[i]);
//         bigSum += parseInt(currentNumber);
//     }
//     return bigSum;
// }

// console.log(theSummarizer(bigNumber));

// // Largest Number
// var exampleArray = [1, 2, 2, 5, 7, 9, 12, 15];
// var holdingValue = 0;
// for (i=0; i<exampleArray.length; i++) {
//     if (holdingValue<exampleArray[i]) {
//         holdingValue = exampleArray[i];
//     }
// }
// console.log(holdingValue);

// Multiply a list 

// Print a square:

// var character = '*';
// var rectHeight = 5;
// var rectWidth = 5;

// function printSquare(character,rectHeight,rectWidth) {
//     for (var i=0; i < rectHeight; i++) {
//         console.log(i + character.repeat(rectWidth));
//     }
// }

// printSquare(character,rectHeight,rectWidth);


// function printBox(character,rectHeight,rectWidth) {
//     for (var i=0; i < rectHeight; i++) {
//         if (i==0 || i==(rectHeight-1)) {
//             console.log(character.repeat(rectWidth));
//         } else {
//             console.log(character + " ".repeat(rectWidth-2) + character);
//         }
//     }
// }

// printBox(character,rectHeight,rectWidth);


// PRINT BANNER

// function printBanner(character,bannerText) {
//     for (var i=0; i < 3; i++) {
//         if (i == 1) {
//             console.log(character + bannerText + character)
//         } else {
//             console.log(character.repeat(bannerText.length +2))
//         }
//     }
// }
// printBanner('*', "Welcome to Digital crafts");


// // FACTORS 
// function factors(number) {
//     var factoids = []
//     for (var i=0;i<=number; i++) {
//         if (number%i == 0) {
//             factoids.push(i);
//         }
//     }
//     console.log(factoids);
// }


// factors(120);

// // CAESAR CIPHER

// var alphabet = "abcdefghijklmnopqrstuvwxyz"
// var message = 'Genius without education is like silver in the mine';
// var offset = 13;
// var codedMessage = [];
// var letterIndex;
// var decodedMessage = [];

// function cipher(offset, message) {
//     message = message.toLowerCase();
//     for (var i=0; i<message.length; i++) {
//         var test = message[i]
//         if (alphabet.includes(message[i])) {
//             letterIndex = alphabet.indexOf(test);
//             var codedLetter = alphabet[((letterIndex+offset)%26)];
//             codedMessage.push(codedLetter);
//         } else {
//             codedMessage.push(' ');
//         }
//     }
//     codedMessage = codedMessage.join("");
// }


// cipher(offset,message);
// console.log(codedMessage);

// function decipher(offset, message) {
//     for (var i=0; i<message.length; i++) {
//         var decipherTest = message[i];
//         if (alphabet.includes(message[i])) {
//             letterIndex = alphabet.indexOf(message[i]);
//             if ((letterIndex-offset)>0) {
//                 var decodedLetter = alphabet[(letterIndex-offset)];
//                 decodedMessage.push(decodedLetter);
//             } else {
//                 decodedLetter = alphabet[((letterIndex-offset)+26)];
//                 decodedMessage.push(decodedLetter);
//             } 
//         } else {
//             decodedMessage.push(' ');
//         }
//     }
//     decodedMessage = decodedMessage.join("");
// }

// decipher(offset, codedMessage);
// console.log(decodedMessage);


// //LEETSPEAK

// leetDictionary = {
//     'A':4,
//     'E':3,
//     'G':6,
//     'I':1,
//     "O":0,
//     "S":5,
//     "T":7
// }

// leetArray = []

// function leetspeak(string) {
//     string = string.toUpperCase();
//     for (var i=0;i<string.length;i++) {
//         if (string[i] in leetDictionary) {
//             leetArray.push(leetDictionary[string[i]]);
//         } else {
//             leetArray.push(string[i]);
//         }
//     }
//     leetArray = leetArray.join('');
// }

// leetspeak('leet');
// console.log(leetArray);

// LONG-LONG-VOWELS

// vowelsDictionary = {
//     'aa': 'aaaa',
//     'ee': 'eeee',
//     'oo': 'oooo',
//     'ii': 'iiii',
//     'uu': 'uuuu'
// }

// enlongatedWord = [];

// function elongation(string) {
//     for (var i=0;i<string.length;i++) {
//         string = string.toLowerCase();
//         var twoLetters = string[i]+string[i-1];
//         if (twoLetters in vowelsDictionary) {
//             enlongatedWord.push(vowelsDictionary[twoLetters])
//         } else {
//             enlongatedWord.push(string[i]);
//         }
//     }
//     enlongatedWord = enlongatedWord.join('');
// }

// elongation('aardvark');
// console.log(enlongatedWord);

// // Matrix multiplication
// var matrix1 = [[2, -2], [5, 3]]
// var matrix2 = [[-1, 4], [7, -6]]
// var result = [[0,0],[0,0]]

// // Multiply code for debugging
// function matrixMultiply(matrix1,matrix2) {
//     for (var i=0; i<matrix1.length;i++) {
//         for (var j=0; j<matrix2[i].length;j++) {
//             for (var k=0; k<matrix2.length;k++) {
//                 console.log(matrix1[i][k])
//                 console.log(matrix2[k][j])
//                 result[i][j] += (matrix1[i][k] * matrix2[k][j])
//                 console.log(result[i][j]);
//             }
//         }
//     }
// }

// Minified matrix multiply code

// function matrixMultiply(matrix1,matrix2) {
//     for (var i=0; i<matrix1.length;i++) {
//         for (var j=0; j<matrix2[i].length;j++) {
//             for (var k=0; k<matrix2.length;k++) {
//                 result[i][j] += (matrix1[i][k] * matrix2[k][j])
//             }
//         }
//     }
// }

// console.log(matrixMultiply(matrix1,matrix2));
// console.log(result);


// // PhoneBook Exercises
// var phonebookDict = {
//   Alice: '703-493-1834',
//   Bob: '857-384-1234',
//   Elizabeth: '484-584-2923'
// }

// var personName = 'Elizabeth';

// function printNumber(name) {
//     console.log(phonebookDict[name]);
// }

// function addEntry(name, number) {
//     phonebookDict[name] = number;
//     return phonebookDict;
// }

// function deleteEntry(name) {
//     delete phonebookDict[name];
//     return phonebookDict;
// }

// function changeNumber(name, number) {
//     phonebookDict[name] = number;
//     return phonebookDict;
// }

// function printEntry(name) {
//     console.log(name + ': ' +phonebookDict[name]);

// }

// function printAll(dictionary) {
//     for (name in dictionary) {
//         console.log(name + ': ' + dictionary[name]);
//     }
// }

// printNumber('Alice');
// addEntry('Kareem', '938-489-1234');
// deleteEntry('Alice');
// changeNumber('Bob', "968-345-2345");
// printEntry(personName);
// printAll(phonebookDict);

// // LETTER HISTOGRAM 

// function letterHistogram(string) {
//     var freq ={}
//     for (var i=0; i<string.length; i++) {
//         var character = string.charAt(i);
//         if (freq[character]) {
//             freq[character]++;
//         } else {
//             freq[character] = 1;
//         }
//     }
// }

// function wordHistogram(string) {
//     var wordArray = string.split(' ');
//     var freq = {};
//     for (var i=0; i<wordArray.length; i++) {
//         var word = wordArray[i];
//         if (freq[word]) {
//             freq[word]++;
//         } else {
//             freq[word] = 1;
//         }
//     }
//     return freq;
// }

// function topTwo(dictionary) {
//     var sortedDict = [];
//     for (var key in dictionary) {
//         sortedDict.push([key, dictionary[key]]);
//     }
//     console.log(sortedDict);
//     sortedDict = sortedDict.sort();
//     return sortedDict.slice(0,1);
// }

// console.log(letterHistogram("hello"));
// console.log(wordHistogram('to be or not to be'));
// console.log(topTwo(letterHistogram('hello')));


// // FUNCTION EXERCISES

// var sample = [1, -2, 3, -4, 5, -6]
// var squares = sample.map(squareNumbers);
// var positives = []
// var negatives = []
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// var colderCities = [];
// var cityNames = [];
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];

// sample.forEach(function (n) {
//     if (n >= 0) {
//         positives.push(n);
//     } return positives;
// });
// // console.log(positives);

// sample.forEach(function (n) {
//     if (n <= 0) {
//         negatives.push(n);
//     } return negatives;
// });
// // console.log(negatives);

// function squareNumbers(n) {
//     return n * n
// }

// // Cities 1
// cities.forEach(function (city) {
//     if (city.temperature <= 70) {
//         colderCities.push(city.name);
//     } return colderCities;
// });
// // console.log(colderCities);

// // Cities 2
// cities.forEach(function(city) {
//     cityNames.push(city.name);
//     return cityNames;
// });
// // console.log(cityNames);

// people.forEach(function(person) {
//     console.log("Good job, " + person + "!");
// })


// function call3Times() {
//   fun();
//   fun();
//   fun();
// }
// // call3Times();

// times = 3;

// function fun(string) {
//     console.log(string);
// };


// function callNtimes(times, fun) {
//     for (var i=0;i<times;i++) {
//         console.log(fun);
//     }
// };

// function fun() {
//     return 'Hello World';
// }

// callNtimes(5, fun());

// function product(array) {
//    return array.reduce(function(product, value) {
//         return product * value;
//     }, 1);
     
// }

// function product(array) {
//    return array.reduce((product, value) => {
//         return product * value;
//     }, 1);
     
// }

// console.log(product([3,4,5]));

// var products = [
//   { name: 'Basketball', price: 12.00 },
//   { name: 'Tennis Racquet', price: 66.00 },
//   { name: 'Tennis Balls', price: 9.00 },
//   { name: 'Tennis Balls', price: 9.00 }
// ];

// var prices = []

// products.forEach(function (element) {
//     prices.push(element['price'])
// });

// console.log(prices);

// function totalPrice(array) {
//     return array.reduce(function(sum, value) {
//         return sum + value;
//     }, 0);
// }

// console.log(totalPrice(prices));

// MY CRAP CODE BELOW
// addedSpaces = []
// function strCombine(strs, sep) {
//     strs.forEach(function (element) {
//         addedSpaces.push(element + sep);
//     })};


// function strJoin(addedSpaces, sep) {
//     return addedSpaces.reduce(function (strs,sep) {
//         return strs + sep;
//     }, );
// };

// strCombine(['hello', 'and', 'goodbye'], " ");

// function strJoin(str, space){
//    return str.reduce(function(string, value) {
//        return string + space + value
//    })
// }
// console.log(strJoin(['Hello', 'and', 'goodbye'], ' '));

// firstLetters = [];
// function acronym(array) {
//     array.forEach(function(element) {
//         firstLetters.push(element[0]);
//     });
//     return strJoin(firstLetters, "").toUpperCase()};


// console.log(acronym(['very', 'important', 'person']));



// function strMultiply(string, times) {
//   var arr = [];
//   for (var i = 0; i < times; i++) {
//     arr.push(string);
//   }
//   return strJoin(arr, "")
// }

// console.log(strMultiply('abc', 5));



// CREATE A BOX 
// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// function boxGenerator(width, height) {
//     var box = ""
//     range(0,height).forEach(function(element) {
//         box += "*".repeat(width)+ "\n";
//     }); 
//     return box ;
// } 


// console.log(boxGenerator(4, 4));

// // SORT AN ARRAY

// var people = ["Deb", "Fiona", "Carl", "Lip", "Ian"];

// function sortArray(array) {
//     return array.sort();
// } 

// console.log(sortArray(people));


// // SORT BY LENGTH

// people.sort(function(a, b){
//         return b.length - a.length;
// });

// console.log(people);

// Sort by value in object

var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

// var prices = [];

// function by(propName) {
//   return function (a, b) {
//     // Another way to write a comparator.
//     return a[propName] > b[propName];
//   }
// }
// console.log(products.sort(by('price')));


// function by(propName) {
//     return function (a, b) {
//         return a[propName] > b[propName];
//     }
// }


// console.log(products.sort(by('price')));


// // products.forEach(function (element) {
// //     prices.push(element['price'])
// // });

// // Just returns the thing
// function plain(thing) {
//   return thing;
// }

// function makePrinter(formatterfn) {
//     return function(str) {
//         console.log(formatterfn(str));
//     }
// }

// function makeRotator(amount, alphabet) {
//     return function (letter) {
//         var rotatedValue = letter;
//         var index = alphabet.indexOf(letter);
//         if (amount < 0) {
//             if (Math.abs(amount) > alphabet.length) {
//                 throw new Error('Too much!');
//             }
//             amount = alphabet.length + amount;
//         }
//         amount = amount % alphabet.length;
//         if (index !== -1) {
//             index = index + amount;
//             if (index >= alphabet.length) {
//                 index = index - alphabet.length;
//             }

//             rotatedValue = alphabet[index];
//         }
//         return rotatedValue;
//     }
// }

// function divvy(text) {
//     text.split('');
// }

// function combine(text) {
//     text.combine('');
// }

// function transform(text, fn) {
//     return combine(divvy(text).map(fn));
// }

// function makeCipher(by) {
//     var alphabet = divvy('abcdefghijklmnopqrstuvwxyz');
//     var rotator = makeRotator(by, alphabet);
//     // return a function that:
//     // accepts a message
//     // returns a rotated version of it
//     return function(message) {
//         return transform(message, rotator);
//     }
// }

// var encipher = makeCipher(13);
// var decipher = makeCipher(-13);

// function main() {
//     var message = "hello from the other side";
//     var encipher = makeCipher(13);
//     var decipher = makeCipher(-13);
//     var plainPrint = makePrinter(plain);
//     var encodedMessage = encipher(message);
//     plainPrint(encodedMessage);

//     var decodedMessage = decipher(encodedMessage);
//     plainPrint(decodedMessage);

//     var caesarPrint = makePrinter(encipher);
//     caesarPrint(message);
// }

// main();







// my attempt

// function makeRotator(amount, alphabet) {
//     return function (letter) {
//         var rotatedValue = letter;
//         var index = alphabet.indexOf(letter);
//         if (amount < 0) {
//             if (Math.abs(amount) > alphabet.length) {
//                 throw new Error('Too much!');
//             }
//             amount = alphabet.length + amount;
//         }
//         amount = amount % alphabet.length;
//         if (index !== -1) {
//             index = index + amount;
//             if (index >= alphabet.length) {
//                 index = index - alphabet.length;
//             }

//             rotatedValue = alphabet[index];
//         }
//         return rotatedValue;
//     }
// }

// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// function makeRotator(string, amount) {
//     return function(letter) {
//         var rotatedValue = letter;
//         var index = alphabet.indexOf(letter);
//         if (amount < 0) {
//             amount = alphabet.length + amount;
//         }
//         amount = amount % alphabet.length;
//         if (index !== -1) {
//             index = index + amount;
//             if (index >= alphabet.length) {
//                 index = index - alphabet.length;
//             }
//             rotatedValue = alphabet[index];
//         }
//         return rotatedValue;
//     }
// }

    
// console.log(makeRotator('hello', 2));


// function positiveNumbers(array) {
//     return function(number) {
//         if (number >= 0) {
//             return Maps.number;
//         }
//     }
// }

// console.log(positiveNumbers([-1,2,3]))


// function positive(numArray) {
//     // helper function takes some number "n" and returns it if its positive
//     return numArray.filter(function (n) {
//         return n > 0;
//     });
// }

// var nums = [-5,-3,1,0,6];

// console.log(positive(nums));

// // checked and it works, now we will write a companion function


// // optimized solution

// function makeFilter(fn) {
//     return function() {
//         return numArray.filter(fn);
//     }
// }
 





// function positives(array) {
//     return array.filter(function (element) {
//         return element > 0;
//     })
// }

// numbaz = [1,-2,-3,-5,-3,6,9];

// console.log(positives(numbaz));


// function negatives(array) {
//     return array.filter(function (element) {
//         return element < 0;
//     })
// }

// console.log(negatives(numbaz));


// function squareTheNumbers(numArray) {
//     return numArray.map(function (n) {
//         return n * n;
//     })
// }

// console.log(squareTheNumbers([1,2,3]));

// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];


// function coolCities(cityArray) {
//     return cityArray.filter(function(city) {
//         return city.temperature < 70;
//     });
// } 

// console.log(coolCities(cities));

// function cityNames(cityArray) {
//     return cityArray.map(function(city) {
//         return city['name'];
//     });
// }

// console.log(cityNames(cities));     

// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];

// function givePraise(pplArray) {
//     return pplArray.map(function(person) {
//         return 'Good job, ' + person + "!";
//     })
// }

// console.log(givePraise(people));


// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }

// function runescape() {
//    console.log("hello world")
// }

// call3Times(runescape);

// function product(array) {
//     return array.map(function (element) {
//         return element * element;
//     })
// }

// console.log(product([3, 4, 5]));

// Total price

// var products = [
//   { name: 'Basketball', price: 12.00 },
//   { name: 'Tennis Racquet', price: 66.00 },
//   { name: 'Tennis Balls', price: 9.00 },
//   { name: 'Tennis Balls', price: 9.00 }
// ];


// function pricesArray(array) {
//     return array.map(function (element) {
//         return element.price;
//     })
// }
// function total(array) {
//     return pricesArray(array).reduce(function (tally, item) {
//         return tally += item;
//     })
// };

// console.log(total(products));


// function strJoin(strs, sep) {
//     return strs.reduce(function (runningTotal, current) {
//         return runningTotal += current + sep 
//     },"")
// }

// console.log(strJoin(["hi", "howya", "durn"], " "));


// function acronym(array) {
//     acronymVariable = array.map(function (element) {
//         return element[0];
//     })
//     return strJoin(acronymVariable, "");
// }

// console.log(acronym(["very", "important", "person"]))

// STR MULTIPLY 
// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// function strMultiply(str, times) {
//     var numArray = range(0,times);
//     return strJoin(numArray.map(function (element) {
//         return str;
//     }),"");
// }

// console.log(strMultiply('abc', 5));

// Box Generator 

function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function box(width, height) {
    var numArray = range(0, height);
    return numArray.map(function (element) {
        return "*".repeat(width)+"\n";
    })
}

console.log(box(15,15));
