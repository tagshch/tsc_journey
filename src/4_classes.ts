
// ========= CLASSES ==========

class Greeter{
	greeting: string;
	constructor(message: string){
		this.greeting = message;
	}
	greet(){
		return "Hello, " + this.greeting;
	}
}

let greeter = new Greeter('World!');

console.log();
console.log(greeter.greet());
console.log();
console.log('=============== \n');

// ========= INHERITANCE ==========

class Electronic{
	name: string;
	constructor(theName: string){
		this.name = theName;
	}
	move(distanceInMeters:number = 0){
		console.log(
			`${this.name} moved ${distanceInMeters}m.`
		);
	}
}

/* ---  
Derived classes that contain constructor functions must call super() 
which will execute the constructor function on the base class.

The example also shows how to override methods in the base class
 with methods that are specialized for the subclass.  
--- */

class Microwave extends Electronic{
	constructor(name: string){
		// inherit from parent class
		super(name);
	}
}

class Toster extends Electronic{
	constructor(name: string){
		// inherit from parent class
		super(name); 
	}

	// override move() from parent class
	move(distanceInMeters = 10){
		console.log('Slithering...');
		super.move(distanceInMeters);
	}
}


let sam = new Toster('Sammy');
let tom = new Microwave('Tom');

sam.move();
tom.move();

console.log('===============\n');

// ========= Public, private, and protected modifiers ==========

class Animal{
	public name: string;
	public constructor(theName: string){
		this.name = theName;
	}
	public move(distanceInMeters: number){
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

// --- PRIVATE ---

class Human{
	private name: string;
	public constructor(theName: string){
		this.name = theName;
	}
}

// new Human('John').name; // Error: 'name is private';

class Bike{
	private name: string;
	constructor(theName: string){
		this.name = theName;
	}
}

class Honda extends Bike{
	constructor(){ 
		super('Honda');
	}
}

class Tomato{
	private name: string;
	constructor(theName: string){
		this.name = theName;
	}
}

/* ---
Create some instances of these classes and then try to assign them to each other. 

Because Bike and Honda share the private side of their shape from 
the same declaration of private name: string in Bike, they are compatible. 

However, when we try to assign from an Tomato to Bike we get an error that 
these types are not compatible. 

Even though Tomato also has a private member called name, 
it’s not the one we declared in Bike.
--- */

let bmw = new Bike('bmw');
let honda = new Honda();
let tomato = new Tomato('RedOne');

console.log(bmw);

bmw = honda;
console.log(bmw);

// bmw = tomato; // Error: 'Animal' and 'Employee' are not compatible
console.log(bmw);



// --- PROTECTED ---

class Person{
	protected name:string;
	constructor(theName:string){
		this.name = theName;
	}
}

class Employee extends Person{

	private department: string;

	constructor(name:string, department: string){
		super(name);
		this.department = department;
	}

	public getElevatorPitch(){
		return `Hello, my name is ${this.name} and i am from ${this.department}`;
	}
}

let howard = new Employee('Howard', 'Sales');
console.log();
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error! Because protected!
console.log();


class Robot{
	protected name: string;
	protected constructor(theName:string){
		this.name = theName;
	}
}

class CleanerBot extends Robot{
	private department: string;

	constructor(name: string, department: string){
		super(name);
		this.department = department;
	}

	public getStatus(){
		console.log(`I am ${this.name}. From ${this.department}`);
	}
}

let joe = new CleanerBot('Joe','Robotron');
joe.getStatus();
// let john = new Robot('John'); // Error: The 'Person' constructor is protected

console.log('\n===============\n');



// ========= READONLY MODIFIER ==========


class Octopus{
	readonly name: string;
	readonly legs: number = 8;
	constructor(theName:string){
		this.name = theName;
	}
}

let dad = new Octopus('8 legged Octopus');
console.log(dad.name);
// dad.name = '3 legged Man!'; // error! name is readonly;


// --- Consolidation the declarations and assignment into one location ---

class Puppy{
	readonly legs: number = 4;
	constructor(readonly name: string){

	}
}

let pops = new Puppy('Pops');
console.log(pops.name);

console.log('\n===============\n');


// ========= ACCESSORS ==========

let passcode = 'password';

class Bank{
	private _accountId: string;
	
	get AccountId(): string{
		return this._accountId;
	}

	set AccountId(newId: string){
		if(passcode && passcode == 'password'){
			this._accountId = newId;
		} 
		else {
			console.log('Error: Unauthorized update of account id!');
		}
	}
}

let bank = new Bank();

bank.AccountId = "1243-2831-1245-9512";

if(bank.AccountId){
	console.log('Updated ID:', bank.AccountId);
}

console.log('\n===============\n');


// ========= STATIC PROPERTIES ==========


interface pointInterface {
	x: number;
	y: number;
}

class Grid{
	static origin = { x:0, y:0 };

	calcDistFromOrigin(point:pointInterface){
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
	}

	constructor(public scale:number){ }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

let non_origin = { x: 10, y: 10 };

console.log(
	grid1.calcDistFromOrigin(non_origin),
	grid2.calcDistFromOrigin(non_origin)
);

console.log('\n===============\n');


// ========= ABSTRACT CLASSES ==========


abstract class Jungle{
	abstract makeSound(): void;
	move(): void{
		console.log("roaming the earth...");
	}
}


abstract class Department{

	constructor(public name:string){}

	printName():void{
		console.log("Department name:", this.name);
	}

	abstract printMeeting(): void; //must be implemented in derived classes
}

class AccountDepartment extends Department{

	// constructors in derived classes must call super()
	constructor(){
		super("Accounting and  Auditing");
	}

	printMeeting(){ console.log("The Accounting Dep meets each Monday at 10am.")}

	generateReports():any{ console.log('Generating reports...'); }
}

// ok to create a reference to an abstract type
let deps: Department; 

// error: cannot create an instance of an abstract class
// deps = new Department(); 

// ok to create and assign a non-abstract subclass
deps = new AccountDepartment(); 
deps.printName();
deps.printMeeting();

// error: method doesn't exist on declared abstract type
// deps.generateReports(); 

console.log('\n===============\n');


// ========= ADVANCED TECHNIQUES ==========
// ========= Constructor functions ==========

class Greetor {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greetor.standardGreeting;
        }
    }
}

/*
Here we create a new variable called greeterMaker. 
This variable will hold the class itself, or said another way its constructor function. 

Here we use typeof Greeter, that is “give me the type of the Greeter class itself” 
rather than the instance type. Or, more precisely, “give me the type of the 
symbol called Greeter,” which is the type of the constructor function. 

This type will contain all of the static members of Greeter along with the constructor
that creates instances of the Greeter class. We show this by using new on greeterMaker,
creating new instances of Greeter and invoking them as before.
*/

let greetor1: Greetor = new Greetor();
console.log('greetor1:',greetor1.greet());

let greetorMaker: typeof Greetor = Greetor;
greetorMaker.standardGreeting = "Hey there!";

let greetor2: Greetor = new greetorMaker();
console.log('greetor2:', greetor2.greet());

let greetor3: Greetor = new Greetor();
console.log('greetor3:', greetor3.greet());

console.log('\n===============\n')


// =========== Using a class as an interface ===========

class Plate{
	x: number;
	y: number;
}

interface Ball extends Plate{
	z: number;
}

let ball: Ball = {x: 1, y: 2, z: 3 };