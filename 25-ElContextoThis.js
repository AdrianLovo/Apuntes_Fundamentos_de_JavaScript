//Definicion de prototipo
function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido  = apellido;
    this.altura = altura;
    return this;
}

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
    if(this.altura > 160){      //this apunta al this fuera de la funcion, en este caso el espacio global
        console.log('Soy alto')
    }else{
        console.log('Soy bajo');
    }
}

var adrian = new Persona('adrian', 'castillo', 170);
adrian.saludar();
adrian.soyAlto();

var ericka = new Persona('ericka', 'Luna', 150);
ericka.saludar();
ericka.soyAlto();

