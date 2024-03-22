//1. call() The call() method of Function instances calls this function with a given this value 
//and arguments provided individually.
const dogOwner = "Seb"
const sebAddress = "villa del rio"

function dogGreetings (owner,address){
    console.log(`hi, my name is ${this.dogName}, and my onwer is ${owner}, in ${address}`)
}

const newFamily = {
    dogName: "Jack"
}

dogGreetings.call(newFamily,dogOwner,sebAddress)

//function.apply() recibe dos params 1. contexto de ejecucion (Objeto)
//2.array con argumentos a aplicar 

const necessaryValues = [dogOwner, sebAddress]

dogGreetings.apply(newFamily,necessaryValues)

//3. Bind crea una funcion nueva utilizando los parametros que le pasemos al method .bind()
//
const bindingDogGreetings = dogGreetings.bind(newFamily,dogOwner,sebAddress)
