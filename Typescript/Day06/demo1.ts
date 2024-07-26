//Shallow copy & deep copy

let a=10;
let b=a;
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

let a1=[10,20,30];
let a2=a1;
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

let arr=[12,36,89,56];

let [...arr1]=arr;

console.log(`
    ==== Copy =====
        a1=${arr}
        a2=${arr1}
    `);

    arr1[2]=800;
    console.log(`
        ====After Change =====
            a1=${arr}
            a2=${arr1}
        `);
