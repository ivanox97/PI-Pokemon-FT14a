import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const GET_BY_NAME = "GET_BY_NAME";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_API_DB = "FILTER_API_DB";
export const FILTER_ALFABETICAL = "FILTER_ALFABETICAL";
export const FILTER_ASCENDANCY = "FILTER_ASCENDANCY";
export const SET_PAGE = "SET_PAGE";

export function getPokemons() {
  return (dispatch) => {
    axios.get('http://localhost:3001/pokemons').then((response) => {
      dispatch({ type: GET_POKEMONS, payload: response.data });
    });
  }
}
export function getPokemon(idPokemon) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/pokemons/${idPokemon}`)
      .then((response) => {
        dispatch({ type: GET_POKEMON, payload: response.data })
      })
      .catch(error => {
        if (error.response?.status) {
          if (error.response.status === 404) {
            return dispatch({ type: GET_POKEMON, payload: null })
          }
        }
        alert("Ups!!! 😥")
      })
  }
}

export function getByName(name) {
  //let nameToLower = name.toLowerCase();
  return async (dispatch)=>{
      try {
          const searchByName = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
          if(searchByName){
            const pokemonDetails = searchByName.data;
              return dispatch({
                type: GET_BY_NAME,
                payload: pokemonDetails
            })
          }
          else{
            alert("No se encontro pokemon con este nombre");
          }
      } catch (error) {
          if(error.response?.status===404 ){
              alert("No se encontro pokemon con este nombre");
          }
          return dispatch({
              type: GET_BY_NAME,
              payload: []
          })
      }
  }
}

export function createPokemon(values) {
  return async (dispatch) => {
    try{const create = await axios.post('http://localhost:3001/pokemons', values)
    const createdData = create.data;
      return dispatch({
        type: CREATE_POKEMON, 
        payload: createdData
      })
      }
    catch{
      return dispatch({
        type: CREATE_POKEMON, 
        payload: []
      }) 
    }
  }
}

export function filterByType(type) {
  return async (dispatch) => {
    try{
    if(type.length>0){
      const pokemonsFiltered = [];
      const pokemons = await axios.get('http://localhost:3001/pokemons');
      const pokeData = await pokemons.data;
      pokeData.forEach(p => p.types.forEach(t =>
        {if(t === type || t.name === type){
          pokemonsFiltered.push(p)
        }}))
      return dispatch({
        type: FILTER_BY_TYPE,
        payload: pokemonsFiltered})
    }}
    catch(error){
      return dispatch({
        type: FILTER_BY_TYPE,
        payload: []
      })
    }
  }
}

export function filterByApiOrDb(choice){
  return async (dispatch) => {
    try {const pokemons = await axios.get('http://localhost:3001/pokemons');
    if(choice === "API"){
      const pokemonsApi = [];
      pokemons.data.forEach(poke => {if(poke.id.toString().length <= 2){
        pokemonsApi.push(poke);
      }})
      return dispatch({
        type: FILTER_API_DB,
        payload: pokemonsApi
      })
    } else {
      const pokemonsDb = [];
      pokemons.data.forEach(poke => {if(poke.id.toString().length > 2){
        pokemonsDb.push(poke);
      }})
      return dispatch({
        type: FILTER_API_DB,
        payload: pokemonsDb
      })}
    }
    catch(error){
      return dispatch({
        type: FILTER_API_DB,
        payload: []
    })
    }
  }
}

export function filterAlfabet(order,asc){
  return async (dispatch) => {
    try{
        const pokemons = await axios.get('http://localhost:3001/pokemons');
        const pokemonsOrder = pokemons.data.slice().sort(function compareNames(a,b){
          if(a.name < b.name){
            return -1;
          } 
          if(a.name > b.name){
            return 1;
          } else {
            return 0;
          }
        })
        if(order === "A-Z"){
          if(asc % 2 === 0){
            return dispatch({
              type: FILTER_ALFABETICAL,
              payload: pokemonsOrder.reverse()
          })
          } else {
            return dispatch({
              type: FILTER_ALFABETICAL,
              payload: pokemonsOrder
          })
          }
         }
        if(order === "Z-A") {
          if(asc % 2 === 0){
            return dispatch({
              type: FILTER_ALFABETICAL,
              payload: pokemonsOrder
          })
          } else {
            return dispatch({
              type: FILTER_ALFABETICAL,
              payload: pokemonsOrder.reverse()
          })
          }
          }
        if(order === "STRENGTH"){
          const pokemonStrength = pokemons.data.slice().sort(function compareStrength(a,b){
            return a.strength - b.strength;
          })
          if(asc % 2 === 0){
            return dispatch({
              type: FILTER_ALFABETICAL,
              payload: pokemonStrength.reverse()
          })
          } else {
            return dispatch({
              type: FILTER_ALFABETICAL,
              payload: pokemonStrength
          })
          } 
        }
        }
      catch (error){
        return dispatch({
          type: FILTER_ALFABETICAL,
          payload: []
      })
      }
    }
}

export function filterAscendancy(pokemons, ascendancy) {
  return async (dispatch) => {
    try{
      if(ascendancy % 2 !== 0){
        return dispatch({
          type: FILTER_ASCENDANCY,
          payload: pokemons
      })
      }
      else {
        const reversed = pokemons.reverse();
        return dispatch({
          type: FILTER_ASCENDANCY,
          payload: reversed
      })
      }
    }
    catch{
      return dispatch({
        type: FILTER_ASCENDANCY,
        payload: []
    })
    }
  }
}


export function clearPage() {
  return { type: GET_POKEMON, payload: undefined }
}

export function setPage(n){
 return async (dispatch) => {
   return dispatch({
     type: SET_PAGE,
     payload: n
   })
 }
}