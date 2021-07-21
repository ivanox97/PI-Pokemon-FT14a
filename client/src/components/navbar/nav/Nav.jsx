import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import FilterByType from "../FilterByType";
import FilterByApiOrDb from "../FilterByAPI-DB"
import FilterAlphabetical from "../FilterAlphabetical"
import { getPokemons, setPage } from "../../../actions";
import { useDispatch } from "react-redux";
import image from "../../../images/klipartz.com.png";
import {MdCreate} from "react-icons/md";
import {GoHome} from "react-icons/go"
import {Container, GoContainer, SearchContainer, ImgContainer, Img, FilterContainer,
  Button, Input, Div1, CreateContainer} from "./navStyles";


export default function Nav() {
  const dispatch = useDispatch()

  function handleOnClick(e) {
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
          <Input type="text" defaultValue="Create!" read-only/>
           <Link to="/pokemons/add"><Button><MdCreate size="33px" color="#e84118"/></Button></Link>
          </Div1>
        </CreateContainer>
        <GoContainer>
            <Link to="/pokemons"><Button onClick={handleOnClick}><GoHome size="33px" color="#e84118"/></Button></Link>
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
