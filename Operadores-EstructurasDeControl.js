// // Operadores Aritméticos
let suma = `Esto es suma ${5 + 5}`;
let resta = `Esto es resta ${6 - 9}`;
let multiplicacion = `Esto es multiplicacion ${7 * 8}`;
let division = `Esto es division ${25 / 0}`;
let modulo = `Esto es modulo ${10 % 2}`;
let potencia = `Esto es potencia ${2 ** 3}`;
let incremento = `Esto es incremento ${suma++}` // Se puede colocar antes o despues de la variable
let decremento = `Esto es decremento ${resta--}` // Se puede colocar antes o despues de la variable


// // Operadores Logicos

let and = `Operador AND ${true && false}`; // Logico y las dos expresiones deben ser verdaderas
let or = `Operador or ${true || true}` // Logico o al menos una de las expresiones debe ser verdadera
let NOT = `Operador NOT ${!true}` // Logico NOT invierte el valor de la expresion

// // Operadores De Comparacion

let mayorQue = `Esto es mayor que ${7 > 3}`
let menorQue = `Esto es menor que ${7 < 0}`
let mayorOIgualQue = `Esto es mayor o igual que ${7 >= 7}`
let igualQue = `Esto es igual que ${7 == 7}`
let igualestricto = `Esto es igual estricto que ${7 === 7}` // esta igualdad debe ser el mismo valor y el mismo tipo

// //Estructuras de control---------------------------------------
// Condicionales
let condicion = 3 > 2
if(condicion){
    console.log(`La condicion dada es verdad ${condicion}`)
}else{
    console.log(`En donde la condicion dada es falsa`)
}

// //Ciclo For(Se repite una cantidad de veces dada, siempre y cuando la condicion sea verdadera, cuando es false sale del ciclo para dar paso a lo que sigue del codigo)
// //Tablas de multiplicar
tabla = 5;
hasta = 10;
for(let i = 1; i<= hasta; i++){
    console.log(`${tabla} X ${i} = ${tabla*i}`)
}

// //forEach - Utilizado para arrays no para objetos y sirve para hacer algo con cada algo de esa informacion

const nombres = ['Emilio', 'Ramiro', 'Maicol', 'Eustacio']

nombres.forEach(function(nombre, indice, completo){
    console.log(nombre)
    console.log(indice)
    console.log(completo)
})

// For in

//Ciclo While(Al igual que en el ciclo for la diferencia es la forma de escribirse como en el siguiente ejemplo)

let tabla = 6;
let hasta = 10;
let comienzo = 1;
while(comienzo <= hasta){
    console.log(`${tabla} X ${comienzo} = ${tabla*comienzo}`)
    comienzo++
}

// //Switch 

switch(x){
    case 1 : console.log('Caso 1')
    break
    case 2 : console.log('Caso 2')
    break
    default : console-log('Caso por defecto')
}

