let personas=[
    { nombre: "Marcoss" , edad: 18 },
    { nombre: "Roberto" , edad: 15 },
    { nombre: "Kate" , edad: 25 },
    { nombre: "Diana" , edad: 12 },
    { nombre: "Benja" , edad: 5 }
];

agregarPersona=function(){
    let vNombre = recuperarTexto("txtNombre");
    let errores=false;
    if (vNombre.length < 3) {
        mostrarTexto("lblErrorNombre", "Debe tener al menos 3 caracteres");
        errores=true;
    }

    let vEdad = recuperarInt("txtEdad");

    if (vEdad == NaN || vEdad < 0 || vEdad>100) {
        mostrarTexto("lblErrorEdad", "Debe ser un número entero entre 0 y 100");
        errores=true;
    }

    if(errores==false){
        let nuevaPersona={};
        nuevaPersona.nombre=vNombre;
        nuevaPersona.edad=vEdad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE")
        mostrarPersonas();
    }
}

mostrarPersonas=function(){
    let cmptabla = document.getElementById("tablaP");
    let contenidoTabla = "<table><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";
    let elemento;
    for (let i = 0; i < personas.length; i++) {
        elemento = personas[i];
        contenidoTabla +=
            "<tr><td>" + elemento.edad + "</td>"
            + "<td>" + elemento.nombre + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmptabla.innerHTML = contenidoTabla;
}

encontrarMayor=function(){
    let personaMayor;
    personaMayor=personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        let elementoPersona=personas[i];
        console.log(elementoPersona.nombre);
        console.log(elementoPersona.edad);
        if(elementoPersona.edad>personaMayor.edad){
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}

encontrarMenor=function(){
    let personaMenor;
    personaMenor=personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        let elementoPersona=personas[i];
        console.log(elementoPersona.nombre);
        console.log(elementoPersona.edad);
        if(elementoPersona.edad<personaMenor.edad){
            personaMenor=elementoPersona;
        }
    }
    return personaMenor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTexto("lblMayor",mayor.nombre+" "+mayor.edad );
}

determinarMenor=function(){
    let menor=encontrarMenor();
    mostrarTexto("lblMenor",menor.nombre+" "+menor.edad );
}