const API_URL = 'https://pokeapi.co/api/v2/';
const PEOPLE_URL = 'pokemon/:id';

const charmanderUrl = `${API_URL}${PEOPLE_URL.replace(':id', 'charmander')}`;
const opciones = {crossDomain: true};


function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opciones, function (pokemon){
        console.log(`Hola yo soy ${pokemon.name} ` );
        if(callback){
            callback();
        }
    })
}

obtenerPersonaje('bulbasaur', function(){
    obtenerPersonaje('ivysaur', function(){
        obtenerPersonaje('charmander');
    });    
});


