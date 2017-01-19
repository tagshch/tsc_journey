
/* ======== GENERICS ======== */

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
	console.log(arg.length); // Error: T doesn't have .length
	return arg;
}



