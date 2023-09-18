function ex3(){
    let codigo=[]
    let estoque=[]
    for(let i=0; i < 10; i++){
        codigo.push(Number(prompt(`Informe o codigo do produto ${i+1}`)))
        estoque.push(Number(prompt(`Informe a quantidade em estoque do produto ${i+1}`)))
    }

    let cliente = Number(prompt(`Informe o codigo do cliente:`))
    do{
        let produto = Number(prompt(`Digite o codigo do produto:`))
        let quantidade = Number(prompt(`Digite a quantidade que deseja comprar:`))
        
        let achou = false

        for(i=0;i<10;i++){
            if (codigo[i]==produto){
                achou = true
                if (estoque[i] >= quantidade){
                    alert(`Venda realizada com sucesso`)
                    estoque[i] = estoque[i] - quantidade
                }else{
                    alert(`Estoque insuficiente`)
                }
            }
        }
        if(!achou){
            alert(`Produto não encontrado`)
        }

        cliente = Number(prompt(`Informe o codigo do novo cliente ou 0 para encerrar o programa:`))
    }
    while(client != 0)   
}