let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1150253086", nombre: "Carlos", apellido: "Mora", sueldo: 475.0 }
]
let esNuevo = false;
let roles=[];
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
    let errores = false;
    let vCedula = recuperarTexto("txtCedula");
    let hayErroresC = false;
    for (let i = 0; i < vCedula.length; i++) {
        let codigo = vCedula.charCodeAt(i);
        if (esDigito(codigo) == false) {
            hayErroresC = true;
        }
    }
    if (vCedula.length != 10 || hayErroresC == true) {
        mostrarTexto("lblErrorCedula", "Debe tener 10 caracteres, todos dígitos");
        errores = true;
    }

    let vNombre = recuperarTexto("txtNombre");
    let hayErroresN = false;
    for (let i = 0; i < vNombre.length; i++) {
        let codigo = vNombre.charCodeAt(i);
        if (esMayuscula(codigo) == false) {
            hayErroresN = true;
        }
    }
    if (vNombre.length < 3 || hayErroresN == true) {
        mostrarTexto("lblErrorNombre", "Debe tener al menos 3 caracteres y todos en mayúsculas");
        errores = true;
    }


    let vApellido = recuperarTexto("txtApellido");
    let hayErroresA = false;
    for (let i = 0; i < vApellido.length; i++) {
        let codigo = vApellido.charCodeAt(i);
        if (esMayuscula(codigo) == false) {
            hayErroresA = true;
        }
    }
    if (vApellido.length < 3 || hayErroresA == true) {
        mostrarTexto("lblErrorApellido", "Debe tener al menos 3 caracteres y todos en mayúsculas");
        errores = true;
    }

    let vSueldo = recuperarFloat("txtSueldo");
    if (vSueldo == NaN || vSueldo < 400 || vSueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "Debe ser un número flotante entre 400 y 5000");
        errores = true;
    }

    if (errores == false) {
        if (esNuevo == true) {
            let empleado = {};
            empleado.cedula = vCedula;
            empleado.nombre = vNombre;
            empleado.apellido = vApellido;
            empleado.sueldo = vNombre;
            let resultado = agregarEmpleado(empleado);
            if (resultado == true) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarComponentes();
                esNuevo = false;

            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CÉDULA: " + vCedula);

            }
        } else {
            let info = buscarEmpleado(vCedula);
            info.nombre = vNombre;
            info.apellido = vApellido;
            info.sueldo = vSueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitarComponentes();
        }
    }
}

ejecutarBusqueda = function () {
    let cedulaB = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(cedulaB);
    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        deshabilitarComponente("txtCedula");
    }

}

buscarPorRol=function(){
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let busqueda = buscarEmpleado(cedula);
    if(busqueda!=null){
        mostrarTexto("infoCedula", busqueda.cedula);
        mostrarTexto("infoNombre", busqueda.nombre+" "+busqueda.apellido);
        mostrarTexto("infoSueldo", busqueda.sueldo);
    }else{
        alert("EL EMPLEADO NO EXISTE");
    }
}

buscarRol=function(cedula){
    let elementoE;
    let empleadoE = null;
    for (let i = 0; i < roles.length; i++) {
        elementoE = roles[i];
        if (elementoE.cedula == cedula) {
            empleadoE = elementoE;
            break;
        }
    }
    return empleadoE;
}

agregarRol=function(rol){
    let busqueda = buscarRol(rol.cedula);
    if (busqueda == null) {
        roles.push(rol);
        alert("ROL GUARDADO CORRECTAMENTE");
    } else {
        alert("YA EXISTE UN ROL CON EL NÚMERO DE CÉDULA: "+rol.cedula);
    }
}

calcularAporteEmpleador=function(sueldo){
    let aporte=(sueldo*11.15)/100;
    return aporte;
}

guardarRol=function(){
    let valorP=recuperarFloatDiv("infoPago");
    let aporteI=recuperarFloatDiv("infoIESS");
    let nombre=recuperarTextoDiv("infoNombre");
    let cedula=recuperarTextoDiv("infoCedula");
    let sueldo=recuperarFloatDiv("infoSueldo");
    let aporteEmpleador=calcularAporteEmpleador(sueldo);
    let rol= {};
    rol.valor=valorP;
    rol.aporteIess=aporteI;
    rol.nombre=nombre;
    rol.cedula=cedula;
    rol.aporteEmpleador=aporteEmpleador;
    agregarRol(rol);
    alert("ÉXITO");
    deshabilitarComponente("btnGuardarRol");
}

mostrarRoles=function(){
    let cmptabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>" +
        "<th>CÉDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";
    let elementoR;
    for (let i = 0; i < roles.length; i++) {
        elementoR = roles[i];
        contenidoTabla +=
            "<tr><td>" + elementoR.cedula + "</td>"
            + "<td>" + elementoR.nombre + "</td>"
            + "<td>" + elementoR.valor + "</td>"
            + "<td>" + elementoR.aporteIess + "</td>"
            + "<td>" + elementoR.aporteEmpleador + "</td>"
            + "</tr>";
    }
    contenidoTabla += "</table>";
    cmptabla.innerHTML = contenidoTabla;
    mostrarTotales();
}

mostrarTotales=function(){
    let totalEmpleado=0;
    let toltalEmpleador=0;
    let totalAPagar=0;
    let elemento;
    for (let i = 0; i < roles.length; i++) {
        elemento=roles[i];
        totalEmpleado += elemento.aporteIess;
        toltalEmpleador += elemento.aporteEmpleador;
        totalAPagar += elemento.valor;
    }
    mostrarTexto("infoTotalPago", totalAPagar);
    mostrarTexto("infoAporteEmpresa", toltalEmpleador);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);
    let totalNomina=toltalEmpleador+totalEmpleado+totalAPagar;
}

calcularAporteEmpleado=function(sueldo){
    let aporte=(sueldo*9.45)/100;
    return aporte;
}

calcularValorAPagar=function(sueldo,aporte,descuento){
    let valor=sueldo-aporte-descuento;
    return valor;
}

calcularRol=function(){
    let sueldo=recuperarFloatDiv("infoSueldo");
    let descuentos=recuperarFloat("txtDescuentos");
    if(descuentos!=NaN && descuentos>=0 && descuentos<=sueldo){
        let aporte=calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", aporte);
        let pagar=calcularValorAPagar(sueldo,aporte,descuentos);
        mostrarTexto("infoPago", pagar);
        habilitarComponente("btnGuardarRol");
    }
}


limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo=false;
    deshabilitarComponentes();

}
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

deshabilitarComponentes = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

}
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponentes();
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();

}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
