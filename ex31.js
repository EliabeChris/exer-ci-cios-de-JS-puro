function calcularMediaAritmeticaDaLista(lista){
    let array = lista
    let totalLista = 0
    let quantidadeDeElementos = 0
    for (let i =0; i< array.length; i++) {
        totalLista += Number(array[i])
        quantidadeDeElementos += 1
        
    }
    let calculoDeMedia = totalLista / quantidadeDeElementos
    console.log(`Média é ${calculoDeMedia}`)
}

let notas = [4.5,6.7,7.8,3.6,8.9]




calcularMediaAritmeticaDaLista(notas)