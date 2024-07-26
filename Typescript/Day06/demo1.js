//Shallow copy & deep copy
var a = 10;
var b = a;
// console.log(`
//     ==== Copy =====
//         a=${a}
//         b=${b}
//     `);
// b=30;
// console.log(`
//     ====After Change Value =====
//         a=${a}
//         b=${b}
//     `);
var a1 = [10, 20, 30];
var a2 = a1;
// console.log(`
//     ==== Copy =====
//         a1=${a1}
//         a2=${a2}
//     `);
// a2[1]=900;
// console.log(`
//     ====After Change =====
//         a1=${a1}
//         a2=${a2}
//     `);
// How to create Deep Copy 
var arr = [12, 36, 89, 56];
var arr1 = arr.slice(0);
console.log("\n    ==== Copy =====\n        a1=".concat(arr, "\n        a2=").concat(arr1, "\n    "));
arr1[2] = 800;
console.log("\n        ====After Change =====\n            a1=".concat(arr, "\n            a2=").concat(arr1, "\n        "));
