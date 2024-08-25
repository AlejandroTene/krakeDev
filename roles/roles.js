let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1150253086", nombre: "Carlos", apellido: "Mora", sueldo: 475.0 }
]
let esNuevo = false;

mostrarEmpleados = function () {
    let cmptabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CÉDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoC;
    for (let i = 0; i < empleados.length; i++) {
        elementoC = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoC.cedula + "</td>"
            + "<td>" + elementoC.nombre + "</td>"
            + "<td>" + elementoC.apellido + "</td>"
            + "<td>" + elementoC.sueldo + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmptabla.innerHTML = contenidoTabla;
}

buscarEmpleado = function (cedula) {
    let elementoCl;
    let clienteEn = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoCl = empleados[i];
        if (elementoCl.cedula == cedula) {
            clienteEn = elementoCl;
            break;
        }
    }
    return clienteEn;
}

agregarEmpleado = function (empleado) {
    let busqueda = buscarEmpleado(empleado.cedula);
    if (busqueda == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let errores=false;
    let vCedula = recuperarTexto("txtCedula");
    let hayErroresC=false;
    for (let i = 0; i < vCedula.length; i++) {
        let codigo = vCedula.charCodeAt(i);
        if (esDigito(codigo) == false) {
            hayErroresC = true;
        }
    }
    if (vCedula.length != 10 || hayErroresC==true) {
        mostrarTexto("lblErrorCedula","Debe tener 10 caracteres, todos dígitos");
        errores=true;
    }

    let vNombre = recuperarTexto("txtNombre");
    let hayErroresN=false;
    for (let i = 0; i < vNombre.length; i++) {
        let codigo = vNombre.charCodeAt(i);
        if (esMayuscula(codigo) == false) {
            hayErroresN = true;
        }
    }
    if (vNombre.length < 3 || hayErroresN==true) {
        mostrarTexto("lblErrorNombre","Debe tener al menos 3 caracteres y todos en mayúsculas");
        errores=true;
    }


    let vApellido = recuperarTexto("txtApellido");
    let hayErroresA=false;
    for (let i = 0; i < vApellido.length; i++) {
        let codigo = vApellido.charCodeAt(i);
        if (esMayuscula(codigo) == false) {
            hayErroresA = true;
        }
    }
    if (vApellido.length < 3 || hayErroresA==true) {
        mostrarTexto("lblErrorApellido","Debe tener al menos 3 caracteres y todos en mayúsculas");
        errores=true;
    }

    let vSueldo = recuperarFloat("txtSueldo");
    if (vSueldo == NaN || vSueldo<400 || vSueldo>5000) {
        mostrarTexto("lblErrorSueldo","Debe ser un número flotante entre 400 y 5000");
        errores=true;
    }

    if(errores==false){
        if(esNuevo=true){
            let empleado={};
            empleado.cedula=vCedula;
            empleado.nombre=vNombre;
            empleado.apellido=vApellido;
            empleado.sueldo=vNombre;
            let resultado=agregarEmpleado(empleado);
            if(resultado==true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarComponente("txtCedula");
                deshabilitarComponente("txtNombre");
                deshabilitarComponente("txtApellido");
                deshabilitarComponente("txtSueldo");
                deshabilitarComponente("btnGuardar");
            }else{
                alert("YA EXISTE UN EMPLEADO CON LA CÉDULA: "+vCedula);
    
            }
        }
    }
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
