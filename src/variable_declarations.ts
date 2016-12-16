// ===============================================
// ============ VARIABLE DECLARATIONS ============
// ===============================================


let var_let = 'scoped variable';
const var_const = 'constanta';


/*============ Array Descructing ============ */
{
	let input = [1, 2];
	let [first, second] = input;
	// console.log(first); // outputs 1
	// console.log(second); // outputs 2

	first = input[0];
	second = input[1];

	//swap variables
	[first, second] = [second, first];
	console.log([first, second]);

	function f_1([first, second]: [number, string]){
		console.log(first, second);
	}
	function f_2([first, second]: number[]){
		console.log(first, second);
	}

	f_1([1, 'bingo']);
	f_2(input);
}
{
	let [first, ...rest] = [1, 2, 3, 4];
	console.log(first);
	console.log(rest);
}
{
	let [first] = [1, 2, 3, 4];
	console.log(first); // outputs 1
	let [, second, , fourth] = [1, 2, 3, 4];
	console.log(second, fourth);
	console.log('\n------------\n');
}

/*============ Object Descructing ============ */
let obj = {
		a: "foo",
		b: 12,
		c: "bar"
	};

{
	let { a, b } = obj;
	console.log(a, b);
	({a, b} = { a: 'baz', b: 101});
	console.log(a, b);
}

{
	let { a, ...passthrough } = obj; //it works!
	let total = passthrough.b + passthrough.c.length;
	console.log(total);
}

// Property renaming
{
	let { a: newName1, b:newName2} = obj; // a as newName1, b as newName2
	// console.log(a, b); // It show errors and works, but it mustnt! WTF?!
	console.log(newName1, newName2);
}
{
	let newName1 = obj.a;
	let newName2 = obj.c;
	console.log(newName1, newName2);
}
{
	let {a, b}: {a: string, b:number} = obj;
	console.log(a, b);
}

//Default values
function keepWholeObject(wholeObject:{a:string, b?:number}){
	let { a, b = 1001 } = wholeObject;
	console.log(wholeObject, a, b);
}
let obj_1 = {
	a:"bingo"
 }

keepWholeObject(obj_1);

console.log('\n------------\n');


/*============ Function Declarations ============ */
{
	type C = { a: string, b?:number };
	function cf_1({a ,b}: C): void{
		console.log(a, b);
	}
	cf_1({a:'bingo'});
	cf_1({a:'bingo', b: 50});

	function cf_2({a ,b} = {a:"empty", b:0}):void {
		console.log(a, b, '\n');
	}

	cf_2({a:'bingo', b: 50});
	cf_2();

	function cf_3({a, b = 0} = {a: "empty"}): void{
		console.log(a, b);
	}

	cf_3({a:'bingo', b: 50});
	// cf_3({b: 50});
	cf_3({a: 'bingo'});
	cf_3();
	console.log('\n------------\n');
}

/*============ Spread ============ */
let first = [1, 2];
let second = [3, 4];
let both = [0, ...first, ...second, 5];
console.log(both);

let defaults = { food: 'spicy', price:"15$", ambiance:"noisy"};
let search_1 = { ...defaults, food: 'rich' }; //food overwrite food property
let search_2 = { food: "rich", ...defaults }; // no overwrite

// console.log(defaults);
console.log(search_1);
console.log(search_2);
console.log('\n------------\n');

{
	// Spread only includes own, enumerable properties. 
	// Basically, that means you lose methods when you spread instances of an object:
	class C{
		p = 12;
		m(){
			console.log('C.m()');
		}
	}

	let c = new C();
	let clone = { ...c };

	console.log(clone.p); // get 12
	// clone.m(); // get error!


	// Second, the Typescript compiler doesn’t allow spreads of type parameters from generic functions.
	// That feature is expected in future versions of the language.
}












