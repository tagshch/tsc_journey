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

//After the assignment, x and y can’t be changed.
interface Point{
	readonly x: number;
	readonly y: number;
}

let p1: Point = { x: 10, y: 20};
// p1.x = 10; //error!
