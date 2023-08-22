function ex1(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let SegundoNumero = document.getElementById("SegundoNumero").value
    let Resposta = PrimeiroNumero - SegundoNumero

    document.getElementById("Resposta").innerHTML = `O Resultado é: ${Resposta}`
}

function ex2(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let SegundoNumero = document.getElementById("SegundoNumero").value
    let TerceiroNumero = document.getElementById("TerceiroNumero").value
    let Resposta = PrimeiroNumero * SegundoNumero * TerceiroNumero

    document.getElementById("Resposta").innerHTML = `O Resultado é: ${Resposta}`
}

function ex3(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let SegundoNumero = document.getElementById("SegundoNumero").value
    let Resposta = PrimeiroNumero / SegundoNumero

    document.getElementById("Resposta").innerHTML = `O Resultado é: ${Resposta}`
}

function ex4(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let SegundoNumero = document.getElementById("SegundoNumero").value
    let Resposta = ((PrimeiroNumero * 2) + (SegundoNumero * 3)) / 5

    document.getElementById("Resposta").innerHTML = `O Resultado é: ${Resposta.toFixed(2)}`
}

function ex5(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let Resposta = PrimeiroNumero * 0.90

    document.getElementById("Resposta").innerHTML = `O Resultado é: ${Resposta.toFixed(2)}`
}

function ex6(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let SegundoNumero = document.getElementById("SegundoNumero").value
    let ValorComissao = SegundoNumero * 0.04
    let Resposta = parseFloat(PrimeiroNumero) + parseFloat(ValorComissao)

    document.getElementById("Resposta").innerHTML = `O Salário total do funcionario é: ${Resposta}`
}

function ex7(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let Resposta1 = parseFloat(PrimeiroNumero) + parseFloat(PrimeiroNumero * 0.15)
    let Resposta2 = parseFloat(PrimeiroNumero) - parseFloat(PrimeiroNumero * 0.2)

    document.getElementById("Resposta").innerHTML = `Caso a pessoa engordar 15% o peso sera de: ${Resposta1} e caso emagrecer 20%: ${Resposta2}`
}

function ex8(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let Resposta = PrimeiroNumero * 1000

    document.getElementById("Resposta").innerHTML = `O peso em gramas é: ${Resposta.toFixed(2)}`
}

function ex9(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let SegundoNumero = document.getElementById("SegundoNumero").value
    let TerceiroNumero = document.getElementById("TerceiroNumero").value
    let Resposta = ((parseFloat(PrimeiroNumero) + parseFloat(SegundoNumero)) / 2) * parseFloat(TerceiroNumero)

    document.getElementById("Resposta").innerHTML = `O Resultado é: ${Resposta}`
}

function ex10(){
    let PrimeiroNumero = document.getElementById("PrimeiroNumero").value
    let Resposta = parseFloat(PrimeiroNumero) * parseFloat(PrimeiroNumero)

    document.getElementById("Resposta").innerHTML = `O Area do quadrado é: ${Resposta}`
}