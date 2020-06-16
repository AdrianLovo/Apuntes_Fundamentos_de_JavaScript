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

var personas = [adrian, luck];

console.log(personas[0]);
console.log(personas[0].nombre);

for(var i = 0; i < personas.length; i++){
    console.log(`${personas[i].nombre} tiene ${personas[i].edad}`);
}

console.log('Ciclo foreach');
personas.forEach(element => {
    console.log(element.nombre);
});