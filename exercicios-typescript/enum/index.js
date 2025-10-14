var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Pendente"] = 0] = "Pendente";
    StatusPedido[StatusPedido["Pago"] = 100] = "Pago";
    StatusPedido[StatusPedido["Enviado"] = 200] = "Enviado";
    StatusPedido[StatusPedido["Entregue"] = 300] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 400] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
var statusAtual = StatusPedido[400];
console.log("O status atual do pedido \u00E9: ".concat(statusAtual));
