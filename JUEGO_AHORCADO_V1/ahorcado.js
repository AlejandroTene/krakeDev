//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";

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
    } else if(posicion == 1){
        mostrarTextoDiv("div2",letra);
    }else if(posicion == 1){
        mostrarTextoDiv("div3",letra);
    }else if(posicion == 1){
        mostrarTextoDiv("div4",letra);
    }
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