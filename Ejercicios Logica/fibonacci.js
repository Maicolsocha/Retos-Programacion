

const fibo = (limite) => {

  let resultado = 0
  let actual = 1
  let suma = 1

  for (let i = 0; i <= limite; i++) {
    console.log(resultado)
    resultado = actual + suma
    suma = actual
    actual = resultado

  }
}

fibo(50);