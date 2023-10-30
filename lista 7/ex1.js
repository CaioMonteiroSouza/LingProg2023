function criaMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        matriz[i] = []
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = parseInt((Math.random()*20 + 1))
        }
    }
}

function calculaMatriz(matriz) {
    let cont = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            if(matriz[i][j] > 15 && matriz[i][j] < 20){
                cont++
            }
        }
    }
    console.log(`A quantidade de numeros entre 15 e 20 é ${cont}`)
}

function principal() {
    let matriz = []
    criaMatriz(matriz)
    calculaMatriz(matriz)
}

principal()