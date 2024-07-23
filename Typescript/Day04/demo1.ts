//Anonymous Functions
// function does not have any name 
// its logic execute there it self 

let temp1= function (){
    console.log("U r in first Type of Function")
}

// temp1();

let temp2= function (a:number,b:number):number{
    return (a+b);
}

let res=temp2(10,2)
// console.log("Addition "+res)


//fat arrow function/ Arrow function

 let temp3=()=>{
        console.log("First type of Fat arrow function is called ")
    }
    // temp3();
  let temp4=  (a:number,b:number):number=>{
        return (a+b)
    }  
// console.log(`
//     Adddition is :: ${temp4(10,5)}
// `);

// optional parameter Functions
function add1(a:number,b?:number){
    console.log("Value of a is "+a);//10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b!));// NAN=> Not a number
}
// add1(10,20);
function add2(a?:number,b?:number){
    console.log("Value of a is "+a);//10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a!+b!));// NAN=> Not a number
}
// add2(20);

// Default parameter function
function add3(a:number,b:number=10){
    console.log("Value of a is "+a);//10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b));// NAN=> Not a number
}
    
// add3(40);
// add3(40,60);

function add4(a:number=80,b:number){
    console.log("Value of a is "+a);//10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b));// NAN=> Not a number
}
// add4(10,50);

function add5(a:number=80,b?:number){
    console.log("Value of a is "+a);//10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b!));// NAN=> Not a number
}

// add5();




