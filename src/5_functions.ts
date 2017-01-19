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


let bingo = {
	getBingo:function(this:void){
		return () =>{
			console.log('this of bingo:', this);
		}
	}	
};

let bongo = bingo.getBingo();
bongo();


// --- this parameters in callbacks ---

interface UIElement{
	addClickListener(onclick:(this:void, e:Event) => void): void;
}

/* ---
this: void means that addClickListener expects onclick to 
be a function that does not require a this type.
Second, annotate your calling code with this
--- */

class Handler1{
	info: string;
	onClickBad(this:Handler, e:Event){
		// Crash! Using this callback would crash at runtime
		//this.info = e.message;
	}
}

/* ---
With this annotated, you make it explicit that onClickBad must 
be called on an instance of Handler. 
Then TypeScript will detect that addClickListener requires a function that has this: void. 
To fix the error, change the type of this:
--- */

class Handler2 {
	info: string;
	onClickGood(this:void, e:Event){
        // can't use this here because it's of type void!
		//this.info = e.message;
		console.log('clicked!');
	}
}

/* ---
Because onClickGood specifies its this type as void, it is legal to pass to addClickListener. 
Of course, this also means that it can’t use this.info. 
If you want both then you’ll have to use an arrow function:
--- */

class Handler {
    info: string;
    onClickGood = (e: Event) => { 
    	//this.info = e.message 
    }
}

/* --- 
This works because arrow functions don’t capture this, so you can always pass them to something 
that expects this: void. The downside is that one arrow function 
is created per object of type Handler. 
Methods, on the other hand, are only created once and attached to Handler’s prototype. 
They are shared between all objects of type Handler.
--- */


console.log('\n==================\n');

/* ======== OVERLOADS ======== */

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;

function pickCard(x: number): { suit: string; card: number; };

function pickCard(x):any{
	// Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
	if(typeof x == 'object'){
		let pickedCard = Math.floor(Math.random() * x.length);
		return pickedCard;
	}
	else if (typeof x == "number"){
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}

let myDeck = [{ suit: "diamonds", card: 2},{ suit: "club", card: 4},{ suit:"hearts", card: 10 }];

let my_card = myDeck[pickCard(myDeck)];
console.log(my_card);

let my_card_2 = pickCard(15);
console.log(my_card_2)

// --- plain example ---

function getSmth(x:number): number;

function getSmth(x:string): string;

function getSmth(x):any{
	if(typeof x == "number"){
		console.log("X is a number:", x);
		return x + x;
	}
	else if(typeof x == "string"){
		console.log("X is a string:", x);
		return x + " " + x;
	}
}

console.log();
getSmth(15);
getSmth("BINGO!");

console.log('\n==================\n');




