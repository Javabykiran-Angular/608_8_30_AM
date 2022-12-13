//Splice method
//u can add a data on particular index or u can remove a data from particular index 
var a = [11, 20, 56, 78, 63];
// console.log(a);
// a.splice(3,0,100);
// console.log(a);
// a.splice(2,0,200,300);
// console.log(a);
// a.splice(4,1);
// console.log(a);
// a.splice(3,2);
// console.log(a);
// a.splice(2,1,500);
// console.log(a);
// console.log(a.length);
// a.splice(a.length-1,1,700,1000);
// console.log(a);
//slice method
// it copy a section of data & return a new array
var str = ['Core java', 'Advanced Java', 'Spring Boot', 'Angular 12', 'JSP', 'Jenkings', 'Docker', 'AWS'];
var temp = str.slice(1, 7);
console.log("Original Array  \n     ".concat(str, " "));
console.log("Copies Array \n    ".concat(temp, " "));
var temp1 = str.slice(1);
console.log("Copies Array \n    ".concat(temp1, " "));
