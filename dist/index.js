var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
{
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
}
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
console.log('\n------------\n');
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
/*============ Type assertions ============ */
var someValue = "this is a string";
var strLength_1 = someValue.length;
var strLength_2 = someValue.length;
// ===============================================
// ============ VARIABLE DECLARATIONS ============
// ===============================================
var var_let = 'scoped variable';
var var_const = 'constanta';
/*============ Array Descructing ============ */
{
    var input = [1, 2];
    var first_1 = input[0], second_1 = input[1];
    // console.log(first); // outputs 1
    // console.log(second); // outputs 2
    first_1 = input[0];
    second_1 = input[1];
    //swap variables
    _a = [second_1, first_1], first_1 = _a[0], second_1 = _a[1];
    console.log([first_1, second_1]);
    function f_1(_a) {
        var first = _a[0], second = _a[1];
        console.log(first, second);
    }
    function f_2(_a) {
        var first = _a[0], second = _a[1];
        console.log(first, second);
    }
    f_1([1, 'bingo']);
    f_2(input);
}
{
    var _b = [1, 2, 3, 4], first_2 = _b[0], rest = _b.slice(1);
    console.log(first_2);
    console.log(rest);
}
{
    var first_3 = [1, 2, 3, 4][0];
    console.log(first_3); // outputs 1
    var _c = [1, 2, 3, 4], second_2 = _c[1], fourth = _c[3];
    console.log(second_2, fourth);
    console.log('\n------------\n');
}
/*============ Object Descructing ============ */
var obj = {
    a: "foo",
    b: 12,
    c: "bar"
};
{
    var a = obj.a, b = obj.b;
    console.log(a, b);
    (_d = { a: 'baz', b: 101 }, a = _d.a, b = _d.b);
    console.log(a, b);
}
{
    var a = obj.a, passthrough = __rest(obj, ["a"]); //it works!
    var total = passthrough.b + passthrough.c.length;
    console.log(total);
}
// Property renaming
{
    var newName1 = obj.a, newName2 = obj.b; // a as newName1, b as newName2
    // console.log(a, b); // It show errors and works, but it mustnt! WTF?!
    console.log(newName1, newName2);
}
{
    var newName1 = obj.a;
    var newName2 = obj.c;
    console.log(newName1, newName2);
}
{
    var a = obj.a, b = obj.b;
    console.log(a, b);
}
//Default values
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(wholeObject, a, b);
}
var obj_1 = {
    a: "bingo"
};
keepWholeObject(obj_1);
console.log('\n------------\n');
/*============ Function Declarations ============ */
{
    function cf_1(_a) {
        var a = _a.a, b = _a.b;
        console.log(a, b);
    }
    cf_1({ a: 'bingo' });
    cf_1({ a: 'bingo', b: 50 });
    function cf_2(_a) {
        var _b = _a === void 0 ? { a: "empty", b: 0 } : _a, a = _b.a, b = _b.b;
        console.log(a, b, '\n');
    }
    cf_2({ a: 'bingo', b: 50 });
    cf_2();
    function cf_3(_a) {
        var _b = _a === void 0 ? { a: "empty" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
        console.log(a, b);
    }
    cf_3({ a: 'bingo', b: 50 });
    // cf_3({b: 50});
    cf_3({ a: 'bingo' });
    cf_3();
    console.log('\n------------\n');
}
/*============ Spread ============ */
var first = [1, 2];
var second = [3, 4];
var both = [0].concat(first, second, [5]);
console.log(both);
var defaults = { food: 'spicy', price: "15$", ambiance: "noisy" };
var search_1 = __assign({}, defaults, { food: 'rich' }); //food overwrite food property
var search_2 = __assign({ food: "rich" }, defaults); // no overwrite
// console.log(defaults);
console.log(search_1);
console.log(search_2);
console.log('\n------------\n');
{
    // Spread only includes own, enumerable properties. 
    // Basically, that means you lose methods when you spread instances of an object:
    var C = (function () {
        function C() {
            this.p = 12;
        }
        C.prototype.m = function () {
            console.log('C.m()');
        };
        return C;
    }());
    var c = new C();
    var clone = __assign({}, c);
    console.log(clone.p);
    clone.m(); //get error!
}
var _a, _d;
