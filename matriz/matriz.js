function lerMatriz(matriz){
    for(let i=0;i<3;i++){
        matriz[i] = []
        alert(`Informe os elementos da linha ${i+1}`)
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe um número da coluna ${j+1}`))
        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
}

function principal(){
    let matriz = []
    lerMatriz(matriz)
    mostraMatriz(matriz)
}

principal()