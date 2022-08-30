// ///////////// Class ///////////////////////////////

const person = {
    name: 'Pawan',
    age: 30,
    isMale: true,
    address: {
        permanent: {
            houseNo: '37A',
            state: 'Delhi',
            country: 'India',
            pincode: 110062,
            nearBy: 'saket'
        },
        office: {}
    },
    children: [
        { name: 'tinku', age: 5 },
        { name: 'twinkal', age: 2 }
    ]
}


// ///////////////////////////  Self practice /////////////

//////////////Doubts:

// Height
// Weight
// Phone number
// Date of birth
// Salary



const User = {
    name: "Ermelinda R Combs",
    age: 25,
    gender: "Female",
    birthDate: "5/20/1997",
    telephone: "605-869-6462",
    mobile: "605-848-3202",

    basicInfo: {
        hairColor: "Brown",
        bloodType: "B+",
        weight: "126.3 pounds",
        //   Height: " 5' 3" "

        address: {
            permanent: {
                houseNo: '37A',
                state: 'Delhi',
                country: 'India',
                pincode: 110062,
                nearBy: 'saket'
            },
            office: {
                houseNo: '37A',
                state: 'Delhi',
                country: 'India',
                pincode: 110062,
                nearBy: 'saket'
            }
        }

    },

    employement: {
        employmentStatus: "Part-time work",
        monthlySalary: "$2,400",
        companyName: "AdventureSports!",
        Industry: "Healthcare Support Occupations"
    }

}

console.log(User);