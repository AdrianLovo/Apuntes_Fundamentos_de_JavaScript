const API_URL = 'https://pokeapi.co/api/v2/';
const PEOPLE_URL = 'pokemon/:id';
const opciones = {crossDomain: true};


function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opciones, function(data){
            resolve(data)       //Resolve se ejecuta hasta que el .get sea exitoso
        }).fail(() => reject(id))
    });    
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje('bulbasaur').then(function(pokemon){
    console.log(`El personaje es ${pokemon.name}`)
})
.catch(onError)


