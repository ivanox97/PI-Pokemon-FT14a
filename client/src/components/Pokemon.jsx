import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

//tocar aca
const Div2 = styled.div `
  padding: 10px;
  margin: 30px;
  height: 250px;
  width: 250px;
  display: inline-block;
  border-radius: 6px;
  background: yellow;
  color: #555;
  display: flex;
  float: right;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 0 10px blue;
`

const ImageContainer = styled.div `
position:relative;
top: -10px;
left: -50px;
background-color: red;
border-radius: 5px;
width: 200px;
height: 150px;
`

const IMG = styled.img `
  position: relative;
  top: 10px;
  left: 50px;
  heigth: 150px;
  width: 150px;
`
const H3 = styled.h3 `
margin: 0;
`
const H3Container = styled.div `
position: relative;
top: -10px;
`
const TypesContainer = styled.div`
position: relative;
height: 100px;
width: 150px;
background-color: lightblue;
`

const P = styled.p`
margin:0;
padding-top: 5px;
text-align: center;

`
const P1 = styled.h4`
margin:0;
padding-top: 5px;
text-align: center;
`
// display:table-cell;

const ButtonContainer = styled.div `
position: relative;
bottom: 20px;
left: 80px;
height: 40px;
width: 70px;
background-color: lightblue;
`

const TypesMayorContainer = styled.div `
position: relative;
right: 60px;
top: 20px;
`
function Pokemon(props) {
    return (
        <Div2 key={props.pokeId}>
            <ImageContainer>
            <IMG alt={props.pokeId} src={props.pokeImage}/>
            </ImageContainer>
          <H3Container>
            <H3>{props.pokeName.toUpperCase()}</H3>
          </H3Container>
          <TypesMayorContainer>
            <TypesContainer>
              {props.types.map(type =>{ if(type.name){
                 return <P key={Math.random(0,1)}>{type.name}</P>
              } else{
                return <P1 key={Math.random(0,1)}>{type}</P1>
              }
              })}
            </TypesContainer>
            </TypesMayorContainer>
            <ButtonContainer>
            <Link to={`/pokemons/${props.pokeId}`}>
              <button type="button" className="bb">MORE INFO</button>
            </Link>
            </ButtonContainer>
        </Div2>
    );
}

export default Pokemon;