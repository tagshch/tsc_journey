
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

bmw = tomato; // Error: 'Animal' and 'Employee' are not compatible
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
		console.log(`I am `);
	}
}















console.log('\n===============\n');