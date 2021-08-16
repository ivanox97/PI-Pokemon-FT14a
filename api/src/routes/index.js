const { Router } = require('express');
const pokemonRoutes = require('./pokemonRoutes');
const typesRoutes = require('./TypesRoutes')
const { getTypes } = require('../handlers/app/index');
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRoutes);
router.use('/types', typesRoutes);
router.use('/', getTypes);


module.exports = router;
