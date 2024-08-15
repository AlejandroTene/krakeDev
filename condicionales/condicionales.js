calcularTasaInteres=function(ingresoAnual){
    if(ingresoAnual<300000){
        return 16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        return 15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        return 14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        return 13;
    }else if(ingresoAnual>=2000000){
        return 12;
    }
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let cuota;
    if(edad>50){
        cuota=(ingresos-egresos)*0.3;
        return cuota;
    }else if(edad<=50){
        cuota=(ingresos-egresos)*0.4;
        return cuota;
    }
}

calcularDescuento=function(precio,cantidad){
    let valor;
    let descuento;
    if(cantidad<3){
        valor=cantidad*precio;
        return valor;
    }else if(cantidad>=3 && cantidad<=5){
        descuento=(cantidad*precio)*0.02;
        valor=(cantidad*precio)-descuento;
        return valor;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=(cantidad*precio)*0.03;
        valor=(cantidad*precio)-descuento;
        return valor;
    }else if(cantidad>=12){
        descuento=(cantidad*precio)*0.04;
        valor=(cantidad*precio)-descuento;
        return valor;
    }
}

determinarColesterolLDL=function(nivelColesterol){
    let mensaje;
    if(nivelColesterol<100){
        mensaje="Su nivel de colesterol LDL es: Óptimo (lo mejor para su salud)";
        return mensaje;
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        mensaje="Su nivel de colesterol LDL es: Casi óptimo";
        return mensaje;
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        mensaje="Su nivel de colesterol LDL es: Límite superior del rango normal";
        return mensaje;
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        mensaje="Su nivel de colesterol LDL es: Alto";
        return mensaje;
    }else if(nivelColesterol>=190){
        mensaje="Su nivel de colesterol LDL es: Muy alto";
        return mensaje;
    }
}

validarClave=function(clave){
    let tamanio= clave.length;
    if(tamanio>=8 && tamanio<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    let codigo= caracter.charCodeAt(0);
    if(codigo>=65 && codigo<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let codigo= caracter.charCodeAt(0);
    if(codigo>=97 && codigo<=122 || codigo>=160 && codigo<=163){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let codigo= caracter.charCodeAt(0);
    if(codigo>=48 && codigo<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90 && notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}