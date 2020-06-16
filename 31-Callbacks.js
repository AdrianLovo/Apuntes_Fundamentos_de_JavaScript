const API_URL = 'https://pokeapi.co/api/v2/';
const PEOPLE_URL = 'pokemon/:id';

const charmanderUrl = `${API_URL}${PEOPLE_URL.replace(':id', 'charmander')}`;
const opciones = {crossDomain: true};

const onPokemonResponse = function (pokemon){
    console.log(`Hola yo soy ${pokemon.name} ` );
}

//Cuando termine el request se ejecutara el callback (funcion definida)
//Puede ser que el request nunca se termine y no se ejecute la funcion
$.get(charmanderUrl, opciones, onPokemonResponse );
