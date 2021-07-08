const router = require("express").Router();
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');
const { API, API2 } = require('../../constants');
const {Pokemon} = require("../db.js");

/*GET /pokemons?name="...":
Obtener el pokemon que coincida exactamente con 
el nombre pasado como query parameter (Puede ser de pokeapi 
    o creado por nosotros)
Si no existe ningún pokemon mostrar un mensaje adecuado*/

router.get('/', async (req, res, next) => {
    const {name} = req.query;
    if(name){
        //check if the pokemon already exists in the db
        const alreadyExists = await Pokemon.findAll({where: {name: name}});
        //if not exists, means i have to search on the api
        if(alreadyExists.length === 0){//dont exists in the db
            try{
                const response = await axios.get(API+`/${name}`);
                const data = response.data;
    
                let pokemon = {
                    image: data.sprites.front_default,
                    name: data.forms[0].name,
                    type: data.types.map(types => types.type.name),
                    id: data.id,
                    health: data.stats[0].base_stat,
                    strength: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    height: data.height,
                    weight: data.weight
                }
                res.send(pokemon)
            }
            catch(error){res.status(404).send("El nombre del pokemon es incorrecto")}
        } 
        else { //if alreadyExists in the DB
            try{
                const exists = await Pokemon.findAll({where: {name: name}})
                .then(pokemonCreated => res.status(201).send(pokemonCreated));
            }
            catch(error){next(error)}
        }
    } 
    else if(!name){//get the 40 pokemons from both apis
        try{
            const response = await axios.get(API)
            const response2 = await axios.get(API2)

            const results = response.data.results; //only bring the FIRST 20 pokemons from the api
            const results2 = response2.data.results; //only bring the LAST 20 pokemons from the api

            const pokemonsUrl = results.map(pokemon => pokemon.url);
            const pokemonsUrl2 = results2.map(pokemon => pokemon.url);

            const infoPokemons = pokemonsUrl.map(async url => await axios.get(url));
            const infoPokemons2 = pokemonsUrl2.map(async url => await axios.get(url));

            const dataPokemon = await Promise.all(infoPokemons).then(data => data);
            const Pokemons = await dataPokemon.map(info => info.data);

            const dataPokemon2 = await Promise.all(infoPokemons2).then(data => data);
            const Pokemons2 = await dataPokemon2.map(info => info.data);

            const allData = Pokemons.concat(Pokemons2);//concat both lists of pokemons

            const nameAndType = allData.map(pokemon => {
                let poke = {
                    imagen: pokemon.sprites.front_default,
                    nombre: pokemon.forms[0].name,
                    tipo: pokemon.types.map(types => types.type.name)
                }
                return poke;
            }); 
            res.send(nameAndType);
        }
        catch (error){next(error)};
    }
});

/*[ ] GET /pokemons/{idPokemon}:
Obtener el detalle de un pokemon en particular
Debe traer solo los datos pedidos en la ruta 
de detalle de pokemon
Tener en cuenta que tiene que funcionar
tanto para un id de un pokemon existente en pokeapi 
o uno creado por ustedes*/

router.get('/:idPokemon', async (req, res) => {
    const {idPokemon} = req.params;
    if(idPokemon && idPokemon.length >= 7){ //if its from the DB (larger quantity of numbers in param)
        try{
            const pokemonExists = await Pokemon.findOne({where: {id: idPokemon}})
            res.status(201).send(pokemonExists);
        }
        catch(error){
            res.status(404).send("No existe pokemon con ese id 2");
        }
    } else if(idPokemon) {//if its from the api
        try{
            const pokemonExistsAPI = await axios.get(API+`/${idPokemon}`);
            const data = pokemonExistsAPI.data;
            let pokemon = {
                image: data.sprites.front_default,
                name: data.forms[0].name,
                type: data.types.map(types => types.type.name),
                id: data.id,
                health: data.stats[0].base_stat,
                strength: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight
            }
            res.status(201).send(pokemon);
        }
        catch(error){
            res.status(404).send("No existe pokemon con ese id");
        }
    }
});



/*POST /pokemons:
Recibe los datos recolectados desde el formulario 
controlado de la ruta de creación de pokemons por body
Crea un pokemon en la base de datos*/

// TYPE TIENE QUE SER VIRTUAL!!!!!


router.post('/', async (req,res, next) => {
    let id = uuidv4();
    //uuidNumbers creates an uuid numbers only
    var uuidNumbers = id.replace(/\D+/g, '').slice(0,9); //DataType.INTEGER only allows upto 9 digits
    const { name, image, health, strength, defense, speed, height, weight } = req.body;
    const alreadyCreated = await Pokemon.findOne({where: {name: name}});
    if(!alreadyCreated){
        try{
            //Project.findOne({ where: {title: 'aProject'} }).then(function(project) {
            const newPokemon = await Pokemon.create({
                id: uuidNumbers,
                image: image,
                name: name,
                health: health,
                strength: strength,
                defense: defense,
                speed: speed,
                height: height, 
                weight: weight,
            });
            res.status(201).send(newPokemon);
        }
       
        catch(error){next(error)};
    }else{
        try{
            res.status(404).send("THIS POKEMON ALREADY EXISTS")
        }
        catch(error){next(error)};
    }
});

module.exports = router;
