//Array Of Object
var arrobj = [
    {
        id: 9,
        fname: 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'India'
        },
        month: ['Jan', 'May', 'Dec'],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 50
            }
        ]
    },
    {
        id: 3,
        fname: 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'US'
        },
        month: ['Feb', 'July', 'Sept'],
        result: [
            {
                subj: "M1",
                marks: 49
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 70
            }
        ]
    },
    {
        id: 6,
        fname: 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 5,
            cname: 'Japan'
        },
        month: ['April', 'Aug', 'Oct'],
        result: [
            {
                subj: "M1",
                marks: 50
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 75
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        ID         :: ".concat(arrobj[i].id, "\n        First Name :: ").concat(arrobj[i].fname, "\n        Last Name  :: ").concat(arrobj[i].lname, "\n     Country Name  :: ").concat(arrobj[i].country.cname, " \n        Month      :: ").concat(arrobj[i].month.join(" "), "\n        -----------Result--------------  \n    "));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n            Subject  :: ".concat(arrobj[i].result[j].subj, "\n            marks    :: ").concat(arrobj[i].result[j].marks, "\n        "));
    }
}
