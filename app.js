/*********************************************
 * Objetivo : começar a utilizar arrays  
 * Autor: Felipe Graciano
 * Data: 24/02
 * Versão 1.0
 */


// [] - representa um objeto do tipo array
// {} - representa um objeto do tipo JSon

const listaNomes = ['Felipe', 15, 'Elza']

const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória']


const exibindoDados = function () {

    //Verifica o tipo de dado na posição 1 do array
    console.log(typeof (listaNomes[1]))

    //mostra o Array por completo
    console.log(listaNomes)

    //exibe o conteudo na posição 1 do array
    console.log(listaNomes[1])



    //exibe o array de forma dinâmica(fomato de tabela)
    console.table(listaNomes)


    //Como contar quantos elementos possui em um array? utilize o nomeDoArray.lenght
    console.log(listaNomes.length)


    //percorrer o array utilizando : while
    let contador = 0;
    let qntdadeitens = listaNomes.length;


    while (contador < qntdadeitens) {
        console.log(`O nome do aluno é: ${listaNomes[contador]}`);
        contador++
    }

    //utilizando o for
    for (let cont = 0; cont < qntdadeitens; cont++) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`);
    }

    //utilizando o for each
    listaNomes.forEach(function (nome) {
        console.log(`O nome do aluno é: ${nome}`);
    })
}

const manipulandoDados = function(){
    //push - Adiciona novos itens no final do array, preservando os elementos anteriores
    listaProdutos.push('Memória')
    console.table(listaProdutos)

    //unshift - adiciona novos itens no inicio do array, reorganizando todos os elementos
    listaProdutos.unshift('HD', 'Placa Mãe', 'SSD')
    console.table(listaProdutos)



    //pop- remove o último item do array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - remove o primeiro item do array, reorganizando todos elementos
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - permite criar uma réplica de um array
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos)

    //indexOf - permite buscar dentro de um array um item
    //se o retorno for de -1 , o item não foi encontrado
    console.log(listaProdutos.indexOf('Mouse'))

    //exemplo de utilização do indexOf
    if(listaProdutos.indexOf('HD') >= 0){
        console.log('item encontrado')
    } else{
        console.log('item não encontrado')
    }



}

const removerProduto = function(nomeProduto){
    let nome = nomeProduto

    let indice = listaProdutos.indexOf(nome)

    let status;


    //splice - permite apagar um ou mais itens do array através do indice
    //se for encaminhado somente o item, ele ira apagar todos que vem depois, 
    //para isso não acontecer, devemos informar quantos itens ele ira apagar 
    if(indice >= 0){
        listaProdutos.splice(indice, 1)
        status = true
    } else{
        status = false
    }

    return status
}




const remove = function(array, nomeProduto){
    let nome = nomeProduto
    let arrayTargeted = array
    let indice = arrayTargeted.indexOf(nome)
    let status = true;

    let novoArray = arrayTargeted.slice()

    if(indice >= 0){
        novoArray.splice(indice, 1)
        status = true
    } else{
        status = false
    }

    if(status)
    return novoArray
    else
    return false
}

console.log(remove(listaProdutos, 'Monitor'))
console.log(listaProdutos)

// console.table(listaProdutos)
// console.log(removerProduto('Monitor'))
// console.table(listaProdutos)
