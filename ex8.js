let string = "10 20 30 0 20 10 25 30"

let novoArray = string.split(" ") 
let maiorPontuacao = Math.max.apply(null,novoArray)
let menorPontuacao = Math.min.apply(null,novoArray)
let menorPontuacaoERecordesBatidos= []

let contador = 0
let indice = 0
while(contador < novoArray.length){ 
    
    if(novoArray[indice] == menorPontuacao) {
        menorPontuacaoERecordesBatidos.push(novoArray.indexOf(novoArray[indice]))
    }
    indice++
    contador++
}
let recordeBatidos = 0
for(let i = 0; i< novoArray.length; i++) {
    if(novoArray[i] > novoArray[1]) {
        recordeBatidos += 1
    }
    
}
menorPontuacaoERecordesBatidos.push(recordeBatidos)

console.log(menorPontuacaoERecordesBatidos)
