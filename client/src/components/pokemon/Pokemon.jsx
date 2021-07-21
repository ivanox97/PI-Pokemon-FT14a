import React from 'react';
import { Link } from "react-router-dom";
import { Div2, ImageContainer, IMG, H3, H3Container, TypesContainer, P, TypesMayorContainer, 
  IdContainer, NameContainer, ButtonContainer, Button, Ball1, Ball2, Line} from "./pokemonStyles";

export default function Pokemon(props) {
    return (
        <Div2 key={props.pokeId} name={typeof props.types[0] === 'object'? props.types[0].name : props.types[0]} color={props.color}>
            <ImageContainer>
            <IMG alt={props.pokeId} src={props.pokeImage}/>
            </ImageContainer>
          <IdContainer>
            <H3>#{props.pokeId.toString().length <=3 ? 
            props.pokeId.toString().padStart(3, '0') : props.pokeId}</H3>
          </IdContainer>
          <H3Container>
            <NameContainer>{props.pokeName}</NameContainer>
          </H3Container>
          <TypesMayorContainer>
            <TypesContainer>
              {props.types.map(type =>{ if(type.name){
                 return <P key={Math.random(0,1)}>{type.name}</P>
              } else{
                return <P key={Math.random(0,1)}>{type}</P>
              }
              })}
            </TypesContainer>
            </TypesMayorContainer>
            <ButtonContainer>
            <Link to={`/pokemons/${props.pokeId}`}>
              <Button type="button">
                <Line></Line>
                <Ball1></Ball1>
                <Ball2></Ball2>
              </Button>
            </Link>
            </ButtonContainer>
        </Div2>
    );
}

