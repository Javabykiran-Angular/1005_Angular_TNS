//rest parameter function

function display(...item:number[]){
    console.log(item);
}

// display(10,20,30);

// let a:number[]=[];

// push & pop 
// It works on LIFO Principal 

// a.push(40);
// console.log(a);
// a.push(50,60,70);
// console.log(a);
// let res= a.pop();
// console.log("Poped data is "+res);
// console.log(a);

// splice method 
// u can add or remove particular index data 

// let a:number[]=[10,20,30];
// console.log(a);


// a.splice(1,0,50);
// console.log(a);
// a.splice(1,0,60,90);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(2,2);
// console.log(a);
// a.splice(1,1,100);
// console.log(a);

//slice 
// it copy a section of data from an array & it returns a new array 

let course:string[]=['Core java','Mysql','HTML','CSS','JS','Spring core','Hibernate','Spring Boot','Angular 16','AWS','Docker','Jenkings','Jira'];

// let copiedArr=course.slice(1,6);
// console.log(copiedArr);

// let copiedArr1=course.slice();
// console.log(copiedArr1);


//map
// it perform element by element operation

// let a:number[]=[2,3,4,5,6];

// let sqrArr= a.map((v)=>{
//     return (v*v);
// });

// console.log(`
//         Original Array :: ${a}
//         Squared Array  :: ${sqrArr}  
// `);

//Array Destructor 
let a:number[]=[45,86,96,9];

let [t1,t2,t3,t4]=a;

// console.log(`
//     t1 :: ${t1}
//     t2 :: ${t2}
//     t3 :: ${t3}
//     t4 :: ${t4}    
// `);

let [kuchbhi,...arr]=a;
console.log(`
    KuchBhi :: ${kuchbhi}  
   arr :: ${arr}   
`)



