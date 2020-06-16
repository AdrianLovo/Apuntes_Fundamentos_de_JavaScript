var obj1 = {
    nombre: 'Nombre',
    apellido: 'Apellido ',
    edad: 27,
    peso: 75
}

const INCREMENTO_PESO = 0.2;

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO;


console.log(`Al inicio del año ${obj1.nombre} pesa ${obj1.peso}kg`);

for(var i = 1; i <= 365; i++){
    var random = Math.random();
    if(random < 0.25){
        aumentarPeso(obj1);
    }else if (random < 0.5){
        bajarPeso(obj1);
    }
}

console.log(`Al final del año ${obj1.nombre} pesa ${obj1.peso.toFixed(1)}kg`);
