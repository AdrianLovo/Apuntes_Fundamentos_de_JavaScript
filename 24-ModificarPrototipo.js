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

Persona.prototype.soyAlto = function(){
    return this.altura > 1.5;
}

var adrian = new Persona('adrian', 'castillo', 170);
adrian.saludar();
adrian.soyAlto();

var ericka = new Persona('ericka', 'Luna', 165);
ericka.saludar();
ericka.soyAlto();

