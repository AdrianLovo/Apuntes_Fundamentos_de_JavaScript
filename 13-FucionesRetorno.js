const MAYORIA_EDAD = 18;

var obj1 = {
    nombre: 'Nombre Ejemplo',
    apellido: 'Apellido Ejemplo',
    edad: 27,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirMayorEdad(persona){
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} Es mayor de edad`);
    }else{
        console.log(`${persona.nombre} Es menor de edad`);
    }
}

function esMayorEdad(persona){
    return persona.edad >= MAYORIA_EDAD;
}

imprimirMayorEdad(obj1);