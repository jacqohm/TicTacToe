// HomeWork Day 4 --
// Long Questions
//
// Long1

var words = ['hello', 'what', 'is', 'up', 'dude']
lengths(words)

function lengths (arrOfStrings) {
//  you need a loop to iterate the array
//  using the loop find the length of each word
//  console log? An array of lengths
//  create temp array

  var wordsArr = [];

  for (var i = 0; i < arrOfStrings.length; i++) {
    console.log (arrOfStrings[1].length);

//  iterate the array given into the function
    wordsArr.push(arrOfStrings[1].length);
}
//  console.log(wordsArr);
//  shouldn't return "console.log"
//  questions specify for "return"
  return wordsArr;
}

console.log(lengths(words));

// Long 2

function transmogrifier(num1,num2,num3){
  var result = Math.pow((num1 * num2), num3);
  console.log(result);
}

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

// Long 3

function wordReverse(x) {
    var splitString = x.split(" ");
      var reverse = splitString.reverse();
        var joinArray = reverse.join(" ");
    return joinArray;
}
wordReverse("Now I know what a TV dinner feels like ");

//  Short Questions
//  Short 1

function maxOfTwoNumbers(x,y) {
  if (x > y) {
    return x;
  }
  else if (x < y) {
    return y;
  }
}

console.log(maxOfTwoNumbers(1,2));

//  Short 2

function maxOfThree(x,y,z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}
console.log(maxOfThree(1,2,3));

//  Short 3

function isCharacterAVowel(vow) {
	if (vow == "a" || vow == "e" || vow ==
		"i" || vow == "o" || vow == "u") {
		return true;
	}
	else {
		return false;
	}
}
console.log(isCharacterAVowel("a"));

//  Short 4

var sumArray = function(a,b,c,d) {
  return a+b+c+d;
};

console.log(sumArray(1,2,3,4));

var multiplyArray = function(a,b,c,d) {
  return a*b*c*d;
};

console.log(multiplyArray(1,2,3,4));

// Short 5

function numberOfArguments() {
    return arguments.length;
}

console.log(numberOfArguments("apple"));
console.log(numberOfArguments("apple","banana"));

// Short 6

function reverseString(x) {
    var splitString = x.split("");
      var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
    return joinArray;
}
reverseString("hello");

// Short 7

function findLongestWord(x) {
  var strSplit = x.split(' ');
    var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
findLongestWord("Hello How are you");

// Short 8

var x = ["apple","banana","carrot", "dumpling"];
var y = [];

function filterLongWords(words, length) {
  for (var i = 0; i < words.length; i++) {
  	if (words[i].length > length) {
  		y.push(words[i]);
  	}
  }	return y;
}

console.log(filterLongWords(x, 7));

//==== Notes ====//
// function isCharacterAVowel(str) {
// returns true if it is a vowel and false, otherwise.
// var isVowel = false;

// //check if it is a vowel??
// //create vowels array to loop through to test!
// var vowels = [ 'a', 'e', 'i', 'o', 'u'];
// for( var i = 0; i < vowels.length; i++) {
//   console.log( vowels[i] );

//   if( vowels[i] === str ) {
//     isVowel = true;
//   } else {
//     isVowel = false;
//   }
// }
// return isVowel;
// }
//
// isCharacterAVowel('s');
//
// var words = ["hello", "what", "is", "up", "dude", "heyoooow"];
//
// lengths(words);
//
// function lengths(wordsStr) {
// // 0. create temp var to hold the array of lengths
// var wordsArr = [];

// 1. iterate the array given into the function
// for(var i = 0; i < wordsStr.length; i++) {
// 2. within the loop, find the lengths of each one
//
//   // 3. return an array of lengths
//   wordsArr.push( wordsStr[i].length );
// }
//
// return wordsArr;
// }
//
// // console.log( lengths(words) );
//
// // write a function isCharacterAVowel
// // takes in a string of length = 1
//
// function isCharacterAVowel(str) {
// // returns true if it is a vowel
// // returns false if it is otherwise...
// console.log( typeof str );
//
// return /^[aeiou]$/i.test(str);
// //   var found = str.match(re);
//
// //   if( found ) {
// //     isVowel = true;
// //   } else {
// //     isVowel = false;
// //   }
//
// // return isVowel;
//
// // console.log();
// // create an array of vowels
// //   var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
//
// //   // loop through the array
// //   for(var i = 0; i < vowels.length; i++) {
// //     console.log( "vowels is: " + vowels[i] );
// //     console.log( "given str is: " + str );
//
// //     // compare vowels[i] === given string
// //     if( vowels[i] === str ) {
// //       isVowel = true;
// //     }
// //   }
// // return isVowel;
// }
// console.log( isCharacterAVowel( 32 ) );
