/* ======== FUNCTIONS ======== */

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { 
	return x+y; 
};

console.log('\n==================\n');


/* ======== FUNCTION TYPES ======== */

function summ(x: number, y: number): number {
	return x + y;
}

let mySumm = function(x: number, y:number): number { 
	return x + y; 
};

console.log(
	'summ:',
	summ(10, 15),
	'\nmySumm:',
	mySumm(25, 20)
);

// --- writing the function type ---

/* ---
A function’s type has the same two parts: the type of the arguments and the return type. 
When writing out the whole function type, both parts are required. 
We write out the parameter types just like a parameter list, giving each parameter a name and a type. 
--- */

let mySumm2: (x: number, y: number) => number =
	function(x: number, y: number): number { return x + y; };

let mySumm3: (baseValue: number, increment: number) => number =
	function(x: number, y: number): number { return x + y; };

// --- Inferring the types ---

/* --- 
In playing with the example, you may notice that the TypeScript compiler can figure out 
the type if you have types on one side of the equation but not the other:
--- */

let myPlus = function(x:number, y:number): number { return x + y; };

// let myPlus: (baseVal: number, plusVal: number) => number =
//	function(x, y) { return x + y; }

/* ---
This is called “contextual typing”, a form of type inference. 
This helps cut down on the amount of effort to keep your program typed.
--- */

console.log('\n==================\n');


/* ======== OPTIONAL AND DEFAULT PARAMETERS ======== */

function buildName(firstName: string, lastName: string){
	return firstName + ' ' + lastName;
}

//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

console.log('',result3);

function buildNameOpt(firstName: string, lastName?:string){
	return firstName + ' ' + lastName;
}

let result4 = buildNameOpt("Bob");
let result5 = buildNameOpt("Bob", "Adams");

console.log(
	'\n',result4,
	'\n',result5
);

function buildNameDefault(firstName: string, lastName = "Smith"){
	return firstName + ' ' + lastName;
}

let res1 = buildNameDefault("Bob");                  // works correctly now, returns "Bob Smith"
let res2 = buildNameDefault("Bob", undefined);       // still works, also returns "Bob Smith"
//let res3 = buildNameDefault("Bob", "Adams", "Sr.");  // error, too many parameters
let res4 = buildNameDefault("Bob", "Adams");         // ah, just right

console.log(
	'\n',res1,
	'\n',res2,
	'\n',res4	
);

/* ---
Default-initialized parameters that come after all required parameters are treated as optional, 
and just like optional parameters, can be omitted when calling their respective function. 
This means optional parameters and trailing default parameters will 
share commonality in their types, so both:
--- */

function buildNameC1(firstName: string, lastName?: string) {
    // ...
}
function buildNameC2(firstName: string, lastName = "Smith") {
    // ...
}

/* --- 
share the same type (firstName: string, lastName?: string) => string. 
The default value of lastName disappears in the type, only leaving behind 
the fact that the parameter is optional.
 --- */


console.log('\n==================\n');

/* ======== REST PARAMETERS ======== */

/* --- 
Rest parameters are treated as a boundless number of optional parameters. 
--- */

function buildText(firstText: string, ...restOfText: string[]){
	return firstText + " " + restOfText.join(" ");
}

let builded_text_1 = buildText('Bingo','Bongo','Kongo','Mongo');
let builded_text_2 = buildText('Bingo');
console.log(
	'', builded_text_1,
	'\n', builded_text_2
);


function buildTexts(firstText: string, ...restOfText: string[]) {
    return firstText + " " + restOfText.join(" ");
}

let buildTextsFunc: (ftext: string, ...rest: string[]) => string = buildTexts;

/* ---
The ellipsis is also used in the type of the function with rest parameters:
--- */

let texts = buildTextsFunc('First', 'Second', 'Three');

console.log(
	'\n', texts
);



console.log('\n==================\n');

/* ======== THIS ======== */

// --- this and arrow functions ---

/* --- 
Arrow functions capture the this where the function is 
created rather than where it is invoked:
--- */

let simple_deck = {
	suits: ['hearts', 'spades', 'clubs', 'diamonds'],
	cards: Array(52),
	createCardPicker: function(){
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);

			return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
		}
	}
}

let simpleCardPicker = simple_deck.createCardPicker();
let simplePickedCard = simpleCardPicker();

console.log("card:", simplePickedCard.card, "of", simplePickedCard.suit);

// --- this parameters ---

interface Card {
	suit: string;
	card: number;
}
interface Deck {
	suits: string[];
	cards: number[];
	createCardPicker(this: Deck): () => Card;
}

let deck:Deck = {
	suits: ['hearts', 'spades', 'clubs', 'diamonds'],
	cards: Array(52),
	createCardPicker: function(this:Deck){
		return ()=>{
			let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
		}
	}
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit + '\n');

// --- simple of above ---

let bingo = {
	getBingo:function(this:void){
		return () =>{
			console.log('BINGO!', this);
		}
	}	
};

let bongo = bingo.getBingo();
bongo();


// --- this parameters in callbacks ---



console.log('\n==================\n');

/* ======== OVERLOADS ======== */


console.log('\n==================\n');




