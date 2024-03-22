//Explicit Typ Casting
const str = '6969'
const int = parseInt(str)
console.log(typeof int, int)

const Strfloat = '34.56454'
const float = parseFloat(Strfloat)
console.log(typeof float, Strfloat)

const binary = '101010'
const decimal = parseInt(binary, 2)
console.log(decimal, typeof decimal)


//implicit conversion
const Test = 2
const boolTest = true

console.log(Test + boolTest) //true a numero

const sum ='5'+ 3
console.log(sum, typeof sum) //string concatena con operador +

const SumWithbool = '3' + true
console.log(SumWithbool, typeof SumWithbool) //string concatena con operador +

const stringValue = '10'
const numberValue = 10
const boolValue =  true
console.log('------------------------')
console.log(stringValue + stringValue )//concat
console.log(stringValue + numberValue )//concat
console.log(stringValue + boolValue )//concat
console.log('------------------------')
console.log(numberValue + stringValue ) //concat
console.log(numberValue + numberValue ) //number
console.log(numberValue + boolValue ) //number
console.log('------------------------')
console.log(boolValue + stringValue ) //concat
console.log(boolValue + numberValue )//number
console.log(boolValue + boolValue ) //number
