// datos primitivos -> inmutables JS crea un nuevo valor para esa variable no modifica el original
let number = 23
number += 10
console.log(number)

number = 'koala'
console.log(number)

let IsTrue = true
IsTrue = false
console.log(IsTrue)

//datos complejos - mutables (modifica el dato original)
//objeto
let user = {name : "Juan",
age : 15,
profession : 'tester'}
user.age = 27
console.log(user)

//array 
let fruits = ['apple','peach','pineapple','tomatoe']
fruits[0] = 'watermelon'
console.log(fruits)

// function
function changeName(object){
    object.name = 'new name'
}

changeName(user)
console.log(user)