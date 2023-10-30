function criaMatriz(matriz){
    for(let i=0;i<12;i++){
        matriz[i] = []
        for(let j=0;j<4;j++){
            matriz[i][j] = parseInt((Math.random()*100))
        }
    }
}

function calculaVendaMes(matriz){
    let meses = [`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`]
    for(let i=0;i<12;i++){
        let totalVendas = 0
        for(let j=0;j<4;j++){
            totalVendas = totalVendas + matriz[i][j]
        }
        console.log(`O total de vendas do mês de ${meses[i]} foi de ${totalVendas}`)
    }
}

function calculaVendaSemana(matriz){
    let meses = [`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`]
    for(let i=0;i<12;i++){
        for(let j=0;j<4;j++){
            console.log(`A venda da semana ${j + 1} do mês de ${meses[i]} foi de ${matriz[i][j]}`)
        }
    }
}

function calculaVendaAno(matriz){
    let totalVendasAno = 0
    for(let i=0;i<12;i++){
        for(let j=0;j<4;j++){
            totalVendasAno = totalVendasAno + matriz[i][j]
        }
    }
    console.log(`O total de vendas do ano foi de ${totalVendasAno}`)
}

function principal(){
    let matriz = []
    criaMatriz(matriz)
    calculaVendaMes(matriz)
    calculaVendaSemana(matriz)
    calculaVendaAno(matriz)
}

principal()