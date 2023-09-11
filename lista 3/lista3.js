function ex1(){
    let contador2 = 1
    while (contador2 <= 5){
        let a = Number(prompt('Informe A'))
        let b = Number(prompt('Informe B'))
        let c = Number(prompt('Informe C'))
        let d = Number(prompt('Informe D'))
        let contador = 0

        while (contador <= 3){
            if (a > b){
                let aux = a
                a = b
                b = aux
            }
            if (b > c){
                let aux = b
                b = c
                c = aux
            }
            if (c > d){
                let aux = c
                c = d
                d = aux
            }
            contador = contador + 1
        }
        console.log(`Ordem crescente ${a}, ${b}, ${c}, ${d}`)
        console.log(`Ordem wcrescente ${d}, ${c}, ${b}, ${a}`)
        contador2++
    }
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