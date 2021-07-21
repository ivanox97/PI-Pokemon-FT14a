const router = require("express").Router();
const { Type } = require('../db');

router.get('/', async (_req, res, next) => {
    try{
        const typesLoaded = await Type.findAll();
        res.send(typesLoaded);
    } 
    catch(error){next(error)};
});

module.exports = router;