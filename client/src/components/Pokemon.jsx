import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

//tocar aca
const Div2 = styled.div `
  border-radius: 6px;
  padding: 1em;
  margin: 2em;
  flex: 0 0 17.3vw;
  height: 20%;
  width: 20%;
  display: inline-block;
  background: #fff;
  transition: all 300ms;
  color: #555;
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`


function Pokemon(props) {
    return (
        <Div2  key={props.pokeId}>
            <h3>{props.pokeName}</h3>
            <img alt={props.pokeId} src={props.pokeImage}/>
              {props.types.map(type =>{ if(type.name){
                 return <p key={Math.random(0,1)}>{type.name}</p>
              } else{
                return <p key={Math.random(0,1)}>{type}</p>
              }
              })}
            <Link to={`/pokemons/${props.pokeId}`}>
              <button type="button" className="bb">MORE INFO</button>
            </Link>
        </Div2>
    );
}

export default Pokemon;