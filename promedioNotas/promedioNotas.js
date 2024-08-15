calcularPromedioNotas=function(){
    let n1Float=recuperarFlotante("txtn1");
    let n2Float=recuperarFlotante("txtn2");
    let n3Float=recuperarFlotante("txtn3");
    let promedio=calcularPromedio(n1Float,n2Float,n3Float);
    let promedioRedondeado=promedio.toFixed(2);
    cambiarTexto("lblpromedio",promedioRedondeado);

    if(promedioRedondeado<5 && promedioRedondeado>0){
        cambiarTexto("lblinfo","REPROBADO");
        cambiarImagen("imgV","reprobado.gif");
    }else if(promedioRedondeado>=5 && promedioRedondeado<=8){
        cambiarTexto("lblinfo","BUEN TRABAJO");
        cambiarImagen("imgV","buen.gif");
    }else if(promedioRedondeado>8 && promedioRedondeado<=10){
        cambiarTexto("lblinfo","EXCELENTE");
        cambiarImagen("imgV","exito.gif");
    }else{
        cambiarTexto("lblinfo","DATOS INCORRECTOS");
        cambiarImagen("imgV","incorrecto.gif");
    }
}