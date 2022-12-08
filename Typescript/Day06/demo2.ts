
//   add1();
//function
//1 function without parameter & without return type
//2 function with parameter & without return type
//3 function without parameter & with return type
//4 function with parameter & with return type

//1 function without parameter & without return type

    function add1(){
        console.log("First type function is called..")
      
    }

//2 function with parameter & without return type

    function add2(a:number,b:number){
            console.log("Addition is "+(a+b))
    }

    // add2(2,3);


//3 function without parameter & with return type

function add3():number{
    return (8+8);
}

// let res=add3();
// console.log("Result "+res);
  
//4 function with parameter & with return type

function add4(a:number,b:number):number{
    return (a+b);
}

console.log("Additio is "+add4(4,5))
