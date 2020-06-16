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

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);

    if(persona.ingeniero === true){
        console.log('Ingeniero');
    }else{
        console.log('No es Ingeniero');
    }
    if(persona.cocinero === true){
        console.log('Cocinero');
    }else{
        console.log('No es Cocinero');
    }
    if(persona.cantante === true){
        console.log('Cantante');
    }else{
        console.log('No es Cantante');
    }
    if(persona.dj === true){
        console.log('dj');
    }else{
        console.log('No es dj');
    }
    if(persona.guitarrista === true){
        console.log('Guitarrista');
    }else{
        console.log('No es Guitarrista');
    }
    if(persona.drone === true){
        console.log('Vuela drone');
    }else{
        console.log('No Vuela drone');
    }

}

imprimirProfesiones(obj1);