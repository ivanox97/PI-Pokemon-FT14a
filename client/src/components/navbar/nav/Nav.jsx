import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import FilterByType from "../FilterByType";
import FilterByApiOrDb from "../FilterByAPI-DB"
import FilterAlphabetical from "../FilterAlphabetical"
import { getPokemons, setPage} from "../../../actions";
import { useDispatch } from "react-redux";
import image from "../../../images/logo.png";
import {MdCreate} from "react-icons/md";
import {GoHome} from "react-icons/go"
import {Container, GoContainer, SearchContainer, ImgContainer, Img, FilterContainer,
  Button, Input1, Div1, CreateContainer,  Input2,  Div2} from "./navStyles";


export default function Nav() {
  const dispatch = useDispatch()

  function ResetSelect() {
    document.getElementById("apiOrDb").selectedIndex = 0;
    document.getElementById("type").selectedIndex = 0;
    document.getElementById("filter").selectedIndex = 0;
  }

  function handleOnClick(e) {
    ResetSelect();
    dispatch(setPage(0));
    dispatch(getPokemons());
  }

  return (
    <>
      <Container>
        <ImgContainer>
        <Img src={image} alt="" />
        </ImgContainer>
        <CreateContainer>
          <Div1> 
          <Input1 type="text" defaultValue="Create!" read-only/>
           <Link to="/pokemons/add"><Button><MdCreate size="33px" color="#F0DBA5"/></Button></Link>
          </Div1>
        </CreateContainer>
        <GoContainer>
          <Div2>
            <Input2 type="text" defaultValue="Pokemons!" read-only/>
            <Link to="/pokemons"><Button onClick={handleOnClick}><GoHome size="33px" color="#F0DBA5"/></Button></Link>
          </Div2>
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
