function planoDeAlmento(salario, plano = " ") {
    switch(plano) {
        case "a" :
            console.log(`R$ ${(salario + (salario * 0.10)).toFixed(2).replace(".",",")}`)
            break
        case "b":
            console.log(`R$ ${(salario + (salario * 0.15)).toFixed(2).replace(".",",")}`)
            break
        case "c": 
        console.log(`R$ ${(salario + (salario * 0.20)).toFixed(2).replace(".",",")}`)
        break
        default: 
        console.log("Plano indisponível")
    }
}

planoDeAlmento(2000,"c")