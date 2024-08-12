jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblInfo","ES MAYOR A 3 GANASTE");
    }else{
        cambiarTexto("lblInfo","ES MENOR A 3 ESTAS DE MALAS");
    }
}

//crear una funcion llamada lanzarDado
//No recibe parámetros
//Retorna un número aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); // entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    
    numeroEntero=parseInt(numeroMultiplicado);

    valorDado=numeroEntero+1;//entre 0 y 6

    return valorDado;
}