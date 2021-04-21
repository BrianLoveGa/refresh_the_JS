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
console.log(simp.slice(4, 17));   // start index , stop index inclusive
console.log(simp.length);
console.log(simp.indexOf('simple'));
console.log(simp.indexOf("This"));
console.log(simp.lastIndexOf("s"));
console.log(simp.lastIndexOf("g"));

console.log(simp.substr(5, 12));  // start index , number of spaces to go

/// .toUppercase() .toLowerCase() .trim() .concat()

/// .charAt(#)   = whats at index # ?

/// .split()   -> string to array


console.log(simp.split(' '));
console.log(simp.split(','));
console.log(simp.split(""));
console.log(simp.split());