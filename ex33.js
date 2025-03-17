const vetorInteiro = [1, 2, 3, 4]
const vetorString = [" um ", " dois ", " tres ", " quatro "]
const vetorDouble = [1.1, 2.2, 3.3, 4.4]


function concatenarVetores(v1,v2,v3) {
const vetorResultado = []
let concatenados = " "


for (let i = 0; i < v1.length && v2 && v3; i++) {
    let [vUm , vDois , vTres]  = [v1[i], v2[i], vetorDouble[i]]
    concatenados += vUm + vDois +vTres
    vetorResultado.push(concatenados)
    concatenados = " "
    }
    console.log(vetorResultado)
}

concatenarVetores(vetorInteiro, vetorString, vetorDouble)

