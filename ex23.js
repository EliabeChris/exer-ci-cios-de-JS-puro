const peso1 = 4
const peso2 = 3
const peso3 = 3
// pesos
const alunos = [{nome: "Pedro", codigo: 1,nota1: 4.7, nota2: 5.5, nota3: 3.3},
    {nome: "Ana", codigo:2, nota1: 7.3, nota2: 8.5, nota3: 9.0},
    {nome: "Carol", codigo: 3,nota1: 5.7, nota2: 7.5, nota3: 8.3},
    {nome: "Joana", codigo: 4,nota1: 4.7, nota2: 5.5, nota3: 3.3},
    {nome: "Julia", codigo: 5,nota1: 4.7, nota2: 5.5, nota3: 3.3},
    {nome: "Julio", codigo: 6,nota1: 3.7, nota2: 6.5, nota3: 2.3},
    {nome: "Cristina", codigo: 7,nota1: 9.7, nota2: 8.5, nota3: 1.3},
    {nome: "Jorge", codigo: 8,nota1: 1.7, nota2: 6.5, nota3: 6.3},
    {nome: "Gabriela", codigo: 9,nota1: 8.7, nota2: 5.5, nota3: 9.3},
    {nome: "Fabio", codigo: 10,nota1: 3.7, nota2: 9.5, nota3: 6.3},
    {nome: "Fabiola", codigo: 11,nota1: 6.7, nota2: 2.5, nota3: 9.3}]



function pesquisaCodigoDoAluno (pesquisaCodigo) {
    
    let codigoDoAluno = pesquisaCodigo
    let codigoExpresso = codigoDoAluno
    
    console.log(codigoExpresso)
   
    
// Pesquisa do códgo do aluno na lista



while (codigoExpresso >= -1){


    if(codigoExpresso > 0) {
    let nome = " "
    let p1 = peso1
    let p2 = peso2
    let p3 = peso3
    
    let n1 = 0
    let n2 = 0
    let n3 = 0
        for(let i = 0; i< alunos.length; i++) {
            if(alunos[i].codigo == codigoExpresso){
                nome += (alunos[i].nome)
                n1 += (alunos[i].nota1)
                n2 += (alunos[i].nota2)
                n3 += (alunos[i].nota3)
                
            }
        }
        
        let mediaPonderadaCalculo = ((n1*p1)+(n2*p2)+(n3*p3)) / (p1 + p2 + p3)

        if(mediaPonderadaCalculo >=5){
        
        console.log(`Código do aluno: ${codigoExpresso}. Nome: ${nome}. Notas: 1: ${n1}  2: ${n2}  3: ${n3}. Média: ${mediaPonderadaCalculo.toFixed(2)} Status: APROVADO!`) 
        } else if(mediaPonderadaCalculo <= 5) {

            console.log(`Código do aluno: ${codigoExpresso}. Nome: ${nome}. Notas: 1: ${n1}  2: ${n2}  3: ${n3}. Média: ${mediaPonderadaCalculo.toFixed(2)} Status: REPROVADO!`) 
            
        } else {
            "Erro"
        }
        
    } else if(codigoExpresso == -1) {
        console.log("Código -1: Inválido!")
    } 
    
    codigoExpresso--
    
}

}

pesquisaCodigoDoAluno(11)
