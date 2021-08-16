const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const {Pokemon} = require("../db.js");
const {getDBPokemonsFullInfo, getAllPokemons, getApiPokemonsFullInfo} = require("../handlers/app/index");

router.get('/', async (req, res, next) => {
    const {name} = req.query;
    try{
        if(name){
            //check if the pokemon already exists in the db
            const alreadyExists = await getDBPokemonsFullInfo();
            const exists = alreadyExists.filter(poke => poke.name === name);
            //if not exists, means i have to search on the api
            if(exists.length === 0){//dont exists in the db
                    const apiPokes = await getApiPokemonsFullInfo();
                    const pokeName = apiPokes.filter(poke => poke.name === name);
                    if(pokeName.length === 0){
                        return res.status(404).send("That pokemon does not exists.")
                    }
                    if(pokeName.length > 0){
                        return res.status(201).send(pokeName);
                    }
            } 
            if(exists.length>0) { //if alreadyExists in the DB
                return res.status(201).send(exists);
            }
            else{
                return res.status(404).send("That pokemon does not exists.")
            }
        } 
        else{//get the 40 pokemons from both apis and the created pokemons in the db
            const allPokemons = await getAllPokemons();
            return res.send(allPokemons);
        }
    }
    catch (error){next(error)};
});

router.get('/:idPokemon', async (req, res, next) => {
    const {idPokemon} = req.params;
    if(idPokemon && idPokemon.length >= 7){ //if its from the DB (larger quantity of numbers in param)
        try{
            const pokemonExists = await getDBPokemonsFullInfo();
            const pokeDb = pokemonExists.filter(pokemon => pokemon.dataValues.id === parseInt(idPokemon));
            if(pokeDb.length > 0){//if exists a pokemon with that id
                return res.status(201).send(pokeDb);
            } else {//if dont exists a pokemon with that id
                return res.status(404).send("No existe pokemon con ese id 2");
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
                return res.status(201).send(pokeApi);
            } else {//if dont exists a pokemon with that id
                return res.status(404).send("No existe pokemon con ese id");
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
    const allPokemons = await getApiPokemonsFullInfo();
    const alreadyCreated = await Pokemon.findOne({where: {name: name}});
    const alreadyExists =  await allPokemons.filter(poke => poke.name === name);
    try{
        if(!alreadyCreated && alreadyExists.length === 0){
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
            return res.status(201).send(newPokemon);
        }
        else{
            return res.status(404).send("THIS POKEMON ALREADY EXISTS")
        }
    }
    catch(error){next(error)};
});

module.exports = router;
