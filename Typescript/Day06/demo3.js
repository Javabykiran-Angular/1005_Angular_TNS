//write a function to return multiple value/operation to collect into the variable
function operation(a, b) {
    return ([a + b, a - b, a * b]);
}
var _a = operation(10, 5), add = _a[0], sub = _a[1], mul = _a[2];
console.log("\n    add :: ".concat(add, "\n    Sub :: ").concat(sub, "\n    mul :: ").concat(mul, "    \n"));
