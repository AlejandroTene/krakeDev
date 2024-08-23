let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1150253086",nombre:"Carlos",apellido:"Mora",sueldo:475.0}
]

mostrarEmpleados=function(){
    let cmptabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th>CÉDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoC;
    for(let i=0;i<empleados.length;i++){
        elementoC=empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoC.cedula+"</td>"
        +"<td>"+elementoC.nombre+"</td>"
        +"<td>"+elementoC.apellido+"</td>"
        +"<td>"+elementoC.sueldo+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmptabla.innerHTML=contenidoTabla;
}

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
