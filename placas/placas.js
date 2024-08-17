validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);
    if(erroresEstructura==null){
        cambiarTexto("lblValidar","ESTRUCTURA VALIDA");
        cambiarTexto("lblErrores","")
    }else{
        cambiarTexto("lblValidar","ESTRUCTURA INCORRECTA");
        cambiarTexto("lblErrores",erroresEstructura)
    }
}