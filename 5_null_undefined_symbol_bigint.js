//Null
const CdDocumento = null
console.log(typeof CdDocumento)

//Undefined
let name
console.log(name)

//Symbol Every Symbol() 
//call is guaranteed to return a unique Symbol

const symbol1 = Symbol(12435)
const symbol2 = Symbol(12435)

console.log(symbol1 == symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = 696969

console.log(user, ID)

//bigint n at the end
const Bignumber = 121213414423252526536345424121312321313131234565n
console.log(Bignumber)

