
function cadastraBikes(vetor) {
    let objeto = {
        marca: prompt("Informe a marca da bike"),
        modelo: prompt("Informe o modelo da bike"),
        quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
        aro: parseInt(prompt("Informe o tamanho do aro da bike")),
        ano: parseInt(prompt("Informe o ano da bike")),
        preco: parseFloat(prompt("Informe o preço da bike"))
    }
    vetor.push(objeto)
    console.log('Bike inserida com sucesso')
}

function calculaMediaPrecos(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i].preco
    }
    console.log(`Média de preço das bikes ${soma / vetor.length}`)
}
function calculaBikesAntigas(vetor) {
    let maisAntiga = []
    maisAntiga[0] = vetor[0]
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i].ano < maisAntiga[0].ano) {
            maisAntiga = []
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano) {
            maisAntiga.push(vetor[i])
        }
    }
    console.log(`Bike(s) mais antiga(s)`)
    console.log(maisAntiga)
}

function calculaBikesCaloi(vetor) {
    let caloi = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].marca == 'CALOI') {
            caloi.push(vetor[i])
        }
    }
    console.log(caloi)
}

function calculaBikesAro29(vetor) {
    let aro29 = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].aro == 29) {
            aro29++
        }
    }
    console.log(`Quantidade de bikes aro 29 ${aro29}`)
}
function calculaBikeMaiorQuadro(vetor) {
    let maiorQuadro = vetor[0]
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i].quadro > maiorQuadro.quadro) {
            maiorQuadro = vetor[i]
        }
    }
    console.log(maiorQuadro)
}

function principal() {
    let vetor = []
    let escolha
    do {
        escolha = Number(prompt(`Digite 1 - para cadastrar uma bike. 2 - para calcular a media de preço das bikes. 3 - para calcular a bike mais antiga. 4 - calcula bikes caloi. 5 - calcula bikes aro 29. 6 - Calcula bike maior quadro. 0 - sair do programa. `))
        switch (escolha) {
            case 1:
                cadastraBikes(vetor)
                break
            case 2:
                if (vetor.length == 0) {
                    break
                } else {
                    calculaMediaPrecos(vetor)
                }
            case 3:
                if (vetor.length == 0) {
                    break
                } else {
                    calculaBikesAntigas(vetor)
                }
            case 4:
                if (vetor.length == 0) {
                    break
                } else {
                    calculaBikesCaloi(vetor)
                }
            case 5:
                if (vetor.length == 0) {
                    break
                } else {
                    calculaBikesAro29(vetor)
                }
            case 6:
                if (vetor.length == 0) {
                    break
                } else {
                    calculaBikeMaiorQuadro(vetor)
                }
            case 0:
                break
            default:
                break
        }
    } while (escolha != 0)
}