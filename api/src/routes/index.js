const { Router } = require('express');
const pokemonRoutes = require('./pokemonRoutes');
const typesRoutes = require('./typesRoutes')
// Ejemplo: const authRouter = require('./auth.js');
//const { pokemons, getPokemonById, types, createPokemon } = require("./home")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.use('/', homeRouter);+

//asi si
router.use('/pokemons', pokemonRoutes);
router.use('/types', typesRoutes);

//asi no es
// router.get('/pokemons', pokemons);
// router.get('/pokemons/:idPokemon', getPokemonById);
// router.get('/types', types);
// router.post('/pokemons', createPokemon);


module.exports = router;
