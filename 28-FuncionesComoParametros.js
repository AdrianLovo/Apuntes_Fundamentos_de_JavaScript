class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);        
        if(fn){
            fn(this.nombre, this.apellido, false);
        }
    }

    soyAlto(){
        return this.altura > 1.80;
    }
}


class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} soy desarrollador`);   
        if(fn){
            fn(this.nombre, this.apellido, true);
        }     
    }
}


function respoderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`);
    if(esDev){
        console.log(`No sabia que eras desarrollador`);
    }
}


var adrian = new Persona('adrian', 'castillo', 170);
adrian.saludar(respoderSaludo);
adrian.soyAlto();

var adrian2 = new Desarrollador('luck', 'castillo', 170);
adrian2.saludar(respoderSaludo);
adrian2.soyAlto();