
let pA = []
// an= a1 +(n-1)*r
function criarProgressaoAritmeticaPositiva(a1, n ,r){
let termoQualquer = n // termo que procuro
let razao = r // razao da PA
let primeiroTermo = a1 // soma de todos os termos da PA
pA.push(primeiroTermo) // emourro o primeiro termo para a PA

let somaDosTermos = a1 // soma de termos da PA
while(pA.length < termoQualquer){
    let calculo = pA.at(-1) + razao // somo a razão ao ultimo elemento
    pA.push(calculo)
    somaDosTermos += calculo
}
console.log(`P.A de ${n} termos, e Razão:( ${r} ):${pA}.`)
console.log(`Soma dos termos da PA: ${somaDosTermos}.`)
}


criarProgressaoAritmeticaPositiva(5,10,2)



// PG - an = a1*q^(n-1)
let pG = []

function progrsaoGeometrica (n, a1, q) {

    let termoQualquer = n // termo que busco
    let razao = q // razão da PG
    let primeiroTermo = a1 // primeiro termo
    pG.push(primeiroTermo)// empurro o primeiro termo
    
    let somaDosTermos = a1 // soma de todos os termos da PG
    while(pG.length < termoQualquer) {
    let calculo = pG.at(-1) * razao // multiplico a razão pelo ultimo elemento
    pG.push(calculo) 
    somaDosTermos += calculo
    }
    console.log(`P.G de ${n} termos, e Razão:( ${q} ):${pG}.`)
    console.log(`Soma dos termos da PA: ${somaDosTermos}.`)
}

progrsaoGeometrica(3,2,3)


