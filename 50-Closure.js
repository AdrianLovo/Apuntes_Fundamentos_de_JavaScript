
function crearSaludo(finalDeFrase){
    return function(nombre){
        console.log(`Holaa ${nombre} ${finalDeFrase}`);
    }
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('güey');
const saludoColombiano = crearSaludo('amigo');

saludoArgentino('Adrian');
saludoMexicano('Adrian');
saludoColombiano('Adrian');

