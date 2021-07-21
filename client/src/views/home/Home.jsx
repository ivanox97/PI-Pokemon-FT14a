import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, setPage } from "../../actions";
import Pokemon from "../../components/pokemon/Pokemon"
import Loading from "../../components/extras/Loading";
import NotFound from "../../components/extras/NotFound";
import {Div, Pager, Button} from "./homeStyles";


export default function Home() {
  const pokemons = useSelector((state) => state.pokemons);
  const page = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    window.scrollTo(0, 0);
  },[dispatch]);

  function handlePage(n){
    const limitSup = Number.isInteger(pokemons.length/12)? Math.floor(pokemons.length/12)-1 : Math.floor(pokemons.length/12);

    if((page >= 0 && n === -1) || (page < limitSup && n === 1)){
      dispatch(setPage(page + n));
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      <Pager>
        {page > 0 && pokemons !== undefined? <Button onClick={() => handlePage(-1)} type="button">Prev</Button> : 
        <Button onClick={() => handlePage(-1)} type="button" disabled>Prev</Button>}

        {pokemons && page * 12 + 10 < (pokemons.indexOf(pokemons[pokemons.length-1]))? 
        <Button onClick={() => handlePage(1)} type="button">Next</Button> : 
        <Button onClick={() => handlePage(1)} type="button" disabled>Next</Button>}
      </Pager>
      <Div>
        {pokemons? pokemons.slice(page*12, page*12 + 12)
        .map(pokemon => {return <Pokemon key={pokemon.id} pokeName={pokemon.name} 
        pokeId={pokemon.id} pokeImage={pokemon.image} types={pokemon.types} 
        color={typeof pokemon.types[0] === 'object'? pokemon.types[0].name : pokemon.types[0]}/>})
        : <Loading/>
      }
      {Array.isArray(pokemons) && pokemons.length === 0?
        <NotFound/>: null
      }
      </Div>
    </>
  );
}
