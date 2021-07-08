const router = require("express").Router();
const { Type } = require('../db');

/*GET /types:
Obtener todos los tipos de pokemons posibles
En una primera instancia deberán traerlos desde 
pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí*/

router.get('/', async (_req, res, next) => {
    try{
        const typesLoaded = await Type.findAll();
        res.send(typesLoaded);
    } 
    catch(error){next(error)};
});

module.exports = router;