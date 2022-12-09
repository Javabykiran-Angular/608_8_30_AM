//Anonymous function
// function does not having any name 

    let temp1=function (){
        console.log("first type of Anonymous function is called ")
    }

    // temp1();

    let temp2=function (a:number,b:number):number{
        return (a+b);
    }


    // let res=temp2(4,5)
    // console.log(res);

    //Fat arrow function/Arrow function 
    // it is advanced version of Anonymous function

       let temp3= ()=>{
            console.log("Fat arrow function is called ")
        }

        // temp3();

       let temp4= (a:number,b:number):number=>{
            return (a+b)
        }

        // console.log(`
        //         Addition is ${temp4(7,10)}
        // `);


        // Optional parameter function

        function add1(a:number,b?:number){
                console.log("Value of A is "+a) // 10
                console.log("Value of B is "+b) //undefined
                console.log("Addition  of A+B is "+(a+b!)) //NAN => Not a number

        }

        // add1(10);
        // add1(10,20);

        
        function add2(a?:number,b?:number){
            console.log("Value of A is "+a) // 10
            console.log("Value of B is "+b) //undefined
            console.log("Addition  of A+B is "+(a!+b!)) //NAN => Not a number

    }

    // add2();

    // add2(45,50);


    //default parameter function

    function add3(a:number,b:number=2){
        console.log("Value of A is "+a) // 10
        console.log("Value of B is "+b) //undefined
        console.log("Addition  of A+B is "+(a!+b!)) //NAN => Not a number

    }

    // add3(10,45);


    function add4(a:number=9,b:number){
        console.log("Value of A is "+a) // 10
        console.log("Value of B is "+b) //undefined
        console.log("Addition  of A+B is "+(a!+b!)) //NAN => Not a number

    }

    // add4(7,8);

    
    function add5(a:number=9,b?:number){
        console.log("Value of A is "+a) // 10
        console.log("Value of B is "+b) //undefined
        console.log("Addition  of A+B is "+(a!+b!)) //NAN => Not a number

    }

    // add5();



