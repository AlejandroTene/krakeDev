
ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena=function(cadena){
    //0123
    //Juan
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);
    }
}

ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    let invertido=invertirCadena(mensaje);
    mostrarTexto("lblIn",invertido);
}

invertirCadena=function(cadena){
    let mensaje="";
    let caracter;

    for(let posicion=cadena.length-1;posicion>=0;posicion--){
        caracter=cadena.charAt(posicion);
        mensaje=mensaje+caracter;
    }
    return mensaje;
}