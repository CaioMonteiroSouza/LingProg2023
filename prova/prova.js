function prova(){
    let Nomes = []
    let Estoque = []
    let classificacao = []
    let NomeCompra
    let classificacaoCompra
    let quantidadeCompra
    let EstoqueHolder
    let classificacaoHolder
    let encontrou = false
    let index

    for(let i=0;i<10;i++){
        Nomes.push(prompt(`Digite o nome do modelo do computador ${i+1}:`))
        do{
            EstoqueHolder = Number(prompt(`Digite a quantidade em estoque do computador ${i+1}:`))
            if (EstoqueHolder < 0){
                alert(`O valor do estoque não pode ser negativo!`)
            }else{
                Estoque.push(EstoqueHolder)
            }
        }while(EstoqueHolder[i] < 0)
        do{
            classificacaoHolder = prompt(`Digite a classificação do computador ${i+1}:`)
            if (classificacaoHolder != `gamer` && classificacaoHolder != `notebook` && classificacaoHolder != `desktop`){
                alert(`A classificação do computador deve ser gamer, notebook ou desktop!`)
            }else{
                classificacao.push(classificacaoHolder)
            }
        }while(classificacaoHolder != `gamer` && classificacaoHolder != `notebook` && classificacaoHolder != `desktop`)
    }

    for (i=0;i<4;i++){
        NomeCompra = prompt(`Digite o nome do modelo desejado:`)
        do{
            classificacaoCompra = prompt(`Digite a classificação do computador a ser comprado:`)
            if (classificacaoCompra != `gamer` && classificacaoCompra != `notebook` && classificacaoCompra != `desktop`){
                alert(`A classificação do computador deve ser gamer, notebook ou desktop!`)
            }
        }while(classificacaoCompra != `gamer` && classificacaoCompra != `notebook` && classificacaoCompra != `desktop`)
        do{
            quantidadeCompra = prompt(`Digite a quantidade que deseja ser comprada`)
            if (quantidadeCompra < 0){
                alert(`A quantidade a ser comprada deve ser um numero positivo!`)
            }
        }while(quantidadeCompra < 0)

        for(let y=0;y<10;y++){
            if(NomeCompra == Nomes[y]){
                encontrou = true
                break
            }else{
                encontrou = false
            }
        }
        if(encontrou = false){
            alert(`Modelo não encontrado! compra cancelada!`)
        }else{
            if(quantidadeCompra < Estoque[Nomes.indexOf(NomeCompra)]){
                alert(`Estoque insuficiente! compra cancelada!`)
                break
            }else{
                alert(`Esotoque suficiente! Compra realizada!`)
                Estoque[Nomes.indexOf(NomeCompra)] = Estoque[Nomes.indexOf(NomeCompra)] - quantidadeCompra
            }
        }
    }

    let cont = 0

    for(i=0;i<10;i++){
        if(classificacao[i] == `notebook`){
            if(cont == 0){
                maior = Estoque[i]
                menor = Estoque[i]
                NomeMaior = Nomes[i]
                NomeMenor = Nomes[i]
            }else{
                if(maior < Estoque[i]){
                    maior = Estoque[i]
                    NomeMaior = Nomes[i]
                }else if(menor > Estoque[i]){
                    menor = Estoque[i]
                    NomeMenor = Nomes[i]
                }
            }
        }
        cont++
    }

    console.log(`O computador do tipo notebook com maior estoque foi o ${NomeMaior}\nO computador do tipo notebook com menor estoque foi o ${NomeMenor}`)
}