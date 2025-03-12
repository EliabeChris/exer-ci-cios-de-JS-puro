
function correcaoJusrosSimpes(m, i, t) {
    console.log(`Juros simples`)

    const meses = t
    const jurosEmporcetnagem = i / 100
    const montante = m
    let contadorDeMeses = 0
    let totalAcumulado = m

    while (contadorDeMeses < meses) {
        contadorDeMeses++
        totalAcumulado += (montante * jurosEmporcetnagem)
        console.log(`R$${(totalAcumulado).toFixed(2).replace(".", ",")}`)
    }

}

correcaoJusrosSimpes(100, 10, 2)

// 

function correcaoJurosCompostos(m, i, t) {
    console.log(`Juros compostos`)
    const meses = t
    const jurosEmPorcentagem = i / 100 // transformado numero inteiro em porcentagem.
    let contadorDeMeses = 0
    let montante = m

    while (contadorDeMeses < meses) {
        contadorDeMeses++
        montante += (montante * jurosEmPorcentagem)
        console.log(`R$${(montante).toFixed(2).replace(".", ",")}`)
    }

}

correcaoJurosCompostos(100, 10, 3)

