function operacaoAritmetica(num1,operador = " ",num2){
    switch(operador) {
        case "*":
            console.log(num1 * num2)
            break
        case "+":
            console.log(num1 + num2)
            break
        case "-":
            console.log(num1 - num2)
            break
        case "/":
            console.log(num1 / num2)
            break
            default: 
            console.log("Operador inválido!")
    }
}

operacaoAritmetica(4,"/",2)