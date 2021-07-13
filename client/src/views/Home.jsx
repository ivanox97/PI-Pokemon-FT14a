import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions";
import Pokemon from "../views/Pokemon"

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  
  return (
    <>
      <h2>Pokemons</h2>
      <hr />
      {pokemons.map(pokemon => {return <Pokemon key={pokemon.id} pokeName={pokemon.name} 
      pokeId={pokemon.id} pokeImage={pokemon.image} type={pokemon.type}/>})}
    </>
  );
}

export default Home;