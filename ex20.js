function contarNotas(solicitcaoSaldo) {
    
    let contador = solicitcaoSaldo
    
    let notasDe100 = 0
    let notasDe50 = 0
    let notasDe20 = 0
    let notasDe10 = 0
    let notasDe5 = 0
    let notasDe2 = 0
    let moedasDe1 = 0
    
    while(contador > 0) {
        if(contador >= 100) {
           notasDe100 += Math.floor(contador/100)
           contador -= notasDe100 * 100
           console.log(`${notasDe100} nota(s) de 100`)
        }
        if(contador >= 50 && contador < 100) {
            notasDe50 += Math.floor(contador/50)
            contador -= notasDe50 * 50
            console.log(`${notasDe50} nota(s) de 50`)
         }
         if(contador >= 20 && contador < 50) {
            notasDe20 += Math.floor(contador/20)
            contador -= notasDe20 * 20
            console.log(`${notasDe20} nota(s) de 20`)
         }
         if(contador >= 10 && contador < 20) {
            notasDe10 += Math.floor(contador/10)
            contador -= notasDe10 * 10
            console.log(`${notasDe10} nota(s) de 10`)
         }
         if(contador >= 5 && contador < 10) {
            notasDe5 += Math.floor(contador/5)
            contador -= notasDe5 * 5
            console.log(`${notasDe5} nota(s) de 5`)
         }
         if(contador >= 2 && contador < 5) {
            notasDe2 += Math.floor(contador/2)
            contador -= notasDe2 * 2
            console.log(`${notasDe2} nota(s) de 2`)
         }
         if(contador >= 1 && contador < 2) {
            moedasDe1 += Math.floor(contador/1)
            contador -= moedasDe1 * 1
            console.log(`${moedasDe1} moeda(s) de 1`)
         }
        
    }
    }
    
    contarNotas(200)