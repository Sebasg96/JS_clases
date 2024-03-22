//typeof operator to return the type 

const StringPrimitive = 'String Primitive'
console.log(typeof StringPrimitive)

//object strings
//With new we create an object
const ObjectString = new String('Object String')
console.log(typeof ObjectString)

//Accessing characters - String Methods
const StringTest = 'hi this is a test string'
console.log(StringTest[3])
console.log(StringTest.charAt(3))
console.log(StringTest.indexOf('test'))
console.log(StringTest.lastIndexOf('i'))
console.log(StringTest.slice(1,6))
console.log(StringTest.length) //PROPERTY
console.log(StringTest.toUpperCase())
console.log(StringTest.toLowerCase())
console.log(StringTest.split(' ')) // returns an array 
console.log(StringTest.split(' ')[1]) // Accessing a possition in the resulting array
console.log(StringTest.replace('test','prueba')) //first param change for second param
const StringWithSpaces = '   hello world   '
console.log(StringWithSpaces)
console.log(StringWithSpaces.trim()) //str.trim()) removes spaces at  beggining and  end




