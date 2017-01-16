// ===============================================
// ================= INTERFACES ==================
// ===============================================



/* ===========  FIRST INTERFACE =========== */
let myObj = { size: 10, label: 'Size 10 Object'};

function printLabel_1(labelledObj: {label:string}) {
	console.log(labelledObj.label);
}
printLabel_1(myObj);

// ...above compare to below

interface LabbeledValue{
	label: string;
}
function printLabel_2(labelledObj: LabbeledValue){
	console.log(labelledObj.label);
}
printLabel_2(myObj);
console.log('\n=====================\n');



/* ===========  OPTIONAL PROPERTIES =========== */

// --- Question mark '?' - means that this property is optional ---

interface SquareConfig{
	color?: string;
	width?: number;
}

function createSquare(config: SquareConfig): { color: string; area:number }{
	let newSquare = { color: "white", area: 100 };
	if(config.color){
		newSquare.color = config.color;
	}
	if(config.width){
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}
let mySquare_1 = createSquare({color:"black"});
let mySquare_2 = createSquare({width: 50});
let mySquare_3 = createSquare({color:"yellow", width: 50});
let mySquare_4 = createSquare({});
console.log(mySquare_1);
console.log(mySquare_2);
console.log(mySquare_3);
console.log(mySquare_4);
console.log('\n=====================\n');



/* ===========  READONLY PROPERTIES =========== */

// --- After the assignment, x and y can’t be changed. ---
interface Point{
	readonly x: number;
	readonly y: number;
}

let p1: Point = { x: 10, y: 20};
// p1.x = 10; //error!

// --- Readonly array ---
let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;

console.log(ro);

/*
ro[0] = 10; // error!
ro.push(15); // error!
ro.length = 100; // error!
a = ro; // error!
*/

// --- NB - variables can be const, but properties can be readonly ---

console.log('\n=====================\n');


/* ===========  EXCESS PROPERTY CHECKS =========== */


interface SquareConfig2 {
    color?: string;
    width?: number;
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
	let newSquare = {
		color:"",
		area:0
	};

	console.log('Config:', config);

	if(config.color){
		newSquare.color = config.color;
	}
	if(config.width){
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

// let mySquare2 = createSquare2({ colour: "red", width: 20 });
// console.log('mySquare2:', mySquare2);

let mySquare3 = createSquare2({ width: 50, opacity: 0.5 } as SquareConfig2);
console.log('mySquare3:', mySquare3);


interface SquareConfig3 {
	color?: string;
	width?: number;
	[propName: string]: any;
}

let squareOptions = { colour: "red", width: 33 };
let mySquare4 = createSquare2(squareOptions);
console.log('mySquare4:', mySquare4);
console.log('\n=====================\n');



/* ===========  FUNCTION TYPES =========== */
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
	let result = source.search(subString);
	// if(result > -1) return 'BONGO'; // get error, because not boolean!
	return result > -1;
}

// --- optimizied code (we can change titles of args) ---
let mySearch2: SearchFunc = function(src: string, sub: string): boolean{
	let result = src.search(sub);
	return result > -1;
};

let mySearch3: SearchFunc = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

console.log(
	'mySearch:',
	mySearch('aaaaaacaraaaaaa', 'car'),
	mySearch2('aaaaaacaraaaaaa', 'car'),
	mySearch3('aaaaaacaraaaaaa', 'car')
);

console.log('\n=====================\n');


/* ===========  INDEXABLE TYPES =========== */

interface keyByNumber {
	[index:number] : string;
}

let myArray: keyByNumber = ['Bob', 'Fred'];
let myStr: string = myArray[0];

console.log(myStr, myArray);


/*
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
*/

// --- Readonly array ---
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];

//myArray2[2] = "Mallory"; // error!
//console.log(myArray2);

console.log('\n=====================\n');


/* ===========  CLASS TYPES =========== */

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {
    	this.currentTime = new Date();
    	this.currentTime.setHours(h);
    	this.currentTime.setMinutes(m);
    }
    getTime(){ 
    	console.log(this.currentTime.toLocaleString('ru')); 
    }
}

let Cl = new Clock(10, 30);
Cl.getTime();


interface ClockInterface2 {
	currentTime: Date;
	setTime(d: Date);
}

class Clock2 implements ClockInterface2{
	currentTime: Date;
	setTime(d: Date){
		this.currentTime = d;
	}
	constructor(h: number, m: number){ }
}

let Cl2 = new Clock2(10, 30);

Cl2.setTime(new Date());
console.log(Cl2.currentTime.toLocaleString('ru'), '\n');


// === Difference between the static and instance sides of classe ===

interface CarConstructor{
	new (horses: number, price: number):  CarInterface;
}
interface CarInterface{
	tick();
}

function createCar(ctor: CarConstructor, horses: number, price: number): CarInterface{
	return new ctor(horses, price);
}

class ElectoCar implements CarInterface{
	constructor(h: number, p: number){ }
	tick(){
		console.log('Beep Beep');
	}
}

class AutoCar implements CarInterface{
	constructor(h: number, p: number){ }
	tick(){
		console.log('Boo Boo');
	}
}

let electro = createCar(ElectoCar, 120, 60000);
let auto = createCar(AutoCar, 160, 30000);

electro.tick();
auto.tick();

console.log(
	electro,
	auto
);

console.log('\n=====================\n');


/* ===========  Extending Interfaces =========== */

/* ===========  Hybrid Types =========== */

/* ===========  Interfaces Extending Classes =========== */




