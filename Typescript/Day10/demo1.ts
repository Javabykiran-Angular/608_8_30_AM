//Array Of Object



let arrobj=[
    {
        id:9,
        fname:'Sumit',
        lname:'Raokhande',
        country:{
            cid:2,
            cname:'India'
        },
        month:['Jan','May','Dec'],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:50
            }
        ]
    },
    {
        id:3,
        fname:'Spruha',
        lname:'Raokhande',
        country:{
            cid:3,
            cname:'US'
        },
        month:['Feb','July','Sept'],
        result:[
            {
                subj:"M1",
                marks:49
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:70
            }
        ]
    },
    {
        id:6,
        fname:'Kiran',
        lname:'Raokhande',
        country:{
            cid:5,
            cname:'Japan'
        },
        month:['April','Aug','Oct'],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:75
            }
        ]
    }
]

for(let i=0;i<arrobj.length;i++){


    console.log(`
        ID         :: ${arrobj[i].id}
        First Name :: ${arrobj[i].fname}
        Last Name  :: ${arrobj[i].lname}
     Country Name  :: ${arrobj[i].country.cname} 
        Month      :: ${arrobj[i].month.join(" ")}
        -----------Result--------------  
    `);

    for(let j=0;j<arrobj[i].result.length;j++){
        console.log(`
            Subject  :: ${arrobj[i].result[j].subj}
            marks    :: ${arrobj[i].result[j].marks}
        `)
    }

}