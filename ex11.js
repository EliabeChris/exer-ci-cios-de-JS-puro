function anoBisexto (ano) {
    let testeDoAno = ano / 4
    if(Number.isInteger(testeDoAno)) {
        console.log(`${Number.isInteger(testeDoAno)}. ${ano} é Bisexto.`)
    } else {
        console.log(`${Number.isInteger(testeDoAno)}. ${ano} não  é Bisexto.`)
    }
}

anoBisexto(2024)