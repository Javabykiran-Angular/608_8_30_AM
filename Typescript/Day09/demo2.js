//json Object => java script object notation
//data is in key & value format
var jsonobj = {
    id: 9,
    "fname": 'Sumit',
    lname: "Raokhande"
};
//1 using dot operator
//2 using square operator
//1 using dot operator
// console.log(`
//     First Name :: ${jsonobj.fname}
//     Last name  :: ${jsonobj.lname}
//     ID         :: ${jsonobj.id}
// `)
//2 using square operator
console.log("\n    First Name :: ".concat(jsonobj["fname"], "\n    Last name  :: ").concat(jsonobj["lname"], "\n    ID         :: ").concat(jsonobj["id"], "\n"));
