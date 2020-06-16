var nombre = 'Adrian', apellido = 'Castillo';

var nombreMayusculas = nombre.toUpperCase();    //Mayusculas
console.log(nombreMayusculas);

var apellidoMinusculas = apellido.toLowerCase();    //Minusculas
console.log(apellidoMinusculas);

var primeraLetraNombre = nombre.charAt(0);  //Primera letra de una cadena
console.log(primeraLetraNombre);

var longitud = nombre.length;   //Atributo longitud de cadena
console.log(longitud);

var nombreCompleto = `${nombre.toUpperCase()}  ${apellido.toUpperCase()}`; //Concatenar strings "interpolacion de texto"
console.log(nombreCompleto);

var str = nombre.substr(1, 2);  //Substring "inicio, cantidad de caracteres"
console.log(str);