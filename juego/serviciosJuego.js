obtenerAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let numero;

    aleatorio=Math.random(); // entre 0 y 1
    numeroMultiplicado=aleatorio*3;
    
    numeroEntero=parseInt(numeroMultiplicado);

    numero=numeroEntero+1;//entre 0 y 3

    return numero;
}

generarElemento=function(){
    let numeroRandomico=obtenerAleatorio();
    let elemento;

    if(numeroRandomico==1){
        return elemento="piedra";
    }else if(numeroRandomico==2){
        return elemento="papel";
    }else if(numeroRandomico==3){
        return elemento="tijera";
    }
}

determinarGanador=function(eleccionJ1,eleccionJ2){

    if(eleccionJ1==eleccionJ2){
        return 0;
    }else if(eleccionJ1=="piedra" && eleccionJ2=="tijera" || eleccionJ1=="papel" && eleccionJ2=="piedra"  || eleccionJ1=="tijera" && eleccionJ2=="papel" ){
        return 1;
    }else if(eleccionJ2=="piedra" && eleccionJ1=="tijera" || eleccionJ2=="papel" && eleccionJ1=="piedra"  || eleccionJ2=="tijera" && eleccionJ1=="papel" ){
        return 2;
    }
}

generarRuta=function(nombre){
    if(nombre=="piedra"){
        return "./imagenes/piedra.png";
    }else if(nombre=="papel"){
        return "./imagenes/papel.png";
    }else if(nombre=="tijera"){
        return "./imagenes/tijera.png";
    }
}