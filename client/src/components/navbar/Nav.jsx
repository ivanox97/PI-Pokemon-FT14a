import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilterByType from "./FilterByType";
import FilterByApiOrDb from "./FilterByAPI-DB"
import FilterAlfabetical from "./FilterAlfabetical"
import { getPokemons } from "../../actions";
import styled from 'styled-components'
import { useDispatch } from "react-redux";

const Button = styled.button `
width: 25%;
float: left;
  flex: grid;
`
export default function Nav() {
  const dispatch = useDispatch()

  function handleOnClick(e) {
    dispatch(getPokemons());
  }

  return (
      <div className="container">
        <div id="nav-items" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <Link to="/pokemons/add"><Button>Create a Pokemon!</Button></Link>
            <Link to="/pokemons"><Button onClick={handleOnClick}>Go to Pokemons</Button></Link>
            <SearchBar/>
            <FilterByType/>
            <FilterByApiOrDb/>
            <FilterAlfabetical/>
          </ul>
        </div>
      </div>
  );
}
