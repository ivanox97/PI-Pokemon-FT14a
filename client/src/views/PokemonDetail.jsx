import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPage, getPokemon } from "../actions";

export default function PokemonDetail() {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const { idPokemon } = useParams();

  useEffect(() => {
    dispatch(getPokemon(idPokemon));
    return () => dispatch(clearPage())
  }, [idPokemon, dispatch]);
  
  return (
    <div>
      {pokemon ? (
        <>
          <hr />
          <h3>{pokemon[0].name}</h3>
            <div className="page-body">
              tipo: 
            {pokemon.map(p => {if(!p.type){
              let separated = p.types.map(t => t.name);
              let joined = separated.join('/')
              return joined;
            } else {
              let separated = p.type;
              let joined = separated.join('/');
              return joined;
            }
            })}
            </div>
            <img alt={pokemon[0].id} src={pokemon[0].image}/>
            <div className="page-body">vida: {pokemon[0].health}</div>
            <div className="page-body">fuerza :{pokemon[0].strength}</div>
            <div className="page-body">defensa :{pokemon[0].defense}</div>
            <div className="page-body">velocidad: {pokemon[0].speed}</div>
            <div className="page-body">altura: {pokemon[0].height}</div>
            <div className="page-body">peso: {pokemon[0].weight}</div>
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
