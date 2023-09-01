function ex5(){
    let PrimeiroNumero = parseFloat(document.getElementById("PrimeiroNumero").value)
    let SegundoNumero = parseFloat(document.getElementById("SegundoNumero").value)
    let TerceiroNumero = parseFloat(document.getElementById("TerceiroNumero").value)
    let Resposta 

    switch (TerceiroNumero){
        case 1:
            Resposta = (PrimeiroNumero + SegundoNumero) / 2
            break
        case 2:
            if (PrimeiroNumero > SegundoNumero){
                Resposta = PrimeiroNumero - SegundoNumero
            }
            else if (PrimeiroNumero < SegundoNumero){
                Resposta = SegundoNumero - PrimeiroNumero
            }
            else{
                Resposta = PrimeiroNumero - SegundoNumero
            }      
            break
        case 3:
            Resposta = PrimeiroNumero * SegundoNumero
            break
        case 4:
            if (SegundoNumero != 0){
                Resposta = PrimeiroNumero / SegundoNumero
            }
            else{
                alert("O segundo numero deve ser diferente de 0")
            }
            break
        default:
            alert("Digite uma opção valida")
    }
    document.getElementById("Resposta").innerHTML = `O Resultado é: ${Resposta}`
}

function ex15(){
    let Tipo = document.getElementById("PrimeiroNumero").value
    let Valor = parseFloat(document.getElementById("SegundoNumero").value)
    let Resposta

    switch(parseInt(Tipo)){
        case 1:
            Resposta = Valor + (Valor * 0.03)
            break
        case 2:
            Resposta = Valor + (Valor * 0.04)
            break
    }

    document.getElementById("Resposta").innerHTML = `O valor do investimento corrigido é: ${Resposta}`
}

function ex16(){
    let Valor = parseFloat(document.getElementById("PrimeiroNumero").value)
    let Resposta 
    let Desconto = parseFloat(0)
    let Evalido = 1

    if (Valor > 0 && Valor < 30){
        Desconto = Valor * 0
        Resposta = Valor - Desconto
    }else if (Valor >= 30 && Valor <= 100){
        Desconto = Valor * 0.1
        Resposta = Valor - Desconto
    }else if (Valor > 100){
        Desconto = Valor * 0.15
        Resposta = Valor - Desconto
    }else {
        Resposta = "Digite um valor valido!!!"
        Evalido = 0
    }

    if (Evalido != 0){
        document.getElementById("Resposta").innerHTML = `O valor do desconto foi de: ${Desconto.toFixed(2)}. O novo valor é: ${Resposta}`
    }else {
        document.getElementById("Resposta").innerHTML = `${Resposta}`
    }
}

function ex17(){
    let Senha = document.getElementById("PrimeiroNumero").value

    if (Senha == "4531"){
        alert("Acesso permitido!")
    }else {
        alert("Acesso negado!")
    }
}

function ex18(){
    let Idade = parseInt(document.getElementById("PrimeiroNumero").value)

    if (Idade >= 18){
        document.getElementById("Resposta").innerHTML = "Maior de idade!"
    }else{
        document.getElementById("Resposta").innerHTML = "Menor de idade!"
    }
}

function ex19(){
    let Altura = parseInt(document.getElementById("PrimeiroNumero").value)
    let Sexo = document.getElementById("SegundoNumero").value

    let Pesoideal

    switch(Sexo){
        case "1":
            Pesoideal = (72.7 * Altura) - 58
            break
        case "2":
            Pesoideal = (62.1 * Altura) - 44.7
            break
    }

    document.getElementById("Resposta").innerHTML = `O seu peso ideal é ${Pesoideal.toFixed(2)}`
}

function ex20(){
    let Idade = parseInt(document.getElementById("PrimeiroNumero").value)

    let Categoria

    if (Idade >= 5){
        if (Idade <= 7){
            Categoria = "Infantil"
        }else if (Idade >= 8 && Idade <= 10){
            Categoria = "Juvenil"
        }else if (Idade >= 11 && Idade <= 15){
            Categoria = "Adolescente"
        }else if (Idade >= 16 && Idade <= 30){
            Categoria = "Adulto"
        }else{
            Categoria = "Sênior"
        }

        document.getElementById("Resposta").innerHTML = `A sua categoria é ${Categoria}`
    }else{
        alert("A idade deve ser maior que 5!!")
    }
}

function ex21(){
    let Codigo = parseInt(document.getElementById("SegundoNumero").value)

    let Origem
    
    if (Codigo > 0){
        if (Codigo == 1){
            Origem = "Sul"
        }else if (Codigo == 2){
            Origem = "Norte"
        }else if (Codigo == 3){
            Origem = "Leste"
        }else if (Codigo == 4){
            Origem = "Oeste"
        }else if (Codigo == 5 || Codigo == 6){
            Origem = "Nordeste"
        }else if (Codigo >= 7 && Codigo <= 9){
            Origem = "Sudeste"
        }else if (Codigo >= 10 && Codigo <= 20){
            Origem = "Centro-oeste"
        }else if (Codigo >= 21 && Codigo <= 30){
            Origem = "Nordeste"
        }

        document.getElementById("Resposta").innerHTML = `A origem do produto é: ${Origem}`
    }else {
        alert("O codigo deve ser maior que 0!!!")
    }
}

function ex22(){
    let Idade = document.getElementById("PrimeiroNumero").value
    let Peso = document.getElementById("SegundoNumero").value
    let Resposta

    if (Idade > 0 && Idade < 20){
        if (Peso > 0 && Peso < 60){
            Resposta = 9
        }else if (Peso >= 60 && Peso <= 90){
            Resposta = 8
        }else if (Peso > 90){
            Resposta = 7
        }else{
            Resposta = "Digite um peso valido!"
        }
    }else if (Idade >= 20 && Idade <= 50){
        if (Peso > 0 && Peso < 60){
            Resposta = 6
        }else if (Peso >= 60 && Peso <= 90){
            Resposta = 5
        }else if (Peso > 90){
            Resposta = 4
        }else{
            Resposta = "Digite um peso valido!"
        }
    }else if (Idade > 50){
        if (Peso > 0 && Peso < 60){
            Resposta = 3
        }else if (Peso >= 60 && Peso <= 90){
            Resposta = 2
        }else if (Peso > 90){
            Resposta = 1
        }else{
            Resposta = "Digite um peso valido!"
        }
    }else{
        Resposta = "Digite uma idade valida!"
    }

    document.getElementById("Resposta").innerHTML = `O grupo de risco é: ${Resposta}`
}

function ex23(){
    let Codigo = document.getElementById("PrimeiroNumero").value
    let Quantidade = parseFloat(document.getElementById("SegundoNumero").value)

    let PrecoUnitario = null
    let ValorNota
    let Desconto
    let ValorDesconto
    let NovoPreco

    if (Quantidade > 0){
        if (Codigo >= 1 && Codigo <= 10){
            PrecoUnitario = 10
        }else if(Codigo >= 11 && Codigo <= 20){
            PrecoUnitario = 15
        }else if(Codigo >= 21 && Codigo <= 30){
            PrecoUnitario = 20
        }else if(Codigo >= 31 && Codigo <= 40){
            PrecoUnitario = 30
        }else{
            alert("Código invalido!!!")
        }
    
        if (PrecoUnitario != null){
            ValorNota = PrecoUnitario * Quantidade
            if (ValorNota < 250){
                Desconto = 0.05
            }else if (ValorNota >= 250 && ValorNota <= 500){
                Desconto = 0.1
            }else{
                Desconto = 0.15
            }
            ValorDesconto = ValorNota * Desconto
            NovoPreco = ValorNota - ValorDesconto

            document.getElementById("Resposta").innerHTML = `Preço unitário: ${PrecoUnitario}<br>
            Preço total da nota: ${ValorNota}<br>Valor do desconto: ${ValorDesconto}<br>Novo preço: ${NovoPreco}`
        }
    }else{
        alert("Digite um código valido!!!")
    }
}

function ex24(){
    let Preco = document.getElementById("PrimeiroNumero").value
    let Categoria = parseInt(document.getElementById("SegundoNumero").value)
    let Situacao = document.getAnimations("TerceiroNumero").value
    
    let PercentualAumento = parseFloat(0)
    let ValorAumento
    let Imposto = 0.08
    let ValorImposto
    let NovoPreco
    let Classificao

    if (Preco > 0){
        if (Preco <= 25){
            switch(Categoria){
                case 1:
                    PercentualAumento = 0.05
                    break
                case 2:
                    PercentualAumento = 0.08
                    Imposto = 0.05
                    break
                case 3:
                    PercentualAumento = 0.1
            }
        }else{
            switch(Categoria){
                case 1:
                    PercentualAumento = 0.12
                    break
                case 2:
                    PercentualAumento = 0.15
                    Imposto = 0.05
                    break
                case 3:
                    PercentualAumento = 0.18
            }
        }
        if (Situacao == 1){
            Imposto = 0.05
        }

        ValorAumento = Preco * PercentualAumento
        ValorImposto = Preco * Imposto
        NovoPreco = parseInt(Preco) + ValorAumento - ValorImposto

        if (NovoPreco <= 50){
            Classificao = "Barato"
        }else if (NovoPreco > 50 && NovoPreco < 120){
            Classificao = "Normal"
        }else{
            Classificao = "Caro"
        }

        document.getElementById("Resposta").innerHTML = `Valor do aumento: ${ValorAumento.toFixed(2)}<br>Valor imposto: ${ValorImposto.toFixed(2)}
            <br>Novo Preço: ${NovoPreco}<br>Classificação: ${Classificao}`

    }else{
        alert("Digite um preço valido!!!")
    }
}

function ex25(){
    let HorasExtras = parseFloat(document.getElementById("PrimeiroNumero").value)
    let HorasFaltas = parseFloat(document.getElementById("SegundoNumero").value)

    let H = (HorasExtras * 60) - (2/3 * (HorasFaltas * 60))
    let Premio

    if (H >= 2400){
        Premio = 500
    } else if (H >= 1800 && H < 2400){
        Premio = 400
    } else if (H >= 1200 && H < 1800){
        Premio = 300
    } else if (H >= 600 && H < 1200){
        Premio = 200
    } else if (H < 600){
        Premio = 100
    }

    document.getElementById("Resposta").innerHTML = `O valor do seu premio é: ${Premio}`
}