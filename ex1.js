

function operacaoArtitmetica (a,b) {
    this.a = a
    this.b = b

    this.soma = () => {
        console.log( a + b)
    }
    this.sub = () => {
        console.log( a - b)
    }
    this.mult = () => {
        console.log( a * b)
    }
    this.divi = () => {
        console.log( a / b)
    }
}


const calculo = new operacaoArtitmetica(5,6)
calculo.soma()
calculo.sub()
calculo.mult()
calculo.divi()
