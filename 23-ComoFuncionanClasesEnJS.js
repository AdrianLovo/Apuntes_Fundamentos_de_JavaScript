//Definicion de prototipo
function Persona(nombre, apellido){
    console.log('Me ejecutaron');
    this.nombre = nombre;
    this.apellido  = apellido;
    return this;
}

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

var adrian = new Persona('adrian', 'castillo');
adrian.saludar();

var ericka = new Persona('ericka', 'Luna');
ericka.saludar();
