function criaMatriz(matriz) {
    for (let i = 0; i < 6; i++) {
        matriz[i] = []
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseInt((Math.random()*20 + 1))
        }
    }
}

function buscaElementos(matriz) {
    let MaiorNumero
    MaiorNumero = 0
    let MenorNumero
    let LinhaMaiorNumero = 0
    let LinhaMenorNumero = 0
    let ColunaMaiorNumero = 0
    let ColunaMenorNumero = 0
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if(i==0 && j==0){
                MaiorNumero = matriz[i][j]
                LinhaMaiorNumero = i
                ColunaMaiorNumero = j
                MenorNumero = matriz[i][j]
                LinhaMenorNumero = i
                ColunaMenorNumero = j
            }else if(MaiorNumero < matriz[i][j]){
                MaiorNumero = matriz[i][j]
                LinhaMaiorNumero = i
                ColunaMaiorNumero = j
            }else if(MenorNumero > matriz[i][j]){
                MenorNumero = matriz[i][j]
                LinhaMenorNumero = i
                ColunaMenorNumero = j
            }
        }
    }
    console.log(`O maior numero é ${MaiorNumero} e esta na linha ${LinhaMaiorNumero} e a na coluna ${ColunaMaiorNumero}`)
    console.log(`O menor numero é ${MenorNumero} e esta na linha ${LinhaMenorNumero} e na coluna ${ColunaMenorNumero}`)
}

function principal(){
    let matriz = []
    criaMatriz(matriz)
    buscaElementos(matriz)
}

principal()