import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons } from "../actions";

function Home() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  return (
    <>
      <h3>Pokemons</h3>
      <hr />
      <ul className="list-unstyled">
        {pokemons.map((pokemon) => (
          <React.Fragment key={pokemon.id}>
            <Link to={`/pokemons/${pokemon.id}`}>
              <h3>{pokemon.nombre}</h3>
            </Link>
              <img alt={pokemon.nombre} src={pokemon.imagen}/>
              <h2>{pokemon.tipo}</h2>
            <hr/>
            {/* <h4>Tipos</h4>
            {pokemon.tipo.map((tipo) => (
              <p key={tipo.id}>{tipo[n]}</p>
            ))} */}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default Home;