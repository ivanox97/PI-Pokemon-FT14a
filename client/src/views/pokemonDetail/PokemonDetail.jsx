import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../actions";
import NotFound from "../../components/extras/NotFound";
import {Container, PokeBox, Title, ImageContainer, Img, Type, TypeContainer,
   InfoContainer, Info, StatsContainer, MiddleContainer} from "./pokemonDetStyles";


export default function PokemonDetail() {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const { idPokemon } = useParams();

  
  useEffect(() => {
    dispatch(getPokemon(idPokemon));
    window.scrollTo(0, 0);
  }, [idPokemon, dispatch]);
  
  return (
    <Container>
      {pokemon && pokemon.length > 0? (
        <PokeBox>
          <ImageContainer>
          <Img alt={pokemon[0].id} src={pokemon[0].image}/>
          </ImageContainer>
                <Title>{pokemon[0].name}</Title>
            <MiddleContainer>
              <InfoContainer>
                <TypeContainer>
                  <Type>{pokemon.map(p => {
                      let separated = p.types;
                      let joined = separated.join('/');
                      return joined;
                    })}
                  </Type>
                </TypeContainer>
                <Info>Height: {pokemon[0].height} m</Info>
                <Info>Weight: {pokemon[0].weight} Kg</Info>
              </InfoContainer>
              <StatsContainer>
                <span>Health: {pokemon[0].health}</span>
                <progress max="100" value={pokemon[0].health}></progress>
                <span>Strength: {pokemon[0].strength}</span>
                <progress max="100" value={pokemon[0].strength}></progress>
                <span>Defense: {pokemon[0].defense}</span>
                <progress max="100" value={pokemon[0].defense}></progress>
                <span>Speed: {pokemon[0].speed}</span>
                <progress max="100" value={pokemon[0].speed}></progress>
              </StatsContainer>
            </MiddleContainer>
        </PokeBox>
      ) : (<NotFound/>)}
    </Container>
  );
}


