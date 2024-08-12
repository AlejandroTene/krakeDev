calcularPromedioNotas=function(){
    let n1Float=recuperarFlotante("txtn1");
    let n2Float=recuperarFlotante("txtn2");
    let n3Float=recuperarFlotante("txtn3");
    let promedio=calcularPromedio(n1Float,n2Float,n3Float);
    let promedioRedondeado=promedio.toFixed(2);
    cambiarTexto("lblpromedio",promedioRedondeado);
}