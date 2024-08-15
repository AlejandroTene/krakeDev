let puntos=0;
let lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();

}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    //Si el jugador obtiene mas de 20 puntos 
    //mostrar en pantalla un mensaje GANASTE
    //invocar a limpiar
    if(puntos > 20){
        cambiarTexto("lblResultado","GANASTE!!");
        limpiar();
    }
    
}

//no reibe parametros
//resta 1 a la variable lanzamientos,guarda el resultado a la misma variable
//y muestra en pantalla
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    //si lanzamientos llega a 0
    //mostrar en pantalla el mensaje GAME OVER
    //invoca a limpiar
    if(lanzamientos == 0){
        cambiarTexto("lblResultado","GAME OVER");
        limpiar();
    }
}

limpiar=function(){
    //colocar puntaje en 0 y lanzamientos en 5
    //en las variables y pantalla
    //quitar la imagen""
    puntos=0;
    cambiarTexto("lblPuntos",puntos);
    lanzamientos=5;
    cambiarTexto("lblLanzamientos",lanzamientos);
    cambiarImagen("imgDado","");
}




//funcion mostarCara, recibe el numero que quiere mostrar
//muestra a imagen correspondiente al numero que recibe
//no retorna nada

mostarCara=function(numero){
    if(numero == 1){// con == se compara, mientras que con = se asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }

}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}