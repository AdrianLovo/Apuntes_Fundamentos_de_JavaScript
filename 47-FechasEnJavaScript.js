

function diasEntreFechas(fecha1, fecha2){
    const unDia = 1000 * 60 *60 * 24;               //Milisegundos en 1 dia
    const diferencia = Math.abs(fecha1 - fecha2);   //Numero en milisegundos

    return Math.floor(diferencia / unDia);
}

const hoy = new Date(); //fecha actual
const nacimiento = new Date(1992,11,20);  //Constructor recibe yyyy-mm-dd

console.log((diasEntreFechas(hoy, nacimiento) / 365).toFixed(1) + ' años');
