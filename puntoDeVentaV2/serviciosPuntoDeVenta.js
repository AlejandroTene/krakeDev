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

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento;
    if(cantidad<3){
        descuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=subtotal*0.03;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=subtotal*0.04;
    }else if(cantidad>=12){
        descuento=subtotal*0.05;
    }

    return descuento;
}

