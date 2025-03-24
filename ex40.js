let notas = []

function conceitoDenotas(lista) {

    let notaASerInserida = 0.0
    let contador = 100
    while (contador >= lista.length) {
        lista.push(notaASerInserida.toFixed(1))
        notaASerInserida += 0.1
    }
    // console.log(lista)

    let index = 0
    let incrementador = 0
    while (incrementador < lista.length) {
        if (lista[index] >= 0.0 && lista[index] <= 4.9) {
            console.log(`${lista[index].replace(".", ",")} = D`)
        }
        if (lista[index] >= 5.0 && lista[index] <= 6.9) {
            console.log(`${lista[index].replace(".", ",")} = C`)
        }
        if (lista[index] >= 7.0 && lista[index] <= 8.9) {
            console.log(`${lista[index].replace(".", ",")} = B`)
        }
        if (lista[index] >= 9.0 && lista[index] <= 10.0) {
            console.log(`${lista[index].replace(".", ",")} = A`)
        }
        index += 1
        incrementador += 1
    }
}

conceitoDenotas(notas)