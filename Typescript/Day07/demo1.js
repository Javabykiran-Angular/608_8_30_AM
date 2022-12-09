//Anonymous function
// function does not having any name 
var temp1 = function () {
    console.log("first type of Anonymous function is called ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// let res=temp2(4,5)
// console.log(res);
//Fat arrow function/Arrow function 
// it is advanced version of Anonymous function
var temp3 = function () {
    console.log("Fat arrow function is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log(`
//         Addition is ${temp4(7,10)}
// `);
// Optional parameter function
function add1(a, b) {
    console.log("Value of A is " + a); // 10
    console.log("Value of B is " + b); //undefined
    console.log("Addition  of A+B is " + (a + b)); //NAN => Not a number
}
// add1(10);
// add1(10,20);
function add2(a, b) {
    console.log("Value of A is " + a); // 10
    console.log("Value of B is " + b); //undefined
    console.log("Addition  of A+B is " + (a + b)); //NAN => Not a number
}
// add2();
// add2(45,50);
//default parameter function
function add3(a, b) {
    if (b === void 0) { b = 2; }
    console.log("Value of A is " + a); // 10
    console.log("Value of B is " + b); //undefined
    console.log("Addition  of A+B is " + (a + b)); //NAN => Not a number
}
// add3(10,45);
function add4(a, b) {
    if (a === void 0) { a = 9; }
    console.log("Value of A is " + a); // 10
    console.log("Value of B is " + b); //undefined
    console.log("Addition  of A+B is " + (a + b)); //NAN => Not a number
}
// add4(7,8);
function add5(a, b) {
    if (a === void 0) { a = 9; }
    console.log("Value of A is " + a); // 10
    console.log("Value of B is " + b); //undefined
    console.log("Addition  of A+B is " + (a + b)); //NAN => Not a number
}
add5();
