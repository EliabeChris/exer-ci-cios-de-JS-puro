function paresEImpares(numero) {
let inteirosParesEImpares = []
let limite = numero
let contador = 0

let pares = 0
let impares = 0
while (contador < limite) {
    contador ++
    inteirosParesEImpares.push(contador)
    if(Number.isInteger(contador/2)) {
       pares += 1
    } else {
        impares += 1
    }

}

console.log(`${pares} são pares, ${impares} são ímpares`)
}

paresEImpares(100)