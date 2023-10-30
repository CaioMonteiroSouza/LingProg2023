function criaMatriz(matriz, nomes){
    for (let i = 0;i<15;i++){
        nomes[i] = prompt(`Digite o nome do ${i + 1} aluno:`)
        matriz[i] = []
        for (let j=0;j<5;j++){
            matriz[i][j] = parseInt((Math.random()*10))
        }
    }
}

function mostraInfos(matriz, nomes){
    let somaNotas = 0
    let somaNotasClasse = 0
    let mediaNotas = 0
    let situacao = `reprovado`
    for (let i = 0; i<15;i++){
        for (let j = 0; j<5;j++){
            somaNotas = somaNotas + matriz[i][j]
            somaNotasClasse = somaNotasClasse + matriz[i][j]
        }
        mediaNotas = parseFloat(somaNotas) / 5
        if(mediaNotas >= 6){
            situacao = `aprovado`
        }
        let objetoNotas = {
            nome: nomes[i],
            media: mediaNotas,
            situacao: situacao
        }
        console.log(objetoNotas)
        somaNotas = 0
        situacao = `reprovado`
    }
    console.log(`a media da classe foi ${somaNotasClasse / (5 * 15)}`)
}

function principal(){
    let matriz = []
    let nomes = []
    criaMatriz(matriz, nomes)
    mostraInfos(matriz, nomes)
}

principal();