import axios from "axios";

export const SET_POKEMONS = "SET_POKEMONS"
export const SET_POKEMON = "SET_POKEMON"

export function getPokemons() {
  return (dispatch) => {
    axios.get('http://localhost:3001/pokemons').then((response) => {
      dispatch({ type: SET_POKEMONS, payload: response.data });
    });
  }
}
export function getPokemon(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/pokemons/${id}`)
      .then((response) => {
        dispatch({ type: SET_POKEMON, payload: response.data })
      })
      .catch(error => {
        if (error.response?.status) {
          if (error.response.status === 404) {
            return dispatch({ type: SET_POKEMON, payload: null })
          }
        }
        alert("Ups!!! 😥")
      })
  }
}

export function clearPage() {
  return { type: SET_POKEMON, payload: undefined }
}