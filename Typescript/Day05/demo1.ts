//variable

// var a1;
// var a1,a2;
// var a_2,a$3;
// var a 5;

// data types
// number(int ,long,float,double,short),string(''/""/``),boolean(true/false)
// any(number,string,boolean)
//void => neutaral data type => it does not point anything
//misec. data types null & undefined => it store value as well as data type 

var a1:number=10;     // forward declaration & defination

// console.log('Value of a1 is '+a1);
// console.log("Value of a1 is "+a1);
// console.log(`Value of a1 is ${a1} `+a1);

var a2!:number;
// console.log('value of a2 '+a2);
// var str!:string;
// console.log("Value is str "+str);
// var myany;
// console.log(`Value of myany is ${myany}`)
var str1:any;
str1=20;
console.log("VALUE OF str1 "+str1)
str1="Sumit";
console.log("VALUE OF str1 "+str1)
str1=true;
console.log("VALUE OF str1 "+str1)

var str3=2.5;
str3=52;
// str3='';

//type assertion
// any/unknown/object
var s:any;

// it has 2 way to implement
//1 angle bracket syntax
//2 as syntax

//1 angle bracket syntax
var temp=(<string> s);
// temp.


//2 as syntax

   var temp2=(s as string);
//    temp2.

//Operators
//Airthamthic => +,*,/,%,-
//logical => &&,||,!
//relational => <,>,<=,=>,!=,==(it checks only value),===(Strongly equality=> it checks value as well as data type )
//bitwise => &,|,^,~,>>,<<
//unaray => inc/dec /pre/dec ++a,a--
//ternary => condition?expression1:expresson2
//assignmaent => =,+=,-=,*=,/=,%=