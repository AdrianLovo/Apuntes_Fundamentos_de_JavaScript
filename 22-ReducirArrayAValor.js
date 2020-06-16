var adrian = {
    nombre: 'Adrian',
    apellido: 'Castillo',
    libros: 170,
}

var luck = {
    nombre: 'Luck',
    apellido: 'Castillo',
    libros: 30,
}

var pedro = {
    nombre: 'pedro',
    apellido: 'pedro',
    libros: 180,
}

var personas = [adrian, luck, pedro];

const reducer = (acumulado, {libros}) => (acumulado + libros);

var totalDeLibros = personas.reduce(reducer, 0);
console.log(totalDeLibros);