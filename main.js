// console.log("hello from js file");
let myName = "alina";
let myname = "alina";
let groupNumber = 17;
myName = 20;

const subject = "front end development";
const studentsNumber = 12;
let myUndefined;
const myNull = null;
const isEveryonePresent = false;

// console.log(typeof subject, subject);
// console.log(typeof studentsNumber, studentsNumber);
// console.log(typeof myUndefined, myUndefined);
// console.log(typeof myNull, myNull);
// console.log(typeof isEveryonePresent, isEveryonePresent);

myUndefined = "some text";
// console.log(typeof myUndefined, myUndefined);

let num1 = 10;
let num2 = 20;
let num3 = 5;
let num4 = 3;
let text = "text";

const isTrue = num1 > 3;

const substraction = num2 - num1 + 10;
const multiplication = num1 * num4 * 2;
const division = num2 / text; //NaN not a number
const modulo = num2 % num4; //ნაშთი
const power = num1 ** num4;

console.log(substraction, multiplication, division, modulo, isTrue, power);

const add1 = num1 + num2;
const add2 = num1 + num2 + text;
const add3 = text + num1 + num2;

console.log(
	add1,
	"num1 + num2",
	add2,
	"num1 + num2 + text",
	add3,
	"text + num1 + num2"
);

const text1 = 'some "text"';
const text2 = "it's name ";
const text3 = `this ${add2} add2 4+5 is string'
MULTILINE 
SOME TEXT
""`;

const newText = text1 + " " + text2 + "some text";
const newText2 = `${text1} ${text2} some text`;

console.log(newText, newText2);
// console.log(text1);
// console.log(text2);
// console.log(text3);
