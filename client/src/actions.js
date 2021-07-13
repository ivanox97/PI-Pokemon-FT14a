import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const GET_BY_NAME = "GET_BY_NAME";
export const CREATE_POKEMON = "CREATE_POKEMON";

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

export function getByName(name){
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
    const create = await axios.post('http://localhost:3001/pokemons', values)
    const createdData = create.data;
        return dispatch({
          type: CREATE_POKEMON, 
          payload: createdData
        })
  }
}

export function clearPage() {
  return { type: GET_POKEMON, payload: undefined }
}