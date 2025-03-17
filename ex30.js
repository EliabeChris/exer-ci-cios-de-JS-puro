 function maiorEMenor (teto){
    let numeros =[]
    let contador = 0 
    while(numeros.length < teto) {
        contador ++
        numeros.push(contador)
    }

    console.log(`Maior: ${Math.max(...numeros)}. Menor: ${Math.min(...numeros)}`) 
}

maiorEMenor(5)