const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const {Pokemon} = require("../db.js");
const {getDBPokemonsFullInfo, getAllPokemons, getApiPokemonsFullInfo} = require("../handlers/index");

router.get('/', async (req, res, next) => {
    const {name} = req.query;
    if(name){
        //check if the pokemon already exists in the db
        const alreadyExists = await getDBPokemonsFullInfo();
        const exists = alreadyExists.filter(poke => poke.name === name);
        //if not exists, means i have to search on the api
        if(exists.length === 0){//dont exists in the db
            try{
                const apiPokes = await getApiPokemonsFullInfo();
                const pokeName = apiPokes.filter(poke => poke.name === name);
                res.status(201).send(pokeName);
            }
            catch(error){res.status(404).send("El nombre del pokemon es incorrecto")}
        } 
        if(exists) { //if alreadyExists in the DB
            try{
                res.status(201).send(exists);
            }
            catch(error){next(error)}
        }
    } 
    else{//get the 40 pokemons from both apis and the created pokemons in the db
        try{
            const allPokemons = await getAllPokemons();
            res.send(allPokemons);
        }
        catch (error){next(error)};
    }
});

router.get('/:idPokemon', async (req, res, next) => {
    const {idPokemon} = req.params;
    if(idPokemon && idPokemon.length >= 7){ //if its from the DB (larger quantity of numbers in param)
        try{
            const pokemonExists = await getDBPokemonsFullInfo();
            const pokeDb = pokemonExists.filter(pokemon => pokemon.dataValues.id === parseInt(idPokemon));
            if(pokeDb.length > 0){//if exists a pokemon with that id
                res.status(201).send(pokeDb);
            } else {//if dont exists a pokemon with that id
                res.status(404).send("No existe pokemon con ese id 2");
            }
        }
        catch(error){
            next(error);
        }
    } else if(idPokemon) {//if its from the api
        try{
            const pokemonExistsAPI = await getApiPokemonsFullInfo();
            const pokeApi = pokemonExistsAPI.filter(pokemon => pokemon.id === parseInt(idPokemon));
            if(pokeApi.length > 0){ //if exists a pokemon with that id
                res.status(201).send(pokeApi);
            } else {//if dont exists a pokemon with that id
                res.status(404).send("No existe pokemon con ese id");
            }
        }
        catch(error){
            next(error);
        }
    }
});

router.post('/', async (req,res, next) => {
    let id = uuidv4();
    //uuidNumbers creates an uuid numbers only
    var uuidNumbers = id.replace(/\D+/g, '').slice(0,9); //DataType.INTEGER only allows upto 9 digits
    const { name, type1, type2, image, health, strength, defense, speed, height, weight } = req.body;
    const alreadyCreated = await Pokemon.findOne({where: {name: name}});
    if(!alreadyCreated){
        try{
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
            newPokemon.setTypes(type1);
            if(type2){
                newPokemon.setTypes(type2);
            }
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
