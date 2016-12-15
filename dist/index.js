var isDone = false;
/*============ NUMBER ============ */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log('\n------------\n');
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log('\n------------\n');
/*============ STRING ============ */
var color = 'blue';
color = 'red';
var fullName = 'Bob Sincler';
var age = 36;
var sentence = "Hello, my name is " + fullName + ".\nI'am " + age + " years old";
console.log(sentence);
console.log('\n------------\n');
/*============ ARRAYS ============ */
var list_1 = [1, 2, 3];
var list_2 = [1, 2, 3];
console.log(list_1);
console.log(list_2, list_2[2]);
console.log('\n------------\n');
/*============ TULPE ============ */
var x;
x = ['hello', 10];
// x = [10, 'hello']; //get error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[2] = 'bingo';
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
// x[6] = true; // Error, 'boolean' isn't 'string | number'
console.log(x);
console.log('\n------------\n');
/*============ ENUM ============ */
var Color_1;
(function (Color_1) {
    Color_1[Color_1["Red"] = 0] = "Red";
    Color_1[Color_1["Green"] = 1] = "Green";
    Color_1[Color_1["Blue"] = 2] = "Blue";
})(Color_1 || (Color_1 = {}));
;
var a = Color_1.Green;
var Color_2;
(function (Color_2) {
    Color_2[Color_2["Red"] = 1] = "Red";
    Color_2[Color_2["Green"] = 2] = "Green";
    Color_2[Color_2["Blue"] = 4] = "Blue";
})(Color_2 || (Color_2 = {}));
;
var b = Color_2.Green;
var colorName = Color_1[2];
console.log(colorName);
console.log('\n------------\n');
/*============ ANY ============ */
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
/* ---------
let notSure_2: any = 4;
notSure_2.ifItExists(); // okay, ifItExists might exist at runtime
notSure_2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
*/
console.log('\n------------\n');
var list = [1, true, 'free'];
list[1] = 100;
console.log(list);
/*============ VOID ============ */
function warnUser() {
    console.log('This is the warning message!');
}
var unusable = undefined;
/*============ Null and Undefined ============ */
var u = undefined;
var n = null;
/*============ Never ============ */
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
