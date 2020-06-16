var obj1 = {
    nombre: 'Nombre',
    apellido: 'Apellido ',
    edad: 27,
    peso: 75
}

const INCREMENTO_PESO = 0.3;
const META = obj1.peso - 3;

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

var dias = 0;

console.log(`Al inicio ${obj1.nombre} pesa ${obj1.peso}kg`);

while(obj1.peso > META){
    debugger
    if(comeMucho()){
        aumentarPeso(obj1);
    }
    if(realizaDeporte()){
        bajarPeso(obj1);
    }
    dias +=1;
}

console.log(`Pasaron ${dias} dias hasta que ${obj1.nombre} adelgaso 3 KG`);
