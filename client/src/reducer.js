import { GET_POKEMONS, GET_POKEMON, GET_BY_NAME, CREATE_POKEMON} from "./actions"

const initialState = {
  pokemons: [],
  pokemon: undefined
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POKEMONS: return {
      ...state,
      pokemons: payload
    };
    case GET_POKEMON: return {
      ...state,
      pokemon: payload
    };
    //CHECKEAR ACA CON POKEMON EN SINGULAR
    case GET_BY_NAME: return {
      ...state,
      pokemons: payload
    };
    case CREATE_POKEMON: return {
      ...state,
      pokemons: payload
    };
    default: return state;
  }
}