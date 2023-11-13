async function api(){
    let email = document.getElementById("email").value

    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)

    let dados = await resposta.json()

    document.getElementById("nome").value = dados[0].name
    document.getElementById("id").value = dados[0].id
    document.getElementById("username").value = dados[0].username
    document.getElementById("phone").value = dados[0].phone
    document.getElementById("street").value = dados[0].address.street
    document.getElementById("suite").value = dados[0].address.suite
    document.getElementById("city").value = dados[0].address.city
    document.getElementById("zipcode").value = dados[0].address.zipcode
    document.getElementById("website").value = dados[0].website
    document.getElementById("city").value = dados[0].address.city
    document.getElementById("companyname").value = dados[0].company.name
    document.getElementById("catchphrase").value = dados[0].company.catchphrase
    document.getElementById("bs").value = dados[0].company.bs
}