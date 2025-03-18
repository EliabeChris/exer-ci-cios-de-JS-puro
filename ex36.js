let multiplicarTodosOsNumeros = [1,2,3,4,5]
let multiplicarAcimaDoEspecificado = [1,2,3,4,5,6,7,8,9,10]

let todosOsMultiplicados = []
let todosMaioresQueOEspecificado = []

function multiplicarTodos (numeroInteiro, vetor) {
    let produto = 0
    for(let i = 0; i < vetor.length; i++){
        produto += numeroInteiro * vetor[i]
        todosOsMultiplicados.push(produto)
        produto = 0
    }
    console.log(todosOsMultiplicados)
}

function multiplicarMaioresQue (numeroInteiro, vetor) {
    let produto = 0 
    for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] > 5){
        produto += numeroInteiro * vetor[i]
        todosMaioresQueOEspecificado.push(produto)
        produto = 0 }
    }
    console.log(todosMaioresQueOEspecificado)
}


multiplicarTodos(5,multiplicarTodosOsNumeros)
multiplicarMaioresQue(2,multiplicarAcimaDoEspecificado)
