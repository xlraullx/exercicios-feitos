enum StatusPedido {
    Pendente = 0,
    Pago = 100, 
    Enviado = 200,
    Entregue = 300,
    Cancelado = 400
}

const statusAtual = StatusPedido[400]

console.log(`O status atual do pedido é: ${statusAtual}`);