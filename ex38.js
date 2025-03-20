function imprmirImpares(inicio, fim) {
    let contador = 0

    if (fim > inicio) {
        while (contador < fim) {
            if (inicio == 0) {
                console.log(inicio)
                inicio++
            }
            if (Number.isInteger(contador / 2) == false) {
                console.log(contador)
            }
            if (contador == (fim - 1)) {
                console.log(fim)
            }
            contador++
        }
    } else if (inicio > fim) {
        while (contador < inicio) {
            if (fim == 0) {
                console.log(fim)
                fim++
            }
            if (Number.isInteger(contador / 2) == false) {
                console.log(contador)
            }
            if (contador == (inicio - 1)) {
                console.log(inicio)
            }
            contador++
        }
    }
}


imprmirImpares(0,10)