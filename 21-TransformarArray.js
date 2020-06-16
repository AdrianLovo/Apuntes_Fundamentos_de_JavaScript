var adrian = {
    nombre: 'Adrian',
    apellido: 'Castillo',
    altura: 170,
}

var luck = {
    nombre: 'Luck',
    apellido: 'Castillo',
    altura: 30,
}

var pedro = {
    nombre: 'pedro',
    apellido: 'pedro',
    altura: 180,
}

var personas = [adrian, luck, pedro];

const pasarAlturaACms = persona =>  ({
    ...persona,
    altura: persona.altura *100
})

var personasCms = personas.map(pasarAlturaACms);
console.log(personasCms);