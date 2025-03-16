function valorASerPago(mes) {
    const reajuste = 5
    const anuidadeDaAssociacao = 100
    const porcentagem = (1 + (reajuste / 100))

    const janeiro = anuidadeDaAssociacao
    const fevereiro = janeiro * porcentagem
    const marco = fevereiro * porcentagem
    const abril = marco * porcentagem
    const maio = abril * porcentagem
    const junho = maio * porcentagem
    const julho = junho * porcentagem
    const agosto = julho * porcentagem
    const setembro = agosto * porcentagem
    const outubro = setembro * porcentagem
    const novembro = outubro * porcentagem
    const dezembro = novembro * porcentagem

    switch (mes) {
        case 1:
            console.log(`Janeiro: R$${janeiro.toFixed(2)}`)
            break
        case 2:
            console.log(`Fevereiro: R$${fevereiro.toFixed(2)}`)
            break
        case 3:
            console.log(`Marco: R$${marco.toFixed(2)}`)
            break
        case 4:
            console.log(`Abril: R$${abril.toFixed(2)}`)
            break
        case 5:
            console.log(`Maio: R$${maio.toFixed(2)}`)
            break
        case 6:
            console.log(`Junho: R$${junho.toFixed(2)}`)
            break
        case 7:
            console.log(`Julho: R$${julho.toFixed(2)}`)
            break
        case 8:
            console.log(`Agosto: R$${agosto.toFixed(2)}`)
            break
        case 9:
            console.log(`Stembro: R$${setembro.toFixed(2)}`)
            break
        case 10:
            console.log(`Outubro: R$${outubro.toFixed(2)}`)
            break
        case 11:
            console.log(`Novembro: R$${novembro.toFixed(2)}`)
            break
        case 12:
            console.log(`Dezembro: R$${dezembro.toFixed(2)}`)
            break
        default:
            console.log("Mês inválido!")
    }

}

valorASerPago(11)



