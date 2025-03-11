function ladosDoTriangulo (la,lb,lc) {
    this.la = la
    this.lb = lb
    this.lc = lc

    this.tipoDeTriangulo = () => {
        if (this.la == this.lb && this.lb == this.lc) {
            console.log("Equilátero: Os três lados são iguais")
        } else if (this.la == this.lb || this.lc == this.lb || this.la == this.lc) {
            console.log("Isósceles:  Dois lados iguais")
        } else if (this.la != this.lb && this.lb != this.lc) {
            console.log("Escaleno: Todos os lados são diferentes")
        }
    }
}

new ladosDoTriangulo(5,6,7).tipoDeTriangulo()
new ladosDoTriangulo(7,6,7).tipoDeTriangulo()
new ladosDoTriangulo(6,6,6).tipoDeTriangulo()