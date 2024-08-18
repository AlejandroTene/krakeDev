esMayuscula=function(caracter){
    if(caracter>=65 && caracter<=90){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    if(caracter>=48 && caracter<=57){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter){
    if(caracter==45){
        return true;
    }else{
        return false;
    }
}

recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
}

cambiarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}