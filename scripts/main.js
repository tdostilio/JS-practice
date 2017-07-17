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


function positive(numArray) {
    // helper function takes some number "n" and returns it if its positive
    return numArray.filter(function (n) {
        return n > 0;
    });
}

var nums = [-5,-3,1,0,6];

console.log(positive(nums));

// checked and it works, now we will write a companion function


// optimized solution

function makeFilter(fn) {
    return function() {
        return numArray.filter(fn);
    }
}
 





function positives(array) {
    return array.filter(function (element) {
        return element > 0;
    })
}

numbaz = [1,-2,-3,-5,-3,6,9];

console.log(positives(numbaz));


function negatives(array) {
    return array.filter(function (element) {
        return element < 0;
    })
}

console.log(negatives(numbaz));


function squareTheNumbers(numArray) {
    return numArray.map(function (n) {
        return n * n;
    })
}

console.log(squareTheNumbers([1,2,3]));

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];




var stocks = {
        "2017-07-14 14:21:00": {
            "1. open": "72.2400",
            "2. high": "73.0600",
            "3. low": "71.9600",
            "4. close": "73.0500",
            "5. volume": "12642985"
        },
        "2017-07-13": {
            "1. open": "71.5000",
            "2. high": "72.0399",
            "3. low": "71.3100",
            "4. close": "71.7700",
            "5. volume": "20149208"
        },
        "2017-07-12": {
            "1. open": "70.6900",
            "2. high": "71.2800",
            "3. low": "70.5500",
            "4. close": "71.1500",
            "5. volume": "17747461"
        },
        "2017-07-11": {
            "1. open": "70.0000",
            "2. high": "70.6800",
            "3. low": "69.7500",
            "4. close": "69.9900",
            "5. volume": "16880205"
        },
        "2017-07-10": {
            "1. open": "69.4600",
            "2. high": "70.2500",
            "3. low": "69.2000",
            "4. close": "69.9800",
            "5. volume": "14903400"
        },
        "2017-07-07": {
            "1. open": "68.7000",
            "2. high": "69.8400",
            "3. low": "68.7000",
            "4. close": "69.4600",
            "5. volume": "15897154"
        },
        "2017-07-06": {
            "1. open": "68.2700",
            "2. high": "68.7800",
            "3. low": "68.1200",
            "4. close": "68.5700",
            "5. volume": "20909161"
        },
        "2017-07-05": {
            "1. open": "68.2550",
            "2. high": "69.4400",
            "3. low": "68.2200",
            "4. close": "69.0800",
            "5. volume": "21176272"
        },
        "2017-07-03": {
            "1. open": "69.3300",
            "2. high": "69.6000",
            "3. low": "68.0200",
            "4. close": "68.1700",
            "5. volume": "16164331"
        },
        "2017-06-30": {
            "1. open": "68.7800",
            "2. high": "69.3800",
            "3. low": "68.7400",
            "4. close": "68.9300",
            "5. volume": "23039328"
        },
        "2017-06-29": {
            "1. open": "69.3800",
            "2. high": "69.4900",
            "3. low": "68.0900",
            "4. close": "68.4900",
            "5. volume": "28231562"
        },
        "2017-06-28": {
            "1. open": "69.2100",
            "2. high": "69.8410",
            "3. low": "68.7900",
            "4. close": "69.8000",
            "5. volume": "25226070"
        },
        "2017-06-27": {
            "1. open": "70.1100",
            "2. high": "70.1800",
            "3. low": "69.1800",
            "4. close": "69.2100",
            "5. volume": "24862560"
        },
        "2017-06-26": {
            "1. open": "71.4000",
            "2. high": "71.7100",
            "3. low": "70.4400",
            "4. close": "70.5300",
            "5. volume": "19308122"
        },
        "2017-06-23": {
            "1. open": "70.0900",
            "2. high": "71.2500",
            "3. low": "69.9200",
            "4. close": "71.2100",
            "5. volume": "23176418"
        },
        "2017-06-22": {
            "1. open": "70.5400",
            "2. high": "70.5900",
            "3. low": "69.7100",
            "4. close": "70.2600",
            "5. volume": "22222851"
        },
        "2017-06-21": {
            "1. open": "70.2100",
            "2. high": "70.6200",
            "3. low": "69.9400",
            "4. close": "70.2700",
            "5. volume": "19190623"
        },
        "2017-06-20": {
            "1. open": "70.8200",
            "2. high": "70.8700",
            "3. low": "69.8700",
            "4. close": "69.9100",
            "5. volume": "20775590"
        },
        "2017-06-19": {
            "1. open": "70.5000",
            "2. high": "70.9400",
            "3. low": "70.3500",
            "4. close": "70.8700",
            "5. volume": "23146852"
        },
        "2017-06-16": {
            "1. open": "69.7300",
            "2. high": "70.0300",
            "3. low": "69.2200",
            "4. close": "70.0000",
            "5. volume": "46911637"
        },
        "2017-06-15": {
            "1. open": "69.2700",
            "2. high": "70.2100",
            "3. low": "68.8000",
            "4. close": "69.9000",
            "5. volume": "25701569"
        },
        "2017-06-14": {
            "1. open": "70.9100",
            "2. high": "71.1000",
            "3. low": "69.4300",
            "4. close": "70.2700",
            "5. volume": "25271276"
        },
        "2017-06-13": {
            "1. open": "70.0200",
            "2. high": "70.8200",
            "3. low": "69.9600",
            "4. close": "70.6500",
            "5. volume": "24815455"
        },
        "2017-06-12": {
            "1. open": "69.2500",
            "2. high": "69.9400",
            "3. low": "68.1300",
            "4. close": "69.7800",
            "5. volume": "47363986"
        },
        "2017-06-09": {
            "1. open": "72.0350",
            "2. high": "72.0800",
            "3. low": "68.5900",
            "4. close": "70.3200",
            "5. volume": "48619420"
        },
        "2017-06-08": {
            "1. open": "72.5100",
            "2. high": "72.5200",
            "3. low": "71.5000",
            "4. close": "71.9500",
            "5. volume": "23982410"
        },
        "2017-06-07": {
            "1. open": "72.6350",
            "2. high": "72.7700",
            "3. low": "71.9500",
            "4. close": "72.3900",
            "5. volume": "21895156"
        },
        "2017-06-06": {
            "1. open": "72.3000",
            "2. high": "72.6200",
            "3. low": "72.2700",
            "4. close": "72.5200",
            "5. volume": "31220057"
        },
        "2017-06-05": {
            "1. open": "71.9700",
            "2. high": "72.8900",
            "3. low": "71.8100",
            "4. close": "72.2800",
            "5. volume": "29507429"
        },
        "2017-06-02": {
            "1. open": "70.4400",
            "2. high": "71.8600",
            "3. low": "70.2400",
            "4. close": "71.7600",
            "5. volume": "34586054"
        },
        "2017-06-01": {
            "1. open": "70.2400",
            "2. high": "70.6100",
            "3. low": "69.4510",
            "4. close": "70.1000",
            "5. volume": "21066468"
        },
        "2017-05-31": {
            "1. open": "70.5300",
            "2. high": "70.7400",
            "3. low": "69.8100",
            "4. close": "69.8400",
            "5. volume": "29538356"
        },
        "2017-05-30": {
            "1. open": "69.7900",
            "2. high": "70.4100",
            "3. low": "69.7700",
            "4. close": "70.4100",
            "5. volume": "16901792"
        },
        "2017-05-26": {
            "1. open": "69.8000",
            "2. high": "70.2200",
            "3. low": "69.5200",
            "4. close": "69.9600",
            "5. volume": "19644260"
        },
        "2017-05-25": {
            "1. open": "68.9700",
            "2. high": "69.8800",
            "3. low": "68.9100",
            "4. close": "69.6200",
            "5. volume": "21702912"
        },
        "2017-05-24": {
            "1. open": "68.8700",
            "2. high": "68.8800",
            "3. low": "68.4500",
            "4. close": "68.7700",
            "5. volume": "14422965"
        },
        "2017-05-23": {
            "1. open": "68.7200",
            "2. high": "68.7500",
            "3. low": "68.3800",
            "4. close": "68.6800",
            "5. volume": "15347877"
        },
        "2017-05-22": {
            "1. open": "67.8900",
            "2. high": "68.5000",
            "3. low": "67.5000",
            "4. close": "68.4500",
            "5. volume": "15484530"
        },
        "2017-05-19": {
            "1. open": "67.5000",
            "2. high": "68.0950",
            "3. low": "67.4300",
            "4. close": "67.6900",
            "5. volume": "26496478"
        },
        "2017-05-18": {
            "1. open": "67.4000",
            "2. high": "68.1300",
            "3. low": "67.1400",
            "4. close": "67.7100",
            "5. volume": "24789790"
        },
        "2017-05-17": {
            "1. open": "68.8900",
            "2. high": "69.1000",
            "3. low": "67.4300",
            "4. close": "67.4800",
            "5. volume": "29964198"
        },
        "2017-05-16": {
            "1. open": "68.2300",
            "2. high": "69.4400",
            "3. low": "68.1600",
            "4. close": "69.4100",
            "5. volume": "33250702"
        },
        "2017-05-15": {
            "1. open": "68.1400",
            "2. high": "68.4800",
            "3. low": "67.5700",
            "4. close": "68.4300",
            "5. volume": "30705323"
        },
        "2017-05-12": {
            "1. open": "68.6100",
            "2. high": "68.6100",
            "3. low": "68.0400",
            "4. close": "68.3800",
            "5. volume": "17073013"
        },
        "2017-05-11": {
            "1. open": "68.3600",
            "2. high": "68.7300",
            "3. low": "68.1200",
            "4. close": "68.4600",
            "5. volume": "27985424"
        },
        "2017-05-10": {
            "1. open": "68.9900",
            "2. high": "69.5600",
            "3. low": "68.9200",
            "4. close": "69.3100",
            "5. volume": "17842038"
        },
        "2017-05-09": {
            "1. open": "68.8600",
            "2. high": "69.2800",
            "3. low": "68.6800",
            "4. close": "69.0400",
            "5. volume": "22318181"
        },
        "2017-05-08": {
            "1. open": "68.9700",
            "2. high": "69.0500",
            "3. low": "68.4200",
            "4. close": "68.9400",
            "5. volume": "18446053"
        },
        "2017-05-05": {
            "1. open": "68.9000",
            "2. high": "69.0300",
            "3. low": "68.4850",
            "4. close": "69.0000",
            "5. volume": "18882845"
        },
        "2017-05-04": {
            "1. open": "69.0300",
            "2. high": "69.0800",
            "3. low": "68.6400",
            "4. close": "68.8100",
            "5. volume": "21421413"
        },
        "2017-05-03": {
            "1. open": "69.3800",
            "2. high": "69.3800",
            "3. low": "68.7100",
            "4. close": "69.0800",
            "5. volume": "28725646"
        },
        "2017-05-02": {
            "1. open": "69.7100",
            "2. high": "69.7100",
            "3. low": "69.1300",
            "4. close": "69.3000",
            "5. volume": "23000828"
        },
        "2017-05-01": {
            "1. open": "68.6800",
            "2. high": "69.5500",
            "3. low": "68.5000",
            "4. close": "69.4100",
            "5. volume": "31304672"
        },
        "2017-04-28": {
            "1. open": "68.9100",
            "2. high": "69.1400",
            "3. low": "67.6900",
            "4. close": "68.4600",
            "5. volume": "38940853"
        },
        "2017-04-27": {
            "1. open": "68.1500",
            "2. high": "68.3800",
            "3. low": "67.5800",
            "4. close": "68.2700",
            "5. volume": "32219234"
        },
        "2017-04-26": {
            "1. open": "68.0800",
            "2. high": "68.3100",
            "3. low": "67.6200",
            "4. close": "67.8300",
            "5. volume": "25544417"
        },
        "2017-04-25": {
            "1. open": "67.9000",
            "2. high": "68.0400",
            "3. low": "67.6000",
            "4. close": "67.9200",
            "5. volume": "29983174"
        },
        "2017-04-24": {
            "1. open": "67.4800",
            "2. high": "67.6600",
            "3. low": "67.1000",
            "4. close": "67.5300",
            "5. volume": "29721254"
        },
        "2017-04-21": {
            "1. open": "65.6700",
            "2. high": "66.7000",
            "3. low": "65.4500",
            "4. close": "66.4000",
            "5. volume": "32522645"
        },
        "2017-04-20": {
            "1. open": "65.4600",
            "2. high": "65.7500",
            "3. low": "65.1400",
            "4. close": "65.5000",
            "5. volume": "22299477"
        },
        "2017-04-19": {
            "1. open": "65.6500",
            "2. high": "65.7500",
            "3. low": "64.8900",
            "4. close": "65.0400",
            "5. volume": "26992771"
        },
        "2017-04-18": {
            "1. open": "65.3300",
            "2. high": "65.7100",
            "3. low": "65.1600",
            "4. close": "65.3900",
            "5. volume": "15155611"
        },
        "2017-04-17": {
            "1. open": "65.0400",
            "2. high": "65.4900",
            "3. low": "65.0100",
            "4. close": "65.4800",
            "5. volume": "16689265"
        },
        "2017-04-13": {
            "1. open": "65.2900",
            "2. high": "65.8600",
            "3. low": "64.9500",
            "4. close": "64.9500",
            "5. volume": "17896483"
        },
        "2017-04-12": {
            "1. open": "65.4200",
            "2. high": "65.5100",
            "3. low": "65.1100",
            "4. close": "65.2300",
            "5. volume": "17108513"
        },
        "2017-04-11": {
            "1. open": "65.6000",
            "2. high": "65.6100",
            "3. low": "64.8500",
            "4. close": "65.4800",
            "5. volume": "18791533"
        },
        "2017-04-10": {
            "1. open": "65.6100",
            "2. high": "65.8200",
            "3. low": "65.3600",
            "4. close": "65.5300",
            "5. volume": "17952742"
        },
        "2017-04-07": {
            "1. open": "65.8500",
            "2. high": "65.9600",
            "3. low": "65.4400",
            "4. close": "65.6800",
            "5. volume": "14089274"
        },
        "2017-04-06": {
            "1. open": "65.6000",
            "2. high": "66.0550",
            "3. low": "65.4800",
            "4. close": "65.7300",
            "5. volume": "18103453"
        },
        "2017-04-05": {
            "1. open": "66.3000",
            "2. high": "66.3500",
            "3. low": "65.4443",
            "4. close": "65.5600",
            "5. volume": "21448594"
        },
        "2017-04-04": {
            "1. open": "65.3900",
            "2. high": "65.8100",
            "3. low": "65.2800",
            "4. close": "65.7300",
            "5. volume": "12997449"
        },
        "2017-04-03": {
            "1. open": "65.8100",
            "2. high": "65.9400",
            "3. low": "65.1900",
            "4. close": "65.5500",
            "5. volume": "20400871"
        },
        "2017-03-31": {
            "1. open": "65.6500",
            "2. high": "66.1900",
            "3. low": "65.4500",
            "4. close": "65.8600",
            "5. volume": "21040331"
        },
        "2017-03-30": {
            "1. open": "65.4200",
            "2. high": "65.9800",
            "3. low": "65.3600",
            "4. close": "65.7100",
            "5. volume": "15122823"
        },
        "2017-03-29": {
            "1. open": "65.1200",
            "2. high": "65.5000",
            "3. low": "64.9500",
            "4. close": "65.4700",
            "5. volume": "13618424"
        },
        "2017-03-28": {
            "1. open": "64.9600",
            "2. high": "65.4700",
            "3. low": "64.6500",
            "4. close": "65.2900",
            "5. volume": "20080358"
        },
        "2017-03-27": {
            "1. open": "64.6300",
            "2. high": "65.2200",
            "3. low": "64.3500",
            "4. close": "65.1000",
            "5. volume": "18614662"
        },
        "2017-03-24": {
            "1. open": "65.3600",
            "2. high": "65.4500",
            "3. low": "64.7600",
            "4. close": "64.9800",
            "5. volume": "22617105"
        },
        "2017-03-23": {
            "1. open": "64.9400",
            "2. high": "65.2400",
            "3. low": "64.7700",
            "4. close": "64.8700",
            "5. volume": "19269203"
        },
        "2017-03-22": {
            "1. open": "64.1200",
            "2. high": "65.1400",
            "3. low": "64.1200",
            "4. close": "65.0300",
            "5. volume": "20680015"
        },
        "2017-03-21": {
            "1. open": "65.1900",
            "2. high": "65.5000",
            "3. low": "64.1300",
            "4. close": "64.2100",
            "5. volume": "26640480"
        },
        "2017-03-20": {
            "1. open": "64.9100",
            "2. high": "65.1800",
            "3. low": "64.7200",
            "4. close": "64.9300",
            "5. volume": "14598083"
        },
        "2017-03-17": {
            "1. open": "64.9100",
            "2. high": "65.2400",
            "3. low": "64.6800",
            "4. close": "64.8700",
            "5. volume": "49219686"
        },
        "2017-03-16": {
            "1. open": "64.7500",
            "2. high": "64.7600",
            "3. low": "64.3000",
            "4. close": "64.6400",
            "5. volume": "20674296"
        },
        "2017-03-15": {
            "1. open": "64.5500",
            "2. high": "64.9200",
            "3. low": "64.2500",
            "4. close": "64.7500",
            "5. volume": "24833810"
        },
        "2017-03-14": {
            "1. open": "64.5300",
            "2. high": "64.5500",
            "3. low": "64.1500",
            "4. close": "64.4100",
            "5. volume": "14280202"
        },
        "2017-03-13": {
            "1. open": "65.0100",
            "2. high": "65.1900",
            "3. low": "64.5700",
            "4. close": "64.7100",
            "5. volume": "20100035"
        },
        "2017-03-10": {
            "1. open": "65.1100",
            "2. high": "65.2600",
            "3. low": "64.7500",
            "4. close": "64.9300",
            "5. volume": "19538245"
        },
        "2017-03-09": {
            "1. open": "65.1900",
            "2. high": "65.2000",
            "3. low": "64.4800",
            "4. close": "64.7300",
            "5. volume": "19846832"
        },
        "2017-03-08": {
            "1. open": "64.2600",
            "2. high": "65.0800",
            "3. low": "64.2500",
            "4. close": "64.9900",
            "5. volume": "21510907"
        },
        "2017-03-07": {
            "1. open": "64.1900",
            "2. high": "64.7800",
            "3. low": "64.1900",
            "4. close": "64.4000",
            "5. volume": "18520987"
        },
        "2017-03-06": {
            "1. open": "63.9700",
            "2. high": "64.5600",
            "3. low": "63.8100",
            "4. close": "64.2700",
            "5. volume": "18750255"
        },
        "2017-03-03": {
            "1. open": "63.9900",
            "2. high": "64.2800",
            "3. low": "63.6200",
            "4. close": "64.2500",
            "5. volume": "18139405"
        },
        "2017-03-02": {
            "1. open": "64.6900",
            "2. high": "64.7500",
            "3. low": "63.8800",
            "4. close": "64.0100",
            "5. volume": "24539597"
        },
        "2017-03-01": {
            "1. open": "64.1300",
            "2. high": "64.9900",
            "3. low": "64.0200",
            "4. close": "64.9400",
            "5. volume": "26937459"
        },
        "2017-02-28": {
            "1. open": "64.0800",
            "2. high": "64.2000",
            "3. low": "63.7600",
            "4. close": "63.9800",
            "5. volume": "23239825"
        },
        "2017-02-27": {
            "1. open": "64.5400",
            "2. high": "64.5400",
            "3. low": "64.0500",
            "4. close": "64.2300",
            "5. volume": "15871507"
        },
        "2017-02-24": {
            "1. open": "64.5300",
            "2. high": "64.8000",
            "3. low": "64.1400",
            "4. close": "64.6200",
            "5. volume": "21796800"
        },
        "2017-02-23": {
            "1. open": "64.4200",
            "2. high": "64.7300",
            "3. low": "64.1900",
            "4. close": "64.6200",
            "5. volume": "20273128"
        },
        "2017-02-22": {
            "1. open": "64.3300",
            "2. high": "64.3900",
            "3. low": "64.0500",
            "4. close": "64.3600",
            "5. volume": "19292651"
        }
    }



var days = Object.keys(stocks);

var datesArray = [];


function createDatesArray(obj) {
    for (object in obj) {
        datesArray.push(object);
    }
    return datesArray;
}


console.log(createDatesArray(stocks));