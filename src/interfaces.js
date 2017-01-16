// ===============================================
// ================= INTERFACES ==================
// ===============================================
/* ===========  FIRST INTERFACE =========== */
var myObj = { size: 10, label: 'Size 10 Object' };
function printLabel_1(labelledObj) {
    console.log(labelledObj.label);
}
printLabel_1(myObj);
function printLabel_2(labelledObj) {
    console.log(labelledObj.label);
}
printLabel_2(myObj);
console.log('\n=====================\n');
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare_1 = createSquare({ color: "black" });
var mySquare_2 = createSquare({ width: 50 });
var mySquare_3 = createSquare({ color: "yellow", width: 50 });
var mySquare_4 = createSquare({});
console.log(mySquare_1);
console.log(mySquare_2);
console.log(mySquare_3);
console.log(mySquare_4);
console.log('\n=====================\n');
var p1 = { x: 10, y: 20 };
// p1.x = 10; //error!
