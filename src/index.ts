
let isDone: boolean = false;

/*============ NUMBER ============ */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log('\n------------\n');
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log('\n------------\n');


/*============ STRING ============ */
let color: string = 'blue';
color = 'red';

let fullName: string = 'Bob Sincler';
let age: number = 36;
let sentence: string = `Hello, my name is ${fullName}.
I'am ${age} years old`;


console.log(sentence);
console.log('\n------------\n');


/*============ ARRAYS ============ */
let list_1: number[] = [1, 2, 3];
let list_2: Array<number> = [1, 2, 3];

console.log(list_1);
console.log(list_2, list_2[2]);
console.log('\n------------\n');


/*============ TULPE ============ */
let x: [string, number];
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
enum Color_1 {Red, Green, Blue};
let a: Color_1 = Color_1.Green;

enum Color_2 {Red=1, Green=2, Blue=4};
let b: Color_2 = Color_2.Green;

let colorName: string = Color_1[2];
console.log(colorName);
console.log('\n------------\n');


/*============ ANY ============ */
let notSure: any = 4;
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


let list: any[] = [1, true, 'free'];
list[1] = 100;
console.log(list);


/*============ VOID ============ */
function warnUser(): void{
	console.log('This is the warning message!');
}
let unusable: void = undefined;


/*============ Null and Undefined ============ */
let u: undefined = undefined;
let n: null = null;


/*============ Never ============ */
function error(message: string): never {
	throw new Error(message);
}
function fail(){
	return error('Something failed');
}
function infiniteLoop(): never{
	while(true){

	}
}


/*============ Type assertions ============ */
let someValue: any = "this is a string";
let strLength_1: number = (<string>someValue).length;
let strLength_2: number = (someValue as string).length;



