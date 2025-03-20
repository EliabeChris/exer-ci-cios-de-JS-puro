let vetorUm = ["a", "b", "c"]
let vetorDois = [1, 2, 3]


function trocarElemtnos(vetorString,vetorNum) {

    for (let i = 0; i <= vetorString.length; i++) {
        i = 0
        vetorNum.push(vetorString.shift(vetorString[i]))
    }

    for (let i = 0; i < vetorNum.length; i++) {
        vetorString.push(vetorNum.shift(vetorNum[i]))
    }

    console.log(`vetorString = ${vetorString}`)
    console.log(`vetorNum = ${vetorNum}`)
}

trocarElemtnos(vetorUm,vetorDois)

