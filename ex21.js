function precificarTabelaDeIdade(idade) {

    let valorPadraoDoConvenio = 100

    const valorAdicionalTabela1 = 80
    const valorAdicionalTabela2 = 50
    const valorAdicionalTabela3 = 95
    const valorAdicionalTabela4 = 130

    if (idade < 10) {
        valorPadraoDoConvenio += valorAdicionalTabela1
        console.log(`tabela 1: R$${valorPadraoDoConvenio.toFixed(2)}.`)
    } else if (idade >= 10 && idade <= 30) {
        valorPadraoDoConvenio += valorAdicionalTabela2
        console.log(`tabela 2: R$${valorPadraoDoConvenio.toFixed(2)}.`)
    } else if (idade > 30 && idade >= 60) {
        valorPadraoDoConvenio += valorAdicionalTabela3
        console.log(`tabela 3: R$${valorPadraoDoConvenio.toFixed(2)}.`)
    } else if (idade > 60) {
        valorPadraoDoConvenio += valorAdicionalTabela4
        console.log(`tabela 4: R$${valorPadraoDoConvenio.toFixed(2)}.`)
    }
}

precificarTabelaDeIdade(29)