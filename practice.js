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

console.log(typeof(numString));
console.log(numString);
////////////

// toString()    ->  int to string
// parseInt()   -> string to int (rounded)
// parseFloat() -> string to float (not as rounded)
// toFixed()   ->  rounds float to given position    
     //   toFixed(#)  ... # = places past decimal to round to - 0 by default.




///

