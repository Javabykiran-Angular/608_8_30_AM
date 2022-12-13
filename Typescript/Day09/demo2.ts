//json Object => java script object notation
//data is in key & value format

let jsonobj={
    id:9,
    "fname":'Sumit',
    lname:"Raokhande"
}

//1 using dot operator
//2 using square operator

//1 using dot operator
// console.log(`
//     First Name :: ${jsonobj.fname}
//     Last name  :: ${jsonobj.lname}
//     ID         :: ${jsonobj.id}
// `)

//2 using square operator
console.log(`
    First Name :: ${jsonobj["fname"]}
    Last name  :: ${jsonobj["lname"]}
    ID         :: ${jsonobj["id"]}
`)


