const stringUm = "aBCçh"
const stringDois = "abCah"

function compararElemento (elemento1,elemento2) {
    

        for (let i = 0; i < elemento1.length && elemento2.length; i++) {
            setTimeout(()=> { 
                console.log(`${elemento1[i]} = ${elemento2[i]}? : ${(elemento1[i].charCodeAt(elemento1[i]) == elemento2[i].charCodeAt(elemento2[i]))}`)
             },i* 1000)
            }
        }
            

compararElemento(stringUm, stringDois)