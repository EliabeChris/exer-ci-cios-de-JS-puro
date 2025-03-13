function divisivelPor3 (numero) {
  let dividido = numero / 3
  if(Number.isInteger(dividido)) {
    console.log(`${Number.isInteger(dividido)} : É inteiro`)
  } else {
    console.log(`${Number.isInteger(dividido)} : Não é inteiro`)
  }
}

divisivelPor3(9)
