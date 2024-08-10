saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");

    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienbenida="Bienvenido "+nombre+" "+apellido;
    
    mostrarTexto("lblResultado",mensajeBienbenida);

    mostrarImagen("imgSaludo","./imagenes/saludo.gif");

    mostrarTextoEnCaja("txtNombre","");
}


