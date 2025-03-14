const produto = [{ codigo: 100, descricaoDoProduto: "Cachorro quente", preco: 3 }, {codigo: 200, descricaoDoProduto: "Hambúrguer simples", preco: 4},{ codigo: 300, descricaoDoProduto: "Cheeseburguer", preco: 5.50 }, { codigo: 400, descricaoDoProduto: "Bauru", preco: 7.50 }, { codigo: 500, descricaoDoProduto: "Refrigerante", preco: 3.50 }, { codigo: 600, descricaoDoProduto: "Suco", preco: 2.80 }]



function escolherProduto(codigoDoProduto, quantidade) {
    switch (codigoDoProduto) {
        case 100:
            console.log(`Produto: ${produto[0].descricaoDoProduto}, ${quantidade} unidades. Total: R$${((produto[0].preco) * quantidade).toFixed(2)}`)
            break
        case 200:
            console.log(`produto: ${produto[1].descricaoDoProduto}, ${quantidade} unidades. Total: R$${((produto[1].preco) * quantidade).toFixed(2)}`)
            break
        case 300:
            console.log(`produto: ${produto[2].descricaoDoProduto}, ${quantidade} unidades. Total: R$${((produto[2].preco) * quantidade).toFixed(2)}`)
            break
        case 400:
            console.log(`produto: ${produto[3].descricaoDoProduto}, ${quantidade} unidades. Total: R$${((produto[3].preco) * quantidade).toFixed(2)}`)
        case 500:
            console.log(`produto: ${produto[4].descricaoDoProduto}, ${quantidade} unidades. Total: R$${((produto[4].preco) * quantidade).toFixed(2)}`)
            break
        case 600:
            console.log(`produto: ${produto[5].descricaoDoProduto}, ${quantidade} unidades. Total: R$${((produto[5].preco) * quantidade).toFixed(2)}`)
            break
        default:
            console.log("Código inválido!")
    }
}

escolherProduto(600, 1)

