import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilterByType from "./FilterByType";
import FilterByApiOrDb from "./FilterByAPI-DB"
import FilterAlphabetical from "./FilterAlphabetical"
import { getPokemons, setPage } from "../../actions";
import styled from 'styled-components'
import { useDispatch } from "react-redux";

const Button = styled.button `
position: relative;
width: 25%;
margin: 0;
top: 10%;
left: 30%;
`

const Container = styled.div`
margin-top: 0;
margin: 0;
width: 100%;
height: 100px;
background-color: red;
`

const CreateContainer = styled.div `
width: 33%;
height: 50px;
float: left;
`
const GoContainer = styled.div `
width: 33%;
height: 50px;
float: right;
`
const SearchContainer = styled.div `
width: 33%;
height: 50px;
margin: 0 auto;
`
const Upper = styled.div `
width: 100%;
height: 100px;
background-color: green;
`
const FilterContainer = styled.div `
width: 100%;
height: 50px;
background-color: blue;
`
export default function Nav() {
  const dispatch = useDispatch()

  function handleOnClick(e) {
    dispatch(setPage(0));
    dispatch(getPokemons());
  }

  return (
    <>
      <Upper>hola</Upper>
      <Container>
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
