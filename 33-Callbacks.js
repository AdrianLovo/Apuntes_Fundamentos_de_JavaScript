const API_URL = 'https://pokeapi.co/api/v2/';
const PEOPLE_URL = 'pokemon/:id';

const charmanderUrl = `${API_URL}${PEOPLE_URL.replace(':id', 'charmander')}`;
const opciones = {crossDomain: true};


function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opciones, callback).fail(function(){
        console.log(`Sucedio un error no se pudo obtener el personaje ${id}`);
    })
}

obtenerPersonaje('bulbasaur', function(pokemon){
    console.log(`Hola yo soy ${pokemon.name} `);       
    obtenerPersonaje('ivysaur', function(pokemon){
        console.log(`Hola yo soy ${pokemon.name} `);
        obtenerPersonaje('charmander', function(pokemon){
            console.log(`Hola yo soy ${pokemon.name} `);
        });        
    });    
});


