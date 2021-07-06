const router = require("express").Router();
const axios = require("axios");
const getTypes = require("../handlers/index.js");
const { Pokemon, Tipo } = require("../db.js");


const API = 'https://pokeapi.co/api/v2/pokemon';
const API_TYPE = 'https://pokeapi.co/api/v2/type';

router.get('/pokemons',  async (req, res, next) => {
    const {name} = req.query;

    /*GET /pokemons?name="...":
Obtener el pokemon que coincida exactamente con 
el nombre pasado como query parameter (Puede ser de pokeapi 
    o creado por nosotros)
Si no existe ningún pokemon mostrar un mensaje adecuado*/

    if(name){
        try{
            const response = await axios.get(API+`/${name}`);
            const data = await response.data;

            let poke = {
                imagen: data.sprites.front_default,
                nombre: data.forms[0].name,
                tipo: data.types.map(types => types.type.name),
                id: data.id,
                vida: data.stats[0].base_stat,
                fuerza: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                velocidad: data.stats[5].base_stat,
                altura: data.height,
                peso: data.weight
            }
            res.send(poke)
        }
        catch(error){
            res.status(404).send("El nombre del pokemon es incorrecto")
        }
    } 
    else if(!name){
        try{
            const response = await axios.get(API)
            const data = await response.data;
            const results = await data.results;
            const twelve = await results.slice(0,12);
            var pokemonsUrl = await twelve.map(pokemon => pokemon.url);
    
            let infoPokemons = await pokemonsUrl.map(url => axios.get(url));
    
            let all = await Promise.all(infoPokemons);
            let datas = await all.map(inf => inf.data);
    
            var nameAndType = datas.map(pokemon => {
                let poke = {
                    imagen: pokemon.sprites.front_default,
                    nombre: pokemon.forms[0].name,
                    tipo: pokemon.types.map(types => types.type.name)
                }
                return poke;
            }) 
            res.send(nameAndType)
        }
        catch (error){
            next(error);
        }
    }
});

/*[ ] GET /pokemons/{idPokemon}:
Obtener el detalle de un pokemon en particular
Debe traer solo los datos pedidos en la ruta 
de detalle de pokemon
Tener en cuenta que tiene que funcionar
tanto para un id de un pokemon existente en pokeapi 
o uno creado por ustedes*/


//ME FALTAN LOS POKEMONS CREADOS!!!!

router.get('/pokemons/:idPokemon',  async (req, res) => {
    const {idPokemon} = req.params;
    try{
        //nombre del pokemon = forms.name
        //tipos del pokemon = types[0 y 1].type.name || algunos tinene un solo tipo
        //peso del pokeon = weight
        //altura del pokemon=height
        //id del pokemon = id
        //vida = stats[0].base_stat
        //ataque = stats[1].base_Stat
        //defensa = stats[2].base_Stat
        //velocidad = stats[5].base_stat
        const response = await axios.get(API+`/${idPokemon}`);
        const data = await response.data;

            let poke = {
                 imagen: data.sprites.front_default,
                nombre: data.forms[0].name,
                tipo: data.types.map(types => types.type.name),
                id: data.id,
                vida: data.stats[0].base_stat,
                fuerza: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                velocidad: data.stats[5].base_stat,
                altura: data.height,
                peso: data.weight
            }
        res.send(poke)
    }
    catch(error){
        res.status(404).send("No existe pokemon con ese id")
    }
});

/*GET /types:
Obtener todos los tipos de pokemons posibles
En una primera instancia deberán traerlos desde 
pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí*/

router.get('/types', async (_req, res) => {
    try{
        const responser = await axios.get(API_TYPE)
        const data = await responser.data;
        const results = await data.results;

        const typer = await Tipo.findAll();
        if(typer.length === 0){
            getTypes();
            const tt = await Tipo.findAll();
            res.send(tt)
        } 
        else {
            res.send(typer);
        }
    } 
    catch(error){
        res.send(error);
    }
});

/*POST /pokemons:
Recibe los datos recolectados desde el formulario 
controlado de la ruta de creación de pokemons por body
Crea un pokemon en la base de datos*/

// TYPE TIENE QUE SER VIRTUAL!!!!!

router.post('/pokemons', async (req,res, next) => {
    try{
        const { name, health, strength, defense, speed, height, weight } = req.body;
        const newPokemon = Pokemon.create({name, health, strength, defense, speed, height, weight});
        res.status(201).send(newPokemon);
    }
    catch(error){
        next(error);
    }
})

module.exports = router;