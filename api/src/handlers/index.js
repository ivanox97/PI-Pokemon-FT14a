const axios = require('axios');
const {Type} = require('../db')
const {API_TYPE} = require('../../constants')

async function getTypes(){
    const responser = await axios.get(API_TYPE)
    const results = responser.data.results;
        
    results.map( types => {
        Type.findOrCreate(
            { where:{
                name: types.name
                }, 
            defaults: { 
                name: types.name
                }
            })
    });
}

module.exports={getTypes}