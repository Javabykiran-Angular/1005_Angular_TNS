// array 
// array is dynamically growable & shrinkable 
// array is homogenous as well as hetrogenous 
var a = [10, 20, 30, 45];
var a1 = [];
var a2 = [2.5, 'Sumit', true];
var a3 = [10, 'sumit'];
// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i])
// }
// console.log(a);
// console.log(a.join(' '));
// console.log(a.join());
//foreach
a.forEach(function (myvalue, i, arr) {
    console.log(myvalue + " index is " + i + " " + arr);
});
