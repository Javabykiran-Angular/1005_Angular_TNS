"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(id, f, l) {
        // console.log("U r in Constructor")
        this.id = id;
        this.fname = f;
        this.lname = l;
    }
    Myclass.prototype.display = function () {
        console.log("\n            Id          ::".concat(this.id, "\n            First Name  ::").concat(this.fname, "\n            Last Name   ::").concat(this.lname, "     \n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
function add(a, b) {
    return (a + b);
}
exports.add = add;
// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();
exports.pi = 3.14;
