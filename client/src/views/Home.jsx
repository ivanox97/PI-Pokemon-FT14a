import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions";
import Pokemon from "../components/Pokemon"
import Loading from "../components/extras/Loading";
import NotFound from "../components/extras/NotFound";
import styled from "styled-components";

const Div = styled.div `
 
`


export default function Home() {
  const pokemons = useSelector((state) => state.pokemons);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handlePage(n){
    if((page > 0 && n === -1) || (page < 9 && n === 1)){
      setPage(page + n)
    }
  }
  
  console.log("home",pokemons)
  return (
    <Div>
      <h2>Pokemons</h2>
      <hr />
    
      {page > 0? <button onClick={() => handlePage(-1)} type="button" className="b">PREV</button> : null}
      {page <= 3? <button onClick={() => handlePage(1)} type="button" className="b">NEXT</button> : null}
    
      {pokemons?
      pokemons.slice(page*12, page*12 + 12).map(pokemon => {return <Pokemon key={pokemon.id} pokeName={pokemon.name} 
      pokeId={pokemon.id} pokeImage={pokemon.image} types={pokemon.types}/>})
      : <Loading/>
    }
    {Array.isArray(pokemons) && pokemons.length === 0?
      <NotFound/>: null
    }
    </Div>
  );
}
