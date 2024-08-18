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
        mensajeErrores=mensajeErrores+" - El primer caracter debe ser una letra mayúscula";
    }

    let segundoCaracter= placa.charCodeAt(1);
    if (esMayuscula(segundoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El segundo caracter debe ser una letra mayúscula ";
    }

    let tercerCaracter= placa.charCodeAt(2);
    if (esMayuscula(tercerCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El tercer caracter debe ser una letra mayúscula ";
    }

    let cuartoCaracter= placa.charCodeAt(3);
    if (esGuion(cuartoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El cuarto caracter debe ser un guión ";
    }

    let quintoCaracter= placa.charCodeAt(4);
    if (esDigito(quintoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El quinto caracter debe ser un dígito ";
    }

    let sextoCaracter= placa.charCodeAt(5);
    if (esDigito(sextoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El sexto caracter debe ser un dígito ";
    }

    let septimoCaracter= placa.charCodeAt(6);
    if (esDigito(septimoCaracter)==false) {
        hayErrores = true;
        mensajeErrores=mensajeErrores+" - El septimo caracter debe ser un dígito ";
    }

    if (tamanio==8) {
        let octavoCaracter= placa.charCodeAt(7);
        if (esDigito(octavoCaracter)==false) {
            hayErrores = true;
            mensajeErrores=mensajeErrores+" - El octavo caracter debe ser un dígito ";
        }
    }
    
    if (hayErrores==false) {
        return null;
    }else{
        return mensajeErrores;
    }   
}

obtenerProvincia=function(placa){
    let letra1= placa.charCodeAt(0)
    let provincia;

    if (letra1==65) {
        provincia="Azuay";
    }else if (letra1==66){
        provincia="Bolívar";
    }else if (letra1==85){
        provincia="Cañar";
    }else if (letra1==67){
        provincia="Carchi";
    }else if (letra1==88){
        provincia="Cotopaxi";
    }else if (letra1==72){
        provincia="Chimborazo";
    }else if (letra1==79){
        provincia="El Oro";
    }else if (letra1==69){
        provincia="Esmeraldas";
    }else if (letra1==87){
        provincia="Galápagos";
    }else if (letra1==71){
        provincia="Guayas";
    }else if (letra1==73){
        provincia="Imbabura";
    }else if (letra1==76){
        provincia="Loja";
    }else if (letra1==82){
        provincia="Los Ríos";
    }else if (letra1==77){
        provincia="Manabí";
    }else if (letra1==86){
        provincia="Morona Santiago";
    }else if (letra1==78){
        provincia="Napo";
    }else if (letra1==83){
        provincia="Pastaza";
    }else if (letra1==80){
        provincia="Pichincha";
    }else if (letra1==75){
        provincia="Sucumbíos";
    }else if (letra1==81){
        provincia="Orellana";
    }else if (letra1==84){
        provincia="Tungurahua";
    }else if (letra1==90){
        provincia="Zamora Chinchipe";
    }else if (letra1==89){
        provincia="Santa Elena";
    }else{
        return null;
    }

    return provincia;
}

obtenerTipoVehiculo=function(placa){
    let letra2= placa.charCodeAt(1)
    let tipo;

    if (letra2<65 || letra2>90) {
       return null;
    }else if (letra2==65 || letra2==90) {
        tipo="Vehículo comercial";
    }else if (letra2==69){
        tipo="Vehículo gubernamental";
    }else if (letra2==88){
        tipo="Vehículo de uso oficial";
    }else if (letra2==83){
        tipo="Vehículo del gobierno provincial";
    }else if (letra2==77){
        tipo="Vehículo municipal";
    }else{
        tipo="Vehículo particular (privado)";
    }

    return tipo;
}

obtenerDiaPicoYPlaca=function(placa){
    let ultimo= placa.charCodeAt(placa.length -1)
    let picoYPlaca;

    if (ultimo==49 || ultimo==50) {
       picoYPlaca="Lunes";
    }else if (ultimo==51 || ultimo==52) {
        picoYPlaca="Martes";
    }else if (ultimo==53 || ultimo==54) {
        picoYPlaca="Miércoles";
    }else if (ultimo==55 || ultimo==56) {
        picoYPlaca="Jueves";
    }else if (ultimo==57 || ultimo==48) {
        picoYPlaca="Viernes";
    }
    return picoYPlaca;
}




