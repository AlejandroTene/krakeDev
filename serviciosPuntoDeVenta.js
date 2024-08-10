calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento= (monto*porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIVA=function(monto){
    let valorIVA= (monto*12)/100;
    return valorIVA;
}

calcularSubtotal=function(precio,cantidad){
    let subtotal= precio*cantidad;
    return subtotal;
}

calcularTotal=function(subtotal,descuento,iva){
    let valorTotal= (subtotal-descuento)+iva;
    return valorTotal;
}
