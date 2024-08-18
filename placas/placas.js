validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);
    if(erroresEstructura==null){
        cambiarTexto("lblValidar","ESTRUCTURA VALIDA");
        cambiarTexto("lblErrores","")
        let provincia=obtenerProvincia(placa);
        if(provincia!=null){
            cambiarTexto("lblProvincia",provincia);
        }else{
            cambiarTexto("lblProvincia","PROVINCIA INCORRECTA");
        }
        let tipoVehiculo=obtenerTipoVehiculo(placa);
        if(tipoVehiculo!=null){
            cambiarTexto("lbltipo",tipoVehiculo);
        }else{
            cambiarTexto("lbltipo","TIPO DE VEHÍCULO INCORRECTO");
        }
        let picoYPlaca=obtenerDiaPicoYPlaca(placa);
        cambiarTexto("lbldia",picoYPlaca);
    }else{
        cambiarTexto("lblValidar","ESTRUCTURA INCORRECTA");
        cambiarTexto("lblErrores",erroresEstructura)
    }
}

limpiar = function () {
    mostrarTextoEnCaja("txtPlaca", "")
    mostrarTexto("lblValidar", "")
    mostrarTexto("lblErrores", "")
    mostrarTexto("lblProvincia", "")
    mostrarTexto("lbltipo", "")
    mostrarTexto("lbldia", "")

}