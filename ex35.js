let vetorPilha = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10]
let vetorAdiciona = [11,12,13,14,15,16,17,18,19,20]


function transferenciaDeDados(vetor1, vetor2) {
    
    let variavelDeTransferencia =Number(" ")

    for (let i = 0; i <= vetor1.length; i++) {
        variavelDeTransferencia += Number(vetor1[0])
        vetor1.shift(0)
        i = 0
        vetor2.push(variavelDeTransferencia)
        variavelDeTransferencia = Number (" ")

        }
    console.log(vetorPilha)
}

transferenciaDeDados(vetorAdiciona, vetorPilha)
