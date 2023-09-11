function ex1(){
    let A = parseInt(document.getElementById("PrimeiroNumero").value)
    let B = parseInt(document.getElementById("SegundoNumero").value)
    let C = parseInt(document.getElementById("TerceiroNumero").value)
    let D = parseInt(document.getElementById("QuartoNumero").value)
    let Contador = 1
        while (Contador <= 3){
            if (A > B){
                let aux = A
                A = B
                B = aux
            }
            if (B > C){
                let aux = B
                B = C
                C = aux
            }
            if (C > D){
                let aux = C
                C = D
                D = aux
            }
            Contador++ 
        }
        document.getElementById('Resposta').innerHTML = `Ordem crescente ${A}, ${B}, ${C}, ${D}<br>Ordem decrescente ${D}, ${C}, ${B}, ${A}`
}

function ex2(){
    let Quantidade = 120
    const Custo = 200
    let Corpo = ''
    let Lucro = 0
    let MaiorLucro = 0
    let MelhorQuantidade = 0
    let MelhorPreco = 0
    for(let Preco = 5; Preco >= 1; Preco = Preco - 0.5){
        Lucro = (Preco * Quantidade) - Custo
        if (Lucro > MaiorLucro){
            MaiorLucro = Lucro
            MelhorPreco = Preco
            MelhorQuantidade = Quantidade
        }
        Corpo = Corpo + `<tr> <td> ${Preco.toFixed(2)} </td> <td> ${Quantidade}</td> <td> ${Custo.toFixed(2)}</td> <td> ${Lucro.toFixed(2)} </td> </tr> <br>`
        Quantidade = Quantidade + 26
    }
    document.getElementById('Resposta').innerHTML = Corpo
}

function ex3(){
    let Contador = 1
    let Faixa1 = 0
    let Faixa2 = 0
    let Faixa3 = 0
    let Faixa4 = 0
    let Faixa5 = 0
    while(Contador <= 8){
        let Idade = Number(prompt('Digite a idade:'))
        if(Idade < 0){
            alert("Digite uma idade valida!!!")
            break
        }else{
            if(Idade <= 15){
                Faixa1++
            }else if(Idade >= 16 && Idade <= 30){
                Faixa2++
            }else if(Idade >= 31 && Idade <= 45){
                Faixa3++
            }else if(Idade >= 46 && Idade <= 60){
                Faixa4++
            }else{
                Faixa5++
            }    
        }
        Contador++
    }
    let PorcentagemPrimeira = (Faixa1/8) * 100
    let PorcentagemUltima = (Faixa5/8) * 100

    document.getElementById('Resposta').innerHTML = `Quantidade de pessoas na faixa 1: ${Faixa1}<br>Quantidade de pessoas na faixa 2: ${Faixa2}<br>
    Quantidade de pessoas na faixa 3: ${Faixa3}<br>Quantidade de pessoas na faixa 4: ${Faixa4}<br>Quantidade de pessoas na faixa 5: ${Faixa5}<br>
    Percentagem de pessoas na primeira faixa em relação ao total: ${PorcentagemPrimeira}%<br>Percentagem de pessoas na ultima faixa em relação ao total: ${PorcentagemUltima}%`
}

function ex4(){
    let Numero = parseInt(document.getElementById('PrimeiroNumero').value)
    let Corpo = ''
    let Resultado

    for(let Contador = 0; Contador <= 10; Contador++){
        Resultado = Numero * Contador
        Corpo = Corpo + `${Numero} x ${Contador} = ${Resultado}<br>`
    }

    document.getElementById('Resposta').innerHTML = Corpo
}

function ex5(){
    let Corpo = ''
    let Resultado
    for(let Numero = 1; Numero <= 10; Numero++){
        Corpo = Corpo + `Tabuada do ${Numero} <br>`
        for(let Contador = 0; Contador <= 10; Contador++){
            Resultado = Numero * Contador
            Corpo = Corpo + `${Numero} x ${Contador} = ${Resultado}<br>`
        }
    }
    
    document.getElementById('Resposta').innerHTML = Corpo
}

function ex6(){
    let TotalVista = 0
    let TotalPrazo = 0
    for(let Contador=1; Contador <= 5; Contador++){
        let Codigo = String(prompt('Digite o Codigo da venda:'))
        let Valor = Number(prompt('Digite o valor da venda:'))

        if(Codigo == 'V'){
            TotalVista = TotalVista + Valor
        }else if(Codigo == 'P'){
            TotalPrazo = TotalPrazo + Valor
        }else{
            alert('Digite um codigo valido!!!')
            break
        }
    }
    let ValorTotal = TotalVista + TotalPrazo
    let PrimeiraPrestacao = TotalPrazo / 3
    
    document.getElementById('Resposta').innerHTML = `O valor total das compras a vista é: ${TotalVista}$<br>
    O valor total das compras a prazo é: ${TotalPrazo}$<br>O valor total das vendas é: ${ValorTotal}$<br>
    O valor da primeira parcela sera: ${PrimeiraPrestacao}$`
}

function ex7(){
    let Idade, Peso, Altura
    let Idade50 = 0
    let MediaAltura = 0
    let Contador1 = 0
    let SomaAltura = 0
    let ContadorPeso = 0
    let PorcentagemPeso
    for(let Contador=1; Contador<=5; Contador++){
        Idade = Number(prompt('Digite a idade:'))
        Peso = Number(prompt('Digite o peso:'))
        Altura = Number(prompt('Digite a altura:'))

        if(Idade >= 10 && Idade <= 20){
            SomaAltura = Altura
            Contador1++
        }else if(Idade > 50){
            Idade50++
        }

        if(Peso < 40){
            ContadorPeso++
        }

        MediaAltura = SomaAltura / Contador1
        PorcentagemPeso = (ContadorPeso/5) * 100
    }

    document.getElementById('Resposta').innerHTML = `Quantidade de pessoas com idade superior a 50: ${Idade50}<br>
    Media da altura das pessoas com idade entre 10 e 20 anos: ${MediaAltura}<br>
    Porcentagem de pessoas com peso inferior a 40: ${PorcentagemPeso}`
}

function ex8(){
    let Idade, Peso, Altura, CorOlhos, CorCabelos
    let Idade50 = 0
    let SomaIdade = 0
    let Cont2 = 0
    let ContAzul = 0
    let PorcentagemAzul = 0
    let ContRuivo = 0
    let MediaIdade

    for(let Contador=1; Contador<=6; Contador++){
        Idade = Number(prompt('Digite a Idade'))
        Peso = Number(prompt('Digite o Peso'))
        Altura = Number(prompt('Digite a Altura'))
        do {
            CorOlhos = prompt('Digite o Codigo para a Cor dos olhos:').toUpperCase()
        }while(CorOlhos != 'A' && CorOlhos != 'P' && CorOlhos != 'V' && CorOlhos != 'C')
        do {
            CorCabelos = prompt('Digite o Codigo para a Cor dos Cabelos:').toUpperCase()
        }while(CorCabelos != 'P' && CorCabelos != 'C' && CorCabelos != 'L' && CorCabelos != 'R')
        if(Idade > 50 && Peso < 60){
            Idade50++
        }
        if(Altura < 1.50){
            SomaIdade = SomaIdade + Idade
            Cont2++
        }
        if(CorOlhos == 'A'){
            ContAzul++
        }
        if(CorCabelos == 'R' && CorOlhos != 'A'){
            ContRuivo++
        }
    }
    if(Cont2 != 0){
        MediaIdade = SomaIdade / cont2
    }else{
        MediaIdade = 0
    }

    PorcentagemAzul = ContAzul/6 * 100

    document.getElementById('Resposta').innerHTML = `Quatidade de pessoas com idade superior a 50 e peso inferior a 60kg: ${Idade50}<br>
    Media das idades das pessoas com altura inferior a 1,50m: ${MediaIdade}<br>Porcentagem das pessoas com olhos azuis: ${PorcentagemAzul}%<br>
    Quantidade de pessoas ruivas que não tem olhos azuis: ${ContRuivo}`
}

function ex9(){
    let Idade, Peso, Altura
    let SomaIdade = 0
    let MediaIdade
    let QuantidadePeso = 0 
    let QuantidadeAltura = 0
    let ContadorIdade = 0
    let PorcentagemIdade = 0

    for(let Contador=1; Contador<=10; Contador++){
        Idade = Number(prompt('Digite a Idade'))
        Peso = Number(prompt('Digite o Peso'))
        Altura = Number(prompt('Digite a Altura'))

        SomaIdade = SomaIdade + Idade
        if(Peso > 90 && Altura < 1.50){
            QuantidadePeso++
        }
        if(Altura > 1.90){
            QuantidadeAltura++
            if( Idade > 10 && Idade < 30){
                ContadorIdade++
            }
        }
    }
    PorcentagemIdade = (ContadorIdade/QuantidadeAltura) * 100
    
    MediaIdade = SomaIdade / 10

    document.getElementById('Resposta').innerHTML = `Media da Idade das 10 pessoas: ${MediaIdade}<br>Quantidade de pessoas com peso superior a 90kg
    e altura infeior a 1,50m: ${QuantidadePeso}<br>Porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90m: ${PorcentagemIdade}%`
}

function ex10(){
    let Numero 
    let NumerosPares = 0
    let NumerosPrimos = 0
    let QuantidadeDivisores

    for(let Contador = 1; Contador <= 10; Contador++){
        QuantidadeDivisores = 0
        Numero = Number(prompt('Digite o Numero'))

        if(Numero % 2 == 0){
            NumerosPares = NumerosPares + Numero
        }
        
        if(Numero != 1){
            for(let cont1 = 0; cont1 <= Numero; cont1++){
                if (Numero % cont1 == 0){
                    QuantidadeDivisores++
                }
            }
            if(QuantidadeDivisores == 2){
                NumerosPrimos = NumerosPrimos + Numero
            }
        }else{
            NumerosPrimos = NumerosPrimos + Numero
        }
        
    }

    document.getElementById('Resposta').innerHTML = `Soma dos numeros pares: ${NumerosPares}<br>
    Soma dos numeros primos: ${NumerosPrimos}`
}