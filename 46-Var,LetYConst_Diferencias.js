//Manera mas antigua de declarar variables
//Cuando se declaran variables con "var" es preferible declararlas lo mas "afuera" de su contexto
//Cuando utilizamos "let" el alcanza de la variable se define unicamente al contexto donde se declaro
//Cuando utilizamos "const" se comporta de manera similar a let, exepto que no podemos volver a utilizar la variable para asignar otro valor

var adrian = {
    nombre: 'adrian',
    apellido: 'castillo',
    edad: 27
}

function esMayorDeEdad(persona){
    if(persona.edad > 18){
        var mensaje1 = 'Es mayor de edad';        
    }else{
        var mensaje2 = 'Es menor de edad';
    }
    console.log(mensaje1);

    if(persona.edad > 18){
        let mensaje3 = 'Es mayor de edad';        
    }else{
        let mensaje4 = 'Es menor de edad';
    }
    console.log(mensaje3);      //Error al ejecutarlo ya que "mensaje3" no se encuentra en el contexto
}

esMayorDeEdad(adrian);