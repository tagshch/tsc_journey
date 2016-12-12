function write(item) {
    document.write(item + ' : ' + typeof (item) + '<br/>');
}
var myName = "Derek";
var myAge = 41;
var canVote = true;
var anything = "dog";
var strToNum = parseInt("4");
var numToStr = 5;
write(myName);
write(strToNum);
write(numToStr);
var superman = {
    realName: "Clart Kent",
    superName: "Superman"
};
write(superman.realName);
write(superman.superName);
/* ----- ARRAYS ----- */
var employees = ['Bob', 'Sally', 'Sam'];
// employees.push(5); // error!
write(employees.toString());
var heroes = [];
yaheroes.push({
    realName: 'Bingo',
    superName: 'Bongo!'
});
write(heroes[0].superName);
