import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const colors = {
  fire: '#FF8F7B',
  grass: '#6BA497',
  electric: '#EEC944',
  water: '#84C2FF',
  ground: '#C69C05',
  rock: '#898F71',
  fairy: '#EFAEFF',
  poison: '#7B30A9',
  bug: '#CCD77B',
  dragon: '#C882F3',
  psychic: '#F44987',
  flying: '#ADE2EE',
  fighting: '#A99A89',
  normal: '#DAD7C9',
  ghost: '#7465CF',
  steel: '#9FACA9',
  ice: '#AACEF1',
  dark: '#4F4A46',
}

const Div2 = styled.div `
  padding-left: 10px;
  margin: 30px;
  height: 200px;
  width: 250px;
  display: inline-block;
  border-radius: 6px;
  color: white;
  font-size: 1.1rem;
  text-transform: capitalize;
  background-color: ${props => props.color === 'fire' && `${colors.fire}` ||
  props.color === 'grass' && `${colors.grass}` ||
  props.color === 'electric' && `${colors.electric}` ||
  props.color === 'water' && `${colors.water}` ||
  props.color === 'ground' && `${colors.ground}` ||
  props.color === 'rock' && `${colors.rock}` ||
  props.color === 'fairy' && `${colors.fairy}` ||
  props.color === 'poison' && `${colors.poison}` ||
  props.color === 'bug' && `${colors.bug}` ||
  props.color === 'dragon' && `${colors.dragon}` ||
  props.color === 'psychic' && `${colors.psychic}` ||
  props.color === 'flying' && `${colors.flying}` ||
  props.color === 'fighting' && `${colors.fighting}` ||
  props.color === 'normal' && `${colors.normal}` ||
  '#fffffa'
  };
  box-shadow: 0 0 5px 3px grey;
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`

const ImageContainer = styled.div `
position:relative;
top: 120px;
left: 90px;
background: conic-gradient(#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc,#bde6ff, #f7fcfc);
transform: rotate(100deg);
border-radius: 50%;
box-shadow: 0 0 0 3px #bde6ff;
width: 130px;
height: 130px;

`

const IMG = styled.img `
  position: relative;
  bottom: 10px;
  right: 10px;
  heigth: 150px;
  width: 150px;
  transform: rotate(-100deg);
`
const H3 = styled.h3 `
margin: 0;
float: right;
font-family: Roboto;
font-weight: bold;
`
const H3Container = styled.div `
position: relative;
bottom: 70px;
right: 50px;
`
const TypesContainer = styled.div`
position: relative;
height: 50px;
width: 70px;
padding: 8px;
text-aling: center;
bottom: 60px;
border-radius: 25px;
background: rgba(0, 0, 0, 0.2);
color: #fffffa; 
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-transform: capitalize;
`

const P = styled.p`
margin:0;
text-align: center;
`

const TypesMayorContainer = styled.div `
position: relative;
right: 60px;
top: 0px;
`
const IdContainer = styled.div `
position: relative;
bottom: 70px;
left: 60px;
width: 100px;
float: right;
`
const NameContainer = styled.h3 `
margin: 0;
float: right;
font-family: Roboto;
font-weight: bold;
font-size: 30px;
text-transform: capitalize;
`
const ButtonContainer = styled.div `
position: relative;
bottom: 40px;
right: 60px;
height: 50px;
width: 70px;
`
const Button = styled.button`
height: 100px;
width: 100px;
border-radius: 50%;
overflow: hidden;
position: relative;
right:15px;
bottom: 20px;
border: 3px solid #222224;
background: #F00000;
text-aling: center;
font-family: Roboto;
font-weight: bold;
font-size: 100px;
&:hover{
  background: #f2ed4b;
}
`
const Ball1 =styled.span`
position: relative;
height: 50px;
width: 50px;
bottom: 30px;
left: 10px;
background-color: #222224;
border-radius: 50%;
display: inline-block;
`
const Ball2 = styled.span`
position: relative;
height: 23px;
width: 21px;
bottom: 45px;
right: 26px;
background-color: white;
border-radius: 50%;
display: inline-block;
`
const Line = styled.div`
position: relative;
height: 10px;
width: 200px;
background-color: #222224;
top: 42px;
right: 10px;
`