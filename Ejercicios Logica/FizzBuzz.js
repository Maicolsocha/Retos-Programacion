/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


for(let i = 1; i <= 100; i++){
    let fizzBuzz = i;
    if(i % 3 === 0 && i % 5 == 0){
        fizzBuzz = 'fizzbuzz'
    }else if(i % 3 === 0){
        fizzBuzz = 'fizz'
    }else if(i % 5 === 0){
        fizzBuzz = 'buzz'
    }
    console.log(fizzBuzz)
}


//Optimizacion recomendada por chatgpt y leida y entendidad para proximos proyectos

function fizzBuzz(n){
    num = ''
    if( n % 3  === 0 ) num += 'fizz'
    if( n % 5  === 0 ) num += 'buzz'
    return num || String(n)

}

for(let i = 1; i<=100; i++){
    console.log(fizzBuzz(i))
}