//Literal

var a:number|string;
a=2.5;
a='sumit';

var a1:50|boolean;
// a1=100;

var a2:null|string;
a2=null;
a2='sumit';

// type assertion
// data type should be either any/Object/unkown
 // 1 angle bracket => It given by Typescript=> used in ts file  
 // 2 as syntax => It given by js => use in ts as well as html (view)
 // 1 angle bracket
 var c:any;
 var temp=(<string> c)
//  temp.

// 2 as syntax
var c1:any;
var temp1=(c1 as string);
// temp1.


//Operators
//Airthmathical => +,-,*,/,%
// relational => <,>,<=,>=,!=,==,===(strongly equality it checks data type as well as value )
// logical => &&, || 
// bitwise => &,|,^,~,!,>>,<<
// ternary => condition?Expression1:expression2
// assignment => =,+=,-=,*=,/=,%=
// unary => post/pre inc/dec ++a,a--


//control statement/sequential statement
// if,if-else,nested if-else,switch,contunue,break,
var a4:number=9;
// if(a4<10){
//     console.log("Condition is true")
// }else{
//     console.log("Condition is false")
// }

var choice=21;

// switch(choice){
//     case 1: console.log("U r in case 1");
//             break;
//     case 2: console.log("U r in case 2");
//             break;
//     default:console.log("U r in default Case")
//             break;
// }


// Loop Statement
// while, do-while,for,foreach

var count=5;

// while(count!=0){
//     console.log("count is "+count);
//     count--;
// }

// do{
//     console.log("count is "+count);
//     count--;
// }while(count!=0)

// for loop 

// for(var i=0;i<4;i++){
//     console.log("Value of i is "+i);
// }

// console.log("value of i After the Loop "+i);

// var scope => it is a global scope 

// let scope => It is access within a nearest block (file block  {} ) 

// let i;
for(let i=0;i<4;i++){
    console.log("Value of i is "+i);
}

// console.log("value of i After the Loop "+i);


// const => It is also keyword to used to define a variable 
// scope => global as well as local 

const pi=3.14;



