const estoque = 100 //Colocar um valor x

if (estoque >= 100){
    console.log("Produto com quantidade suficiente");
}else if (estoque >= 50 && estoque < 100){
    console.log("Alerta: Avaliar possibilidade de novo pedido.")
}else {
    console.log("ATENÇÃO! Faça um novo pedido!")
}