function cadastraFarmacia(farmacias) {
    let objeto = {
        codigo: parseInt(prompt(`Informe o código da farmácia`)),
        nome: prompt(`Informe o nome da farmácia`),
        endereco: prompt(`Informe o endereço da farmácia`)
    }
    while (farmacias.some((item) => item.codigo == objeto.codigo)) {
        objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`))
    }
    farmacias.push(objeto)
}

function cadastraRemedios(remedios) {
    let objeto = {
        codFarmacia: parseInt(prompt('Código da farmácia')),
        nome: prompt('Nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Qtde do remédio')),
        preco: parseFloat(prompt('Preço do remédio'))
    }
    while (!farmacias.some((item) => item.codigo == objeto.codFarmacia)) {
        objeto.codFarmacia =
            parseInt(prompt('Farmácia não existe. Informe novamente o código'))
    }
    let indice = remedios.findIndex((item) => item.codFarmacia == objeto.codFarmacia && item.nome == objeto.nome)
    if (indice == -1) { // remedio não existe
        remedios.push(objeto) // insere remédio
    }
    else { // já existe, atualiza estoque
        remedios[indice].qtde = remedios[indice].qtde + objeto.qtde
    }
}

function realizaVenda(farmacias, remedios) {
    let venda = {
        farmacia: parseInt(prompt('Informe código da farmácia')),
        remedio: prompt('Informe nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Informe qtde para compra'))
    }
    // verifica se existem - some retorna true ou false
    if (remedios.some((item) =>
        (item.codFarmacia == venda.farmacia && item.remedio == venda.remedio))) {
        // recupera o índice do remédio - findIndex retorna o índice do vetor
        let indice = remedios.findIndex((item =>
            item.nome == venda.remedio && item.codFarmacia == venda.remedio))
        if (venda.qtde <= remedios[indice].qtde) {
            // atualiza o estoque
            remedios[indice].qtde = remedios[indice].qtde - venda.qtde
            alert('Venda realizada com sucesso')
        }
        else {
            alert('Estoque insuficiente')
        }
    }
    else {
        alert('Farmácia ou remédio inexistente')
    }
}

let principal = () => {
    let farmacias = []
    let remedios = []
    let escolha
    do {
        escolha = Number(prompt(`Digite 1 - para cadastrar farmacia 2 -  para cadastrar remedio 3 - para comprar remedio 0 - para sair`))
        switch (escolha) {
            case 1:
                cadastraFarmacia(farmacias)
                break
            case 2:
                if (farmacias.length == 0) {
                    break
                } else {
                    cadastraRemedios(remedios)
                    break
                }
            case 3:
                if (remedios.length == 0) {
                    break
                } else {
                    realizaVenda(farmacias, remedios)
                    break
                }
            default:
                break
        }
    } while (escolha != 0)
}