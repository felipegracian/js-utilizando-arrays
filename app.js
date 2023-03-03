/*********************************************
 * Objetivo : começar a utilizar arrays  
 * Autor: Felipe Graciano
 * Data: 24/02
 * Versão 1.0
 */


// [] - representa um objeto do tipo array
// {} - representa um objeto do tipo JSon

const listaNomes = ['Felipe', 'Talita', 'Elza']

const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória']


//JSON é composto por:
//chave(atributo) e valor
//Exemplo:
//{nome: Felipe,
//celular: 11965853689,
//email: felipinhograciano@gmail.com}
// "nome:" seria a chave
// "Felipe" o valor
//e assim por diante

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

const manipulandoDados = function () {
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
    if (listaProdutos.indexOf('HD') >= 0) {
        console.log('item encontrado')
    } else {
        console.log('item não encontrado')
    }



}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto

    let indice = listaProdutos.indexOf(nome)

    let status;


    //splice - permite apagar um ou mais itens do array através do indice
    //se for encaminhado somente o item, ele ira apagar todos que vem depois, 
    //para isso não acontecer, devemos informar quantos itens ele ira apagar 
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    return status
}


const removeItem = function (array, nomeProduto) {

    //Entrada
    let nome = nomeProduto
    let arrayTargeted = array
    let indice = arrayTargeted.indexOf(nome)
    let status = true;

    let novoArray = arrayTargeted.slice()

    //Processamento
    if (indice >= 0) {
        novoArray.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    //Saída
    if (status) // status == true
        return novoArray
    else
        return false
}




const listagemProdutos = function () {
    //1 forma de criar um JSon , onde vc cria e já declara as chaves e valores
    // let listProdutosJSon = {produtos: listaProdutos, clientes: listaNomes}

    //2 forma de criar um JSon, onde as chaves e valores são atribuidas no decorrer do projeto
    // let listProdutosJSon = {}

    // listProdutosJSon.produtos = listaProdutos;
    // listProdutosJSon.clientes = listaNomes;


    //extraindo valores de um Json e Array
    // console.log(listProdutosJSon)
    // console.log(listProdutosJSon.produtos[2])
    // console.log(listProdutosJSon.clientes[2])

    let listProdutosJSon = {}
    let listProdutosArray = [
        { nome: 'Monitor', quantidade: 19, marca: 'Dell', valor: 665.0, codigo: 1553 },
        { nome: 'Monitor', quantidade: 78, marca: 'LG', valor: 995.0, codigo: 1649 },
        { nome: 'Iphone 11', quantidade: 455, marca: 'Apple', valor: 4440.0, codigo: 1119 },
        { nome: 'TV Samsung', quantidade: 655, marca: 'Samsung', valor: 5569.0, codigo: 4136 },
        { nome: 'Headphone Razer', quantidade: 455, marca: 'Ryzin', valor: 999.0, codigo: 1136 }
    ]

    //Arrays para cores
    let arrayCoresDell = ['Preto', 'Branco', 'Cinza']
    let arrayCoresLG = ['Preto', 'Branco', 'Cinza', 'Cinza Escuro']
    let arrayCoresSamsung = ['Preto', 'Cinza']
    let arrayCoresApple = ['Preto', 'Dourado', 'Roxo', 'Branco']
    let arrayCoresRyzin = ['Preto', 'Roxo', 'Branco']


    //Arrays para modelos
    let arrayModelosMonitorAndTv = ['LCD', 'OLED', '4K', '8k'];
    let arrayModelosIphone = ['LCD', 'OLED']

    //adiciona o array dentro de uma chave produtos em um JSon
    listProdutosJSon.produto = listProdutosArray

    //Adicionar cores aos produtos
    listProdutosJSon.produto[0].cor = arrayCoresDell;
    listProdutosJSon.produto[1].cor = arrayCoresLG;
    listProdutosJSon.produto[2].cor = arrayCoresApple;
    listProdutosJSon.produto[3].cor = arrayCoresSamsung;
    listProdutosJSon.produto[4].cor = arrayCoresRyzin;

    //Adicionar modelos aos produtos
    listProdutosJSon.produto[0].modelos = arrayModelosMonitorAndTv;
    listProdutosJSon.produto[1].modelos = arrayModelosMonitorAndTv;
    listProdutosJSon.produto[2].modelos = arrayModelosIphone;
    listProdutosJSon.produto[3].modelos = arrayModelosMonitorAndTv;

    // console.log(listProdutosJSon)
    // console.log(listProdutosJSon.produto[0])
    // console.log(listProdutosJSon.produto[1])
    // console.log(listProdutosJSon.produto[2])
    // console.log(listProdutosJSon.produto[3])
    // console.log(listProdutosJSon.produto[4])

    // console.log('Nome: ' + listProdutosJSon.produto[1].nome)
    // console.log('Marca: ' + listProdutosJSon.produto[1].marca)
    // console.log('Valor: ' + listProdutosJSon.produto[1].valor)
    // console.log('Cor: ' + listProdutosJSon.produto[1].cor[1])
    // console.log('Modelo: ' + listProdutosJSon.produto[1].modelos[1])


    console.log(listProdutosJSon)

    //Se for utilizar o for seria assim
    // let qntdadeitens = listProdutosJSon.produto.length;
    // for (let contador = 0; contador < qntdadeitens; contador++) {
    //     console.log('\n')
    //     console.log('\n')
    //     console.log('*************************************************')
    //     console.log('\n')
    //     console.log('\n')
    //     console.log('Nome: ' + listProdutosJSon.produto[contador].nome)
    //     console.log('Marca: ' + listProdutosJSon.produto[contador].marca)
    //     console.log('Valor: ' + listProdutosJSon.produto[contador].valor)

    //     for (let contadorCor = 0; contadorCor < listProdutosJSon.produto[contador].cor.length; contadorCor++) {
    //         console.log('Cores: ' + listProdutosJSon.produto[contador].cor[contadorCor])
    //     }

    //     // console.log(listProdutosJSon.produto[contador].modelos.length)

    //     if (listProdutosJSon.produto[contador].modelos == undefined) {
    //         console.log('Modelo Único')
    //     } else {
    //         for (let contadorModelo = 0; contadorModelo < listProdutosJSon.produto[contador].modelos.length; contadorModelo++) {
    //             console.log('Modelos: ' + listProdutosJSon.produto[contador].modelos[contadorModelo])
    //         }
    //     }


    // }

    //fazendo essa função com o forEach seria assim
    listProdutosJSon.produto.forEach(function (itemProduto) {
        console.log('Nome: ' + itemProduto.nome)
        console.log('Marca: ' + itemProduto.marca)
        console.log('Valor: ' + itemProduto.valor)
        //verifica se o produto possui o atributo cor
        if(itemProduto.cor == undefined){
            console.log('Cor Única')
        } else{
            //percorre o array de cores e mostra no console
            itemProduto.cor.forEach(function(itemCor){
                console.log('********* Cores disponíeis : ' + itemCor)
            })
        }
        if(itemProduto.modelos == undefined){
            console.log('Modelo Único')
        } else{
            itemProduto.modelos.forEach(function(itemModelo){
                console.log('********* Modelos disponíeis : ' + itemModelo)
            })
        }
        
    })
    

}

listagemProdutos()

// console.table(listaProdutos)
// console.log(removerProduto('Monitor'))
// console.table(listaProdutos)
