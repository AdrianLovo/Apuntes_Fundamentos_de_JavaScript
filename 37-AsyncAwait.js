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

async function obtenerPersonajes(){
    var ids = ['charmander', 'bulbasaur'];
    var promesas = ids.map( id => obtenerPersonaje(id));
    try{
        var personajes = await Promise.all(promesas) //Hasta que todas las promesas sean resueltas almacenara el resultado
        console.log(personajes);
    }catch(id){
        onError(id)
    }    
}

obtenerPersonajes();