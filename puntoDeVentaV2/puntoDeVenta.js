calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto; 
    let cantidad; 

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");

    if (esProductoValido(nombreProducto, "lblErrorProducto") & esCantidadValida(cantidad, "lblErrorCantidad") & esPrecioValido(precioProducto, "lblErrorPrecio")) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);


        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);


        let valorConDescuento = valorSubtotal - valorDescuento;
        valorIVA = calcularIVA(valorConDescuento);
        mostrarTexto("lblValorIVA", valorIVA);


        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);

        let mensaje = "Valor a pagar por " + cantidad + " " + nombreProducto + " con " + valorDescuento + " de descuento: USD " + valorTotal;
        mostrarTexto("lblResumen", mensaje);

    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
        mostrarTexto("lblResultado", "");
    }
}

limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "")
    mostrarTextoEnCaja("txtPrecio", "0.0")
    mostrarTextoEnCaja("txtCantidad", "0")

    mostrarTexto("lblSubtotal", "0.0")
    mostrarTexto("lblDescuento", "0.0")
    mostrarTexto("lblValorIVA", "0.0")
    mostrarTexto("lblTotal", "0.0")
    mostrarTexto("lblResumen", "")

}

esProductoValido = function (nombreProducto, idComponenteError) {
    let hayErrores = false;
    let tamanio = nombreProducto.length;
    if (tamanio > 10) {
        hayErrores = true;
        mostrarTexto(idComponenteError, "ERROR EL NOMBRE DEBE TENER 10 O MENOS CARACTERES");
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

esCantidadValida = function (cantidad, idComponenteError) {
    let hayErrores = false;
    if (cantidad < 0 || cantidad > 100) {
        hayErrores = true;
        mostrarTexto(idComponenteError, "DEBE SER UN NUMERO ENTRE 0 Y 100");
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

esPrecioValido = function (precio, idComponenteError) {
    let hayErrores = false;
    if (precio < 0 || precio > 50) {
        hayErrores = true;
        mostrarTexto(idComponenteError, "DEBE SER UN NUMERO ENTRE 0 Y 50");
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

