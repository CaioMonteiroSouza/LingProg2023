function ex(){
    const numeroBikes = 10
    let vetorObjetos = []
    let somaPrecos = 0
    let mediaPrecos = 0
    let maisAntiga = 0
    let nomeMaisAntiga
    let bikesCaloi = []
    let contador = 0
    let MaiorQuadro = 0
    let BikeMaiorQuadro

    for(let i=0;i<numeroBikes;i++){
        let objeto = {
            marca: prompt(`Digite a marca da bicicleta`),
            modelo: prompt(`Digite o modelo da biclieta`),
            quadro: Number(prompt(`Digite o quadro da bicicleta`)),
            aro: Number(prompt(`Digite o aro da bicicleta`)),
            ano: Number(prompt(`Digite o ano da bicicleta`)),
            preço: Number(prompt(`Digite o preço da bicicleta`))
        }
        vetorObjetos.push(objeto)
    }
    for(i=0;i<numeroBikes;i++){
        somaPrecos = somaPrecos + vetorObjetos[i].preço
    }

    for(i=0;i<numeroBikes;i++){
        if(i==0){
            maisAntiga = vetorObjetos[i].ano
            nomeMaisAntiga = vetorObjetos[i]
        }else{
            if(maisAntiga <= vetorObjetos[i].ano){
                maisAntiga = vetorObjetos[i].ano
                nomeMaisAntiga = vetorObjetos[i.ano]
            }
        }
    }

    for(i=0;i<numeroBikes;i++){
        if(vetorObjetos[i].marca == 'Caloi'){
            bikesCaloi.push(i + 1)
        }
    }

    for(i=0;i<numeroBikes;i++){
        if(vetorObjetos[i].aro == 29){
            contador++
        }
    }

    for(i=0;i<numeroBikes;i++){
        if(i==0){
            MaiorQuadro = vetorObjetos[i].quadro
            BikeMaiorQuadro = `A bike de maior aro é a de numero ${i + 1}`
        }else{
            if(MaiorQuadro < vetorObjetos[i].quadro){
                MaiorQuadro = vetorObjetos[i].quadro
                BikeMaiorQuadro = `A bike de maior aro é a de numero ${i + 1}`
            }
        }
    }

    mediaPrecos = somaPrecos / numeroBikes

    console.log(`A media de preço das bikes é ${mediaPrecos}`)
    console.log(nomeMaisAntiga)
    console.log(`As bikes da marca Caloi são: ${bikesCaloi}`)
    console.log(`${contador} possuem aro 29`)
    console.log(BikeMaiorQuadro)    
}