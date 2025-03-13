function verifacarStatus (nota,array) {
    testeDeNota = (array) => {
        if(nota < 38) {
            console.log(`Nota ${nota} = "Reprovado"`)
        } else if (nota >= 38 && nota <= 42){
            console.log(`${notas[0]} = Aprovado`)
        } else if (nota >= 43 && nota <= 47){
            console.log(`${notas[1]} = Aprovado`)
        } else if (nota >= 48 && nota <= 52){
            console.log(`${notas[2]} = Aprovado`)
        } else if (nota >= 53 && nota <= 57){
            console.log(`${notas[3]} = Aprovado`)
        } else if (nota >= 58 && nota <= 62){
            console.log(`${notas[4]} = Aprovado`)
        } else if (nota >= 63 && nota <= 67){
            console.log(`${notas[5]} = Aprovado`)
        } else if (nota >= 68 && nota <= 72){
            console.log(`${notas[6]} = Aprovado`)
        } else if (nota >= 73 && nota <= 77){
            console.log(`${notas[7]} = Aprovado`)
        } else if (nota >= 78 && nota <= 82){
            console.log(`${notas[8]} = Aprovado`)
        } else if (nota >= 83 && nota <= 87){
            console.log(`${notas[9]} = Aprovado`)
        } else if (nota >= 88 && nota <= 92){
            console.log(`${notas[10]} = Aprovado`)
        } else if (nota >= 93 && nota <= 97){
            console.log(`${notas[11]} = Aprovado`)
        } else if (nota >= 98 && nota <= 100){
            console.log(`${notas[12]} = Aprovado`)
        } 
        
    }
    testeDeNota()
    
}
const notas = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

verifacarStatus(38,notas)















