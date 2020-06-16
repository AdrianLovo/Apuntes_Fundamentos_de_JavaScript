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

var pedro = {
    nombre: 'pedro',
    apellido: 'pedro',
    edad: 18,
}

var personas = [adrian, luck, pedro];

const esMayor = ({edad}) => edad >= 18;

var personasMayores = personas.filter(esMayor);
console.log(personasMayores);


//Segundo Metodo
var personasMayores2 = personas.filter(function(persona){
    return persona.edad >= 18;
})
console.log(personasMayores2);
