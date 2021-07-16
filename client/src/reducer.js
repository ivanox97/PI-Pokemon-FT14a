import { GET_POKEMONS, GET_POKEMON, GET_BY_NAME, 
  CREATE_POKEMON, FILTER_BY_TYPE, FILTER_API_DB,
  FILTER_ALFABETICAL, FILTER_ASCENDANCY} from "./actions"

const initialState = {
  pokemonsFiltered:[],
  pokemons: undefined,
  pokemon: []
}
console.log("estadpoo",initialState.pokemons)

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
    case FILTER_BY_TYPE: return {
      ...state,
      pokemons: payload,
    }
    case FILTER_API_DB: return {
      ...state,
      pokemons: payload
    }
    case FILTER_ALFABETICAL: return {
      ...state,
      pokemons: payload
    }
    case FILTER_ASCENDANCY: return {
      ...state,
      pokemons: payload
    }
    default: return state;
  }
}