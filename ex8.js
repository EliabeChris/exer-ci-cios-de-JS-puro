function mostrarDados(array) {
    
let recorde = 0
let piorJogo = 0
function recoresEPiorJogo () {
        for (let i = 0; i < array.length; i++) {
            if ( array[i] >= 20) {
                recorde ++
                
            }
        }
        
        for (let i =0 ; i < array.length; i++) {
            if(array[i] > 0) {
                [n]=[i]
                piorJogo = n
            }
        }
        recordesBatidosEPiorJogo.push(recorde, piorJogo)

        console.log(recordesBatidosEPiorJogo)
        
    }
    recoresEPiorJogo()
    
}

let recordesBatidosEPiorJogo = []

const jogos = "10 20 25 30 1 5 40".split(" ")

 mostrarDados(jogos)
