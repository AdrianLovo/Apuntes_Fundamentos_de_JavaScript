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
    if(esMayorEdad5(persona)){
        console.log(`${persona.nombre} Es mayor de edad`);
    }else{
        console.log(`${persona.nombre} Es menor de edad`);
    }
}

function esMayorEdad(persona){
    return persona.edad >= MAYORIA_EDAD;
}

var esMayorEdad2 = function (persona){
    return persona.edad >= MAYORIA_EDAD;
}

const esMayorEdad3 = persona => {         //Si existe 1 solo parametro se quitan los parentesis de la los parametros "(persona)"
    return persona.edad >= MAYORIA_EDAD;    
}

//Si solo retorna algo se elimina "return" y se puede quitar las llaves
const esMayorEdad4 = persona =>  persona.edad >= MAYORIA_EDAD;    

//Desestructurando el objeto
const esMayorEdad5 = ({edad}) =>  edad >= MAYORIA_EDAD;    


imprimirMayorEdad(obj1);