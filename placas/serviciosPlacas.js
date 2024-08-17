validarEstructura=function(placa){
    let hayErrores = false;
    let mensajeErrores="";

    let tamanio = placa.length;
    if (tamanio <7 || tamanio >8) {
        hayErrores = true;
        mensajeErrores="- La placa debe tener 7 u 8 caracteres";
    }

    let primerCaracter= placa.charCodeAt(0);
    if (esMayuscula(primerCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El primer caracter debe ser una letra mayuscula";
    }

    let segundoCaracter= placa.charCodeAt(1);
    if (esMayuscula(segundoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El segundo caracter debe ser una letra mayuscula ";
    }

    let tercerCaracter= placa.charCodeAt(2);
    if (esMayuscula(tercerCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El tercer caracter debe ser una letra mayuscula ";
    }

    let cuartoCaracter= placa.charCodeAt(3);
    if (esGuion(cuartoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El cuarto caracter debe ser un guion ";
    }

    let quintoCaracter= placa.charCodeAt(4);
    if (esDigito(quintoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El quinto caracter debe ser un digito ";
    }

    let sextoCaracter= placa.charCodeAt(5);
    if (esDigito(sextoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El sexto caracter debe ser un digito ";
    }

    let septimoCaracter= placa.charCodeAt(6);
    if (esDigito(septimoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El septimo caracter debe ser un digito ";
    }

    if (tamanio==8) {
        let octavoCaracter= placa.charCodeAt(7);
        if (esDigito(octavoCaracter)==false) {
            hayErrores = true;
            mensajeErrores=mensajeErrores+" - El octavo caracter debe ser un digito ";
        }
    }
    
    //let mensajeFinal=mensaje1+" "+mensaje2+" "+mensaje3+" "+mensaje4+" "+mensaje5+" "+mensaje6+" "+mensaje7+" "+mensaje8+" "+mensaje9;
    
    if (hayErrores==false) {
        return null;
    }else{
        return mensajeErrores;
    }
    

   
}

