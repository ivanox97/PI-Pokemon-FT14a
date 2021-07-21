const { Router } = require('express');
const pokemonRoutes = require('./pokemonRoutes');
const typesRoutes = require('./typesRoutes')
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRoutes);
router.use('/types', typesRoutes);


module.exports = router;
