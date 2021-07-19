import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilterByType from "./FilterByType";
import FilterByApiOrDb from "./FilterByAPI-DB"
import FilterAlphabetical from "./FilterAlphabetical"
import { getPokemons, setPage } from "../../actions";
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import image from "../../images/klipartz.com.png";

const Button = styled.button `
width: 100px;
height: 60px;
border-radius: 10px;
`

const Container = styled.div`
margin-top: 0;
margin: 0;
width: 100%;
height: 200px;
background-color: #D4A000;
border: 6px solid #0D5EAF;
border-radius:10px;
`

const CreateContainer = styled.div `
width: 237px;
height: 130px;
float: left;
background-color: #D4A000;
display: flex;
align-items: center;
justify-content: center;
`
const GoContainer = styled.div `
width: 400px;
height: 130px;
float: right;
background-color: #D4A000;
display: flex;
align-items: center;
justify-content: flex-start;
`
const SearchContainer = styled.div `
width: 33%;
height: 130px;
bottom: 100px;
background-color: #D4A000;
display: flex;
align-items: center;
justify-content: center;
`
const Upper = styled.div `
width: 20%;
height: 130px;
background-color: #D4A000;
justify-content: center;
align-items: center;
float:left;
overflow: hidden;
`
const Img = styled.img`
position:  relative;
width: 100%;
height: auto;
`
const FilterContainer = styled.div `
padding-top: 20px;
width: 100%;
height: 50px;
background-color: #0D5EAF;
display: flex;
align-items: center;
justify-content: space-around;
`
export default function Nav() {
  const dispatch = useDispatch()

  function handleOnClick(e) {
    dispatch(setPage(0));
    dispatch(getPokemons());
  }

  return (
    <>
      <Container>
        <Upper>
        <Img src={image} alt="" />
        </Upper>
        <CreateContainer>
            <Link to="/pokemons/add"><Button>Create a Pokemon!</Button></Link>
        </CreateContainer>
        <GoContainer>
            <Link to="/pokemons"><Button onClick={handleOnClick}>Go to Pokemons</Button></Link>
        </GoContainer>  
        <SearchContainer>
            <SearchBar/>
        </SearchContainer>
        <FilterContainer>
            <FilterByType/>
            <FilterByApiOrDb/>
            <FilterAlphabetical/>
        </FilterContainer>
      </Container>
  </>
  );
}
