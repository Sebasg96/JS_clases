//social media profile

//1. user info
const username = 'Seb'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true


//2. address
const address = {
    street : '123 main',
    city : 'Techville',
    state: 'Codingland',
    zipcode : 110311
}

//3. hobbies

const hobbies = ['coding', 'testing', 'weightlifting']

//4. personalized BIO

const personalizedBio = `Hi, i'm ${fullName},
i'm ${age} years old.
i live in ${address.city},
in the state of ${address.state}
i like ${hobbies[0]}`

console.log(personalizedBio)