
/* ======== GENERICS ======== */

/* --- ОПРЕДЕЛЕНИЕ ---

Обобщения - это параметризованные типы. 

С их помощью можно объявлять классы, интерфейсы и методы, 
где тип данных указан в виде параметра. 

Обобщения добавили в язык безопасность типов.

--- */

function identity<T>(arg: T): T{
	return arg;
}

/* ---
T allows us to capture the type the user provides (e.g. number), 
so that we can use that information later. 

Here, we use T again as the return type. On inspection, we can now see 
the same type is used for the argument and the return type. 

This allows us to traffic that type information in one side of the function and out the other.
--- */

console.log();

let output_1 = identity<string>("MyString"); // type of output will be 'string'
console.log(output_1);

let output_2 = identity("MyString"); // type of output will be 'string'
/* --- 
Notice that we didn’t have to explicitly pass the type in the angle brackets (<>); 
the compiler just looked at the value "myString", and set T to its type. 
--- */
console.log(output_2);

let output_3 = identity<number>(15); // type of output will be 'int'
console.log(output_3);


/* ======== WORKING WITH GENERIC TYPE VARIABLES ======== */

function findout<T>(arg: T):T
{
	return arg;
}

function loggingFindout<T>(arg: T): T
{
	//console.log(arg.length); // Error: T doesn't have .length
	return arg;
}

/* --- 
When we do, the compiler will give us an error that we’re using the .length member of arg, 
but nowhere have we said that arg has this member. 

Remember, we said earlier that these type variables stand in for any and all types, 
so someone using this function could have passed in a number instead, 
which does not have a .length member.

Let’s say that we’ve actually intended this function to work on arrays of T 
rather than T directly. Since we’re working with arrays, 
the .length member should be available. We can describe this just 
like we would create arrays of other types:
--- */

function loggingIdentity<T>(arg: T[]): T[]
{
	console.log(arg.length); // Array has a .length, so no more error
	return arg;
}

/* --- 
You can read the type of loggingIdentity as 
“the generic function loggingIdentity takes a type parameter T, 
and an argument arg which is an array of Ts, and returns an array of Ts.” 

If we passed in an array of numbers, we’d get an array of numbers back out, 
as T would bind to number. 

This allows us to use our generic type variable T as part of 
the types we’re working with, rather than the whole type, 
giving us greater flexibility.
--- */

function logIdentity<T>(arg: Array<T>): Array<T> {
	console.log(arg.length); // Array has a .length, so no more error
	return arg;
}

/* ======== GENERIC TYPES ======== */

function getinfo<T>(arg: T): T
{
	return arg;
}

let myInfo1: <T>(arg: T) => T = getinfo;

let myInfo2: <U>(arg: U) => U = getinfo;

let myInfo3: {<T>(arg: T): T} = getinfo;

/* --- first generic interface --- */

interface GenericIdentityFn1
{
	<T>(arg: T): T;
}

function identification1<T>(arg: T): T
{
	return arg;
}

interface GenericIdentityFn2<T>
{
	(arg: T): T;
}

function identification2<T>(arg: T): T
{
	return arg;
}

let myInfo4: GenericIdentityFn2<number> = identification2;

/*
Notice that our example has changed to be something slightly different. 

Instead of describing a generic function, we now have a non-generic function 
signature that is a part of a generic type. When we use GenericIdentityFn, 

we now will also need to specify the corresponding type argument (here: number), 
effectively locking in what the underlying call signature will use. 

Understanding when to put the type parameter directly on the call signature and when to 
put it on the interface itself will be helpful in describing what aspects of a type are generic.

*/

console.log(
	myInfo4(12345)
);

console.log();


/* ======== GENERIC CLASSES ======== */

class GenericNumber<T>{
	zeroValue: T;
	add: (x : T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y){ return x + y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y){ return x + y; };

console.log(
	stringNumeric.add(stringNumeric.zeroValue, 'test')
);

/*
Just as with interface, putting the type parameter on the class itself
 lets us make sure all of the properties of the class are working with the same type.
*/


console.log();


/* ======== GENERIC CONSTRAINTS ======== */

function logInfo<T>(arg: T): T{
	//console.log(arg.length); // Error: T doesn't have .length
	return arg;
}

// lets add interface to our generic

interface Lengthwise {
	length: number;
}

function logInfoOpt<T extends Lengthwise>(arg: T): T {
	console.log(arg.length); //// Now we know it has a .length property, so no more err
	return arg;
}

/*
Because the generic function is now constrained, 
it will no longer work over any and all types:
*/

//logInfoOpt(3);  // Error, number doesn't have a .length property

/*
Instead, we need to pass in values whose type has all the required properties:
*/

logInfoOpt({length: 10, value: 3});


// ---- Using Type Parameters in Generic Constraints ----

function create<T>(c : { new(): T; }) : T {
	return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animals {
    numLegs: number;
}

class Bee extends Animals {
    keeper: BeeKeeper;
}

class Lion extends Animals {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animals, K> (a: {new(): A;
    prototype: {keeper: K}}): K {

    return a.prototype.keeper;
}

findKeeper(Lion).nametag; // typechecks!
findKeeper(Bee).hasMask; // typechecks!


