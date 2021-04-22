console.log("CHE - ck");

// variables

var x = 6; // (scope) ? global
let y = 10; // (scope) ? local

const string = "a string ! "; /// constant - shouldn't change

let sum = x + y;
let diff = y - x;
let fid = x - y;

var camelCase, PascalCase, snake_case;

console.log(sum + " , and a " + diff + " - " + fid);
console.log(string);
console.log(string + " string");
console.log(string + string);

y = 15;

console.log(sum);
sum = x + y;
console.log("new " + sum);

/////////// numbers

var num1 = 10;
var num2 = 11.74;
var num3 = 5;

console.log(typeof num2);

let mul = num1 * num2;
console.log(mul);

let div = num2 / num1;
console.log(div);

var divByZero = num3 / 0;
console.log(divByZero);
console.log(typeof divByZero);

var zeroByDiv = 0 / num3;
console.log(zeroByDiv);
console.log(typeof zeroByDiv);

let numString = 5 + " five";

console.log(typeof numString);
console.log(numString);
////////////

// toString()    ->  int to string
// parseInt()   -> string to int (rounded)
// parseFloat() -> string to float (not as rounded)
// toFixed()   ->  rounds float to given position
//   toFixed(#)  ... # = places past decimal to round to - 0 by default.

///  stringy strings

var dqs1 = 'This is a "javascript" string';
var dqs2 = 'This is a "javascript" string';
var sqs1 = "This is a 'javascript' string";
var sqs2 = "This is a 'javascript' string";
var simp = "Here, is a simple string";

console.log(dqs1);
console.log(dqs2);
console.log(sqs1);
console.log(sqs2);
console.log(simp);

console.log(simp.slice(0, 7));
console.log(simp.slice(-6));
console.log(simp.slice(4, 17)); // start index , stop index inclusive
console.log(simp.length);
console.log(simp.indexOf("simple"));
console.log(simp.indexOf("This"));
console.log(simp.lastIndexOf("s"));
console.log(simp.lastIndexOf("g"));

console.log(simp.substr(5, 12)); // start index , number of spaces to go

/// .toUppercase() .toLowerCase() .trim() .concat()

/// .charAt(#)   = whats at index # ?

/// .split()   -> string to array

console.log(simp.split(" "));
console.log(simp.split(","));
console.log(simp.split(""));
console.log(simp.split());

var myVar;
console.log(myVar); // undefined
console.log(typeof myVar); // undefined

var nulVar = null;
console.log(nulVar); // null
console.log(typeof nulVar); // object

console.log(myVar + 1); // NaN
console.log(nulVar + 1); // 1

console.log(undefined == null); // true
console.log(undefined === null); // false

// Q1. Take the values given below of length and breadth of a rectangle and check if it is
// square or not. Change values and see if your code works or not.
var length = 200;
var breadth = 200;

function checkSquare(x, y) {
  answer = "";
  if (x === y) {
    answer = "Yep it's square";
  } else {
    answer = "not square there";
  }
  console.log(answer);
}

let a = 10;
let b = 10;
let c = 200;
let d = 100;
let e = 1000;

checkSquare(length, breadth); // true
checkSquare(a, c); // false
checkSquare(b, a); // true
checkSquare(d, e); // false

// Q2. Write some code to check which number is greatest. Change values and see if your
// code works or not.
var num1 = 51,
  num2 = 81,
  num3 = 20;

function whichIsGreater(a, b, c) {
  let max = 0;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= a && b >= c) {
    max = b;
  } else {
    max = c;
  }
  console.log("the biggest is " + max);
  return max;
}

whichIsGreater(num1, num2, num3);

let aa = 288,
  bb = 30,
  cc = 66;

whichIsGreater(aa, bb, cc);

function daysInTheMonth(x) {
  switch (x) {
    case 1:
      console.log("Month = January");
      console.log(" days = 31 ");
      break;
    case 2:
      console.log("Month = Feb");
      console.log(" days = 28 or 29 ");
      break;
    case 3:
      console.log("Month = March");
      console.log(" days = 31 ");
      break;
    case 4:
      console.log("Month = April");
      console.log(" days = 30 ");
      break;
    case 5:
      console.log("Month = May");
      console.log(" days = 31 ");
      break;
    case 6:
      console.log("Month = June");
      console.log(" days = 30 ");
      break;
    case 7:
      console.log("Month = July");
      console.log(" days = 31 ");
      break;
    case 8:
      console.log("Month = August");
      console.log(" days = 31 ");
      break;
    case 9:
      console.log("Month = Sept");
      console.log(" days = 30 ");
      break;
    case 10:
      console.log("Month = Oct");
      console.log(" days = 31 ");
      break;
    case 11:
      console.log("Month = Nov");
      console.log(" days = 30 ");
      break;
    case 12:
      console.log("Month = Dec");
      console.log(" days = 31 ");
      break;
    default:
      console.log("Month = ?? enter a number 1-12");
      console.log(" days = 28 - 31  ");
      break;
  }
}

daysInTheMonth(5);
daysInTheMonth(4);
daysInTheMonth(2);
daysInTheMonth(25);

///  Write a program to check vowel or consonant using switch case. Change the value
// of enteredAlphabet and check if your code works fine.

function enteredAlphabet(str) {
  let vowels = "AEIOUU";
  let isIt = vowels.indexOf(str.toUpperCase());

  switch (isIt) {
    case 0:
      console.log("A is a vowel");
      break;
    case 1:
      console.log("E is a vowel");
      break;
    case 2:
      console.log("I is a vowel");
      break;
    case 3:
      console.log("O is a vowel");
      break;
    case 4:
      console.log("U is a vowel");
      break;
    case 5:
      console.log("that is not a vowel");
      break;
    case -1:
      console.log(str + " is a consonant");
      break;
    default:
      console.log(str + " is not a vowel");
      break;
  }
}

enteredAlphabet("a"); enteredAlphabet("E"); enteredAlphabet("h"); enteredAlphabet("hello"); enteredAlphabet("eye");


////

var num1 = 1 + 5;
var num2 = num1 / 4;
var num3 = 1 + 5;
var num4 = num3 / 4;
console.log(num2 + " " + num4); /// should print "6/4 (space) 6/4"  ... 1.5 1.5

var aaaa = 1;
var bbbb = 2;
var cccc;
var dddd;
cccc = ++bbbb;   /// cccc = 3   & bbbb = 3
dddd = aaaa++;   /// dddd = 1 ... aaaa =  2 next time
cccc++;       /// cccc = 4 next time 
bbbb++;       /// bbbb = 4 next time
++aaaa;       /// aaaa = 3 next time
console.log(aaaa + " " + bbbb + " " + cccc);  /// 3    4   4


var input = 7;
var output1 = ++input + ++input + ++input; //// 8 + 9 + 10  .... 27
////          add 1 before counting x 3

var output2 = input++ + input++ + input++;  ////  10 + 11 + 12 .....  33
////           add 1 after counting x 3

var output3 = input++ + ++input + input++;  //// 13 + 15 + 16 .... 44
//// add 1 after count, add 1 before count, add 1 after count again ...

console.log(output1 + " " + output2 + " " + output3);
////          27                33               44



// Q1. With x = 0, which of the following statements will produce a value of 1?
// a) x++;
// b) x = x + 1;
// c) x += 1;
console.log("TESTING OPERATORS BELOW")
x = 0;
console.log(x);
x++;
console.log(x);
x = 0;
console.log(x);
x=x+1;
console.log(x);
x = 0;
console.log(x);
x+=1;
console.log(x);


var num = 100;
num += (5 * 10) / 2;   /// 100 ... + 5 x 10 ... /2
console.log(num);      //// 100 + 50 / 2
                       //// 100 + 25 ...
                       /// 125





////////
var a123 = 10;
var b123 = 5;
var c123 = 12;
var e123 = 8;
var d123;
d123 = parseInt(
  (a123 * (c123 - b123)) / e123 + (b123 + c123) <=
    (e123 * (c123 + a123)) / (b123 + c123) + a123
);
console.log(d123);    //// d = naN
if (d123 == 1) {
  console.log((a123 * (c123 - b123)) / e123 + (b123 + c123));
} else {
  console.log((e123 * (c123 + a123)) / (b123 + c123) + a123);
}

/////  console log d parse int 
/// 10 * (12 - 5)  /  8  +  (5 + 12)
/// 10 x 7 / 8 + 17
/// 70 / 25
/// 2.8
/////////////// or //////
/// 8 * (12 + 10) / (5 + 12) + 10
/// 8 x 22 / 17 + 10
/// 176 / 27
/// 6.5185185185.......

// so d is  true ?


var n = 2;
var p = 4;
var q = 5;
var w = 3;
if (!((p * q) / n <= q * w + n / p)) {
  console.log(++p + w++ + " " + ++n);
} else {
  console.log(--p + q-- + " " + --n);
}