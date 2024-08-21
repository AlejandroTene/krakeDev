//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos=0;
let coincidencias=0;
let errores=0;

esMayuscula = function (caracter) {
    if (caracter >= 65 && caracter <= 90) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    let tamanio = palabra.length;
    let conM = true;
    for (let i = 0; i < tamanio; i++) {
        letracodigo = palabra.charCodeAt(i);
        if (!esMayuscula(letracodigo)) {
            conM = false;
        }
    }
    if (conM == false || tamanio != 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
    } else {
        palabraSecreta = palabra;
    }


    console.log(palabraSecreta);
}

mostrarLetra = function (letra,posicion) {
    if (posicion == 0) {
        mostrarTextoDiv("div0",letra);
    } else if(posicion == 1){
        mostrarTextoDiv("div1",letra);
    } else if(posicion == 2){
        mostrarTextoDiv("div2",letra);
    }else if(posicion == 3){
        mostrarTextoDiv("div3",letra);
    }else if(posicion == 4){
        mostrarTextoDiv("div4",letra);
    }
}

validar = function (letra) {
    let letrasEncontradas=0;
    let tamanio = palabraSecreta.length;
    for (let i = 0; i < tamanio; i++) {
        let caracter= palabraSecreta.charAt(i);
        if (caracter==letra) {
            mostrarLetra(letra,i);
            letrasEncontradas++;
            coincidencias++;
        }
    }
    if(letrasEncontradas==0){
        alert("La letra no es parte de la palabra");
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra = function () {
    intentos++;
    let letra=recuperarTexto("txtLetra");
    let letraCodigo = letra.charCodeAt(0);
    if(esMayuscula(letraCodigo)){
        validar(letra);
        if(coincidencias==5){
            alert("HA GANADO");
        }
        if(intentos==10){
            alert("HA PERDIDO");
        }
    }else{
        alert("Solo se aceptan mayúsculas");
    }
}

mostrarAhorcado= function () {
    if(errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
    
}

mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}


mostrarTextoDiv=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.textContent = mensaje;
}


recuperarTexto = function (idComponente) {
    let cmpTexto;
    let valor;
    cmpTexto = document.getElementById(idComponente);
    valor = cmpTexto.value;
    return valor;
}