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