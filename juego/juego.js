let puntosUsuario=0;
let puntosComputador=0;

jugar=function(seleccionado){
    let elemento=generarElemento();
    ruta=generarRuta(elemento);
    mostrarImagen("imgJC",ruta);
    let decision=determinarGanador(elemento,seleccionado);
    if(decision==0){
        mostrarTexto("lblresultado","EMPATE");
    }else if(decision==1){
        mostrarTexto("lblresultado","PERDISTE LA PARTIDA!!");
        puntosComputador=puntosComputador+1;
        mostrarTexto("lblComputador",puntosComputador);
    }else if(decision==2){
        mostrarTexto("lblresultado","GANASTE LA PARTIDA!!");
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("lblUsuario",puntosUsuario);
    }

    if(puntosUsuario==5){
        mostrarTexto("lblGanador","HAS GANADO EL JUEGO");

    }else if(puntosComputador==5){
        mostrarTexto("lblGanador","EL COMPUTADOR TE HA VENCIDO");

    }
}

limpiar = function () {
    puntosUsuario=0;
    mostrarTexto("lblUsuario",puntosUsuario);
    puntosComputador=0;
    mostrarTexto("lblComputador",puntosComputador);

    mostrarImagen("imgJC","");
    mostrarTexto("lblresultado", "")
    mostrarTexto("lblComputador", "")
    mostrarTexto("lblUsuario", "")
    mostrarTexto("lblGanador", "")
}