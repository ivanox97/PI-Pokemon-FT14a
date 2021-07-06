const router = require("express").Router();
const axios = require("axios");
const { Tipo } = require('../db.js');

const API_TYPE = 'https://pokeapi.co/api/v2/type';

const getTypes = async function(){
    const response = await axios.get(API_TYPE)
    const data = await response.data;
    const results = await data.results;

    results.map( tipo => {
        Tipo.create(
            {
                name: tipo.name
            }
        )
    })
}

//console.log(getTypes());
module.exports = getTypes;