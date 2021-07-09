import { SET_POKEMONS, SET_POKEMON } from "./actions"

const initialState = {
  pokemons: [],
  pokemon: undefined
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_POKEMONS: return {
      ...state,
      pokemons: payload
    }
    case SET_POKEMON: return {
      ...state,
      pokemon: payload
    }
    default: return state;
  }
}