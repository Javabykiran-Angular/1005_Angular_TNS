//Json Object
// Key & Value format 

let obj={
    id:9,
    "fname":'Sumit',
    lname:'Raokhande'
}

// 1 dot opeartor
// 2 square operator 

// 1 dot opeartor

// console.log(`
//     ID          :: ${obj.id}
//     First Name  :: ${obj.fname}
//     Last Name   :: ${obj.lname}    
// `);

// 2 square operator
// console.log(`
//         ===== Square Operator=======
//     ID          :: ${obj["id"]}
//     First Name  :: ${obj["fname"]}
//     Last Name   :: ${obj["lname"]}    
// `);

// Array Of Object 
let arrProduct=[    
    {
        id:9,
        "fname":'Sumit',
        lname:'Raokhande',
        month:["Jan","May","Dec"],
        country:{
            cid:1,
            cname:"India"
        },
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
        "fname":'Kiran',
        lname:'Raokhande',
        month:["Feb","Aug","Nov"],
        country:{
            cid:2,
            cname:"US"
        },
        result:[
            {
                subj:"M1",
                marks:45
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:65
            }
        ]
    },
    {
        id:3,
        "fname":'Spruha',
        lname:'Raokhande',
        month:["March","July","Oct"],
        country:{
            cid:3,
            cname:"Japan"
        },
        result:[
            {
                subj:"M1",
                marks:58
            },
            {
                subj:"M2",
                marks:65
            },
            {
                subj:"M3",
                marks:70
            }
        ]
    }

];

for(let i=0;i<arrProduct.length;i++){
    console.log(`
        ID          :: ${arrProduct[i].id} 
        First Name  :: ${arrProduct[i].fname}
        Last name   :: ${arrProduct[i].lname}
        Month       :: ${arrProduct[i].month.join(" ")} 
        Country     :: ${arrProduct[i].country.cname}  
        ==========Result=======================
    `);

    // for(let j=0;j<arrProduct[i].result.length;j++){
    //     console.log(`
    //         Subject   :: ${arrProduct[i].result[j].subj}
    //         Marks     :: ${arrProduct[i].result[j].marks}    
    //     `);
    // }

    arrProduct[i].result.forEach((item)=>{
        console.log(`
                Subject :: ${item.subj}
                Marks   :: ${item.marks}    
        `);
    });


}





