
// array is growable & shrinkable dynamically 
// array does not have any fixed size
// array store homogenous as well as hetrogenous data type

let a1:number[]=[2,3,6,8,9];
let a2:number[]=[];
let a3=['Angular','React Js','Vue'];
let a4:any[]=[2.5,'Sumit',true];

// for(let i=0;i<a1.length;i++){
//     console.log(`
//         a[${i}]=${a1[i]}
//     `)
// }

// console.log(a3);
// console.log("Display Array using Join method "+a3.join(' # '));
// console.log("Display Array using Join method "+a3.join(' '));
// console.log("Display Array using Join method "+a3.join());

//foreach

// a1.forEach((myvalue,i)=>{
//     console.log(`
//         My Value is ${myvalue} & index is ${i}
//     `)
// })


// a1.forEach((myvalue,i,arr)=>{
//         console.log(`
//             My Value is ${myvalue} & index is ${i}
//             Array is ${arr}
//         `)
//     })


// Rest Parameter Function

function display(...item:number[]){
    console.log(item)
}

// display(45,66,88);
// display(45);
// display();

// function display1(name:string,...item:number[]){
//     console.log("Name is "+name)
//     console.log(item)

// }

// display1('Sumit',90,78,52,36,100,200)

//Push & Pop Operation
// add data dynamically 
// LIFO Principal => Last in first out 
let a:number[]=[];

a.push(78);
console.log(a);
a.push(90,89,100,300);
console.log(a);
let res=a.pop();
console.log(a);
console.log("Poped data is "+res)




