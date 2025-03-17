function verificarNegativos(array) {
    
    let negativos = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < 0) {
            negativos += 1
        }
    }
    console.log(`Há ${negativos} números negativos`)
}

let lista = [1, 2, -3, 4 - 5]
verificarNegativos(lista)
