generarNumero=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let numero;
    aleatorio=Math.random(); 
    numeroMultiplicado=aleatorio*100;
    numeroEntero=parseInt(numeroMultiplicado);
    numero=numeroEntero+1;

    return numero;
}

generarAleatorios=function(){
    let aleatorios=[];
    let numeroI=recuperarTexto("txtNumero");
    if(numeroI>=5 && numeroI<=20){
        for(let i=0;i<numeroI;i++){
            let numeroA=generarNumero();
            aleatorios.push(numeroA);
            console.log(i);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados=function(arregloNumeros){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoT="<table><tr><th>NÚMEROS</th></tr>";
    let numero;
    for(let i=0;i<arregloNumeros.length;i++){
        numero=arregloNumeros[i];
        contenidoT+="<tr><td>";
        contenidoT+=numero;
        contenidoT+="</td><tr>";
    }
    contenidoT+="</table>";
    cmpTabla.innerHTML=contenidoT;
}


