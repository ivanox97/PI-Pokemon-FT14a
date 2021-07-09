import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPage, getPokemon } from "../actions";

function Pokemon() {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const { idPokemon } = useParams();
  // cuando se monta la pagina hace el fetch
  useEffect(() => {
    dispatch(getPokemon(idPokemon));
    return () => dispatch(clearPage())
  }, [idPokemon, dispatch]);
  console.log(pokemon)
  return (
    <div>
      {pokemon ? (
        <>
          <hr />
          <h3>{pokemon.name}</h3>
            <div className="page-body">tipo: {pokemon.type}</div>
            <img alt={pokemon.name} src={pokemon.image}/>
            <div className="page-body">vida: {pokemon.health}</div>
            <div className="page-body">fuerza :{pokemon.strength}</div>
            <div className="page-body">defensa :{pokemon.defense}</div>
            <div className="page-body">velocidad: {pokemon.speed}</div>
            <div className="page-body">altura: {pokemon.height}</div>
            <div className="page-body">peso: {pokemon.weight}</div>
          <hr />
        </>
      ) : pokemon === undefined ? (
        <div>Cargando...</div>
      ) : (
        <h1>Pagina no encontrada</h1>
      )}
    </div>
  );
}

export default Pokemon;