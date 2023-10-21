function cadastraPartido(partidos) {
    let objeto = { // cria objeto
        codigo: parseInt(prompt('Informe o código do partido')),
        nome: prompt('Informe o nome do partido'),
        sigla: prompt('Informe a sigla do partido'),
        presidente: prompt('Informe o presidente do partido'),
        qtde: parseInt(prompt('Informe a quantidade de candidatos'))
    }
    // verifica se o código já existe ou menor que 0
    while (partidos.some((item) => item.codigo == objeto.codigo ||
        objeto.codigo < 0)) {
        objeto.codigo = parseInt(prompt('Código já existe. Informe novo código'))
    }
    while (partidos.some((item) => item.sigla == objeto.sigla)) {
        objeto.sigla = prompt('Sigla já existe. Informe nova sigla')
    }
    partidos.push(objeto) // insere objeto no vetor
    alert('Partido cadastrado com sucesso')
}

function cadastraPolitico(politicos) {
    let objeto = {
        codPartido: parseInt(prompt('Informe código do partido do candidato')),
        nome: prompt('Informe nome do candidato'),
        qtde: 0,
        cargo: prompt('Informe cargo do candidato')
    }
    while (!partidos.some((item) => item.codigo == objeto.codPartido)) {
        objeto.codPartido = parseInt(prompt('Partido não encontrado, informe um novo'))
    }
    while (politicos.some((item) => item.nome == objeto.nome)) {
        objeto.nome = prompt('Nome já existe, informe outro nome')
    }
    politicos.push(objeto)
    alert('Político cadastrado com sucesso')
}

function realizaVotos(politicos) {
    let votacao = {
        partido: parseInt(prompt('Informe código do partido')),
        candidato: prompt('Informe o nome do candidato')
    }
    let aux = politicos.find((item) => item.codPartido == votacao.partido &&
        item.nome == votacao.candidato)
    if (aux != undefined) {
        // achou
        aux.qtde++
        alert('Votação realizada com sucesso')
    }
    else { // não achou
        alert('Partido e/ou candidato não existem')
    }
}

function verificaMaisVotado(politicos) {
    let candidatoMaisVotado = politicos[0]
    for (let i = 1; i < politicos.length; i++) {
        if (politicos[i].qtde > candidatoMaisVotado.qtde) {
            candidatoMaisVotado = politicos[i]
        }
    }
    console.log(candidatoMaisVotado)
}


function principal() {
    let partidos = []
    let politicos = []
    let escolha
    do {
        escolha = Number(prompt(`Digite 1 para cadastrar um partido - 2 para cadastrar um politico - 3 para votar - 4 para verificar o mais votado - 0 para encerrar o programa`))
        switch (escolha) {
            case 1:
                cadastraPartido(partidos)
                break
            case 2:
                if (partidos.length == 0) {
                    break
                } else {
                    cadastraPolitico(politicos)
                    break
                }
            case 3:
                if (politicos.length == 0) {
                    break
                } else {
                    realizaVotos(politicos)
                    break
                }
            case 4:
                if (politicos.length == 0) {
                    break
                } else {
                    verificaMaisVotado(politicos)
                    break
                }
            default:
                break
        }
    } while (escolha != 0)
}