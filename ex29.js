function intervalos (limiteVetor,inicio,fim) {
let vetor = []
let limite = limiteVetor
let contador = 0
while(vetor.length < limite){
    contador++
    vetor.push(contador)
}

let dentro = []
let fora = []


if(fim > limiteVetor) {
    console.log("além do limite!")
}

for(let i = 0;i < vetor.length; i++) {
    if(vetor[i] >= inicio && vetor[i] <= fim){
        dentro.push(vetor[i])
    }
}

for (let i = 0; i< vetor.length; i++) {
    if(vetor[i] < inicio) {
        fora.push(vetor[i])
    }
    if(vetor[i] > fim) {
        fora.push(vetor[i])
    }
}
console.log(` Limite: ${limite}. dentro do intervalo: ${dentro.length} Fora do intervalo: ${fora.length}`)
}

intervalos(10,1,10)