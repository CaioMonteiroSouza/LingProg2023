async function api(){
    let cep = Number(document.getElementById("cep").value)

    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)

    let dados = await resposta.json()

    document.getElementById("logradouro").value = dados.logradouro
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("localidade").value = dados.localidade
    document.getElementById("uf").value = dados.uf
}