function write(item){
	document.write(item + ' : ' + typeof(item) + '<br/>');
}

let myName:string = "Derek";
let myAge: number = 41;
let canVote: boolean = true;
let anything: any = "dog";

let strToNum: number = parseInt("4");
let numToStr: number = 5;

write(myName);
write(strToNum);
write(numToStr);

/* ---- INTERFACE ----- */
interface SuperHero{
	realName: string;
	superName: string;
}

let superman: SuperHero = {
	realName: "Clart Kent",
	superName: "Superman"
}

write(superman.realName);
write(superman.superName);


/* ----- ARRAYS ----- */
let employees: string[] = ['Bob', 'Sally', 'Sam'];
// employees.push(5); // error!
write(employees.toString());

let heroes: SuperHero[] = []
;yaheroes.push({
	realName: 'Bingo',
	superName: 'Bongo!'
});

write(heroes[0].superName);