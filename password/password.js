validraPassword=function(password){
    let tamanio = password.length;
    let mensajeErrores="";
    let letra;
    let letracodigo;
    let conM=false;
    let conD=false;
    let conC=false;
    hayErrores = true;
    if (tamanio <8) {
        hayErrores=false;
        mensajeErrores="- Tiene que tener una longitud mínima de 8 caracteres";
    }else if(tamanio >16){
        hayErrores=false;
        mensajeErrores=mensajeErrores+"- Tiene que tener una longitud máxima de 16 caracteres";
    }

    for(let i=0;i<password.length;i++){
        letra=password.charAt(i);
        letracodigo=password.charCodeAt(i);
        if(esMayuscula(letracodigo)){
           conM=true;
        }else if(esDigito(letracodigo)){
            conD=true;
        }else if(letra=="*"||letra=="-"||letra=="_"){
            conC=true;
        }
    }

    if(conM==false){
        hayErrores=false;
        mensajeErrores=mensajeErrores+"- Tiene que tener al menos una letra mayúscula";
    }
    if(conD==false){
        hayErrores=false;
        mensajeErrores=mensajeErrores+"- Tiene que tener al menos un digito";
    }
    if(conC==false){
        hayErrores=false;
        mensajeErrores=mensajeErrores+"- Tiene que tener al menos un caracter especial * , - , _";
    }

    if(hayErrores==false){
        return mensajeErrores;
    }else{
        return "";
    }


}

ejecutarValidacion=function(){
    let contraseña=recuperarTexto("txtPassword")
    let validacion=validraPassword(contraseña);
    if(validacion==""){
        mostrarTexto("lblResultado","Password Correcto");
    }else{
        mostrarTexto("lblResultado",validacion);
    }
}

mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
}


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