var adrian = {
    nombre: 'Adrian',
    apellido: 'Castillo',
    edad: 27,
}

var luck = {
    nombre: 'Luck',
    apellido: 'Castillo',
    edad: 1,
}

function imprimirNombreEnMayusculas(objeto){
    console.log(objeto.nombre.toUpperCase());    
}

imprimirNombreEnMayusculas(adrian);
imprimirNombreEnMayusculas(luck);
