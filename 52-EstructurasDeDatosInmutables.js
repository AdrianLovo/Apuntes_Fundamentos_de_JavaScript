
const adrian = {
    nombre: 'adrian',
    apellido: 'castillo',
    edad: 27
}

const cumpleanos = persona => persona.edad++;       //REalizado de esta manera modifica al objeto original

const cumpleanos2 = persona => ({
    ...persona,
    edad: persona.edad + 1
});