let x = 1
let y = 'hola'
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)
//solo se declara con let por primera vez una variable
//Paso por valor, no se almacenan en el mismo sitio de memoria "crean un dato nuevo"
a = 9
b = 'Theo'
c = undefined

//paso por referencia

let test_array = ['apple','onion',]
//metodo push = append() python
test_array.push('tomatoe')
console.log(test_array)

/* En el paso por referencia, se pasa la referencia a la ubicación en memoria de la
 variable como argumento a la función. Cualquier modificación realizada dentro de la 
 función afecta directamente a la variable original fuera de la función. */

 let desk = ['keyboard','mouse','notebook']
 let CopyDesk = desk

 desk.push('pencil')

 console.log(desk, CopyDesk)
