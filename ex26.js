function verificarTodosOsPares (num) {
    let numero = num
    let contador = 0
    while (contador <= numero) {
        let calculo = contador / 2
        if(Number.isInteger(calculo)) {
            console.log(`${contador} é par!`)
        }
         contador++
    }
}

verificarTodosOsPares(100)