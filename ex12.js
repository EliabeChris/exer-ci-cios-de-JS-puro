function fatorial(num) {
    let fatorial = num
    let antecessor = num -1
    let resultado = fatorial * antecessor 
    while (antecessor > 1) {
        antecessor --
        resultado *= antecessor

    }
    console.log(resultado)
}

fatorial(7)