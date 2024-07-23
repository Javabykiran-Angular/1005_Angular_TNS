// array 
// array is dynamically growable & shrinkable 
// array is homogenous as well as hetrogenous 

let a:number[]=[10,20,30,45];
let a1:number[]=[];
let a2:any[]=[2.5,'Sumit',true];
let a3=[10,'sumit'];

// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i])
// }

// console.log(a);
// console.log(a.join(' '));
// console.log(a.join());

//foreach

a.forEach((myvalue,i,arr)=>{
    console.log(myvalue+" index is "+i+" "+arr)
});



