class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);        
    }

    soyAlto(){
        return this.altura > 1.80;
    }
}

var adrian = new Persona('adrian', 'castillo', 170);
adrian.saludar();
adrian.soyAlto();


class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} soy desarrollador`);        
    }
}


var adrian2 = new Desarrollador('adrian', 'castillo', 170);
adrian2.saludar();
adrian2.soyAlto();
