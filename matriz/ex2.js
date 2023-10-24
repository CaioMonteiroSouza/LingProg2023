function criaMatriz(matriz) {
    for (let i = 0; i < 2; i++) {
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = parseInt((Math.random()*20 + 1))
        }
    }
}

function calculaMatriz(matriz) {
    let cont = []
    for (let i = 0; i < 2; i++) {
        cont[i] = 0
        for (let j = 0; j < 4; j++) {
            if(matriz[i][j] > 12 && matriz[i][j] < 20){
                cont[i] ++
            }   
        }
    }
    console.log(`${cont}`)
}

function paresMatriz(matriz) {
    let contpar = 0
    let somapar = 0
    for (let i = 0; i< 2;i++){
        for(let j = 0; j< 4;j++){
            if(matriz[i][j] % 2 == 0){
                contpar++
                somapar = somapar + matriz[i][j]
            }
        }
    }
    if(contpar > 0){
        console.log(somapar/contpar)
    }else(
        console.log(0)
    )
}

function principal() {
    let matriz = []
    criaMatriz(matriz)
    calculaMatriz(matriz)
    paresMatriz(matriz)
}

principal()