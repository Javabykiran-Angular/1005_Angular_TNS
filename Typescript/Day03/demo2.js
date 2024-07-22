// Functions
// 1 Function without parameter & without return type 
// 2 Function with parameter & without return type 
// 3 Function without parameter & with return type 
// 4 Function with parameter & with return type 
// 1 Function without parameter & without return type 
function add1() {
    console.log("First type of Function is called...");
}
// add1();
// 2 Function with parameter & without return type 
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(10,2);
// 3 Function without parameter & with return type 
function add3() {
    return (8 + 8);
}
var res = add3();
// console.log("Result is "+res);
// 4 Function with parameter & with return type
function add4(a, b) {
    return (a + b);
}
console.log("\n        Addition is :: ".concat(add4(10, 20), "\n    "));
