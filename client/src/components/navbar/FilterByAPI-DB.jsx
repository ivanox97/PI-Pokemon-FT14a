import React , { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {filterByApiOrDb, setPage} from "../../actions";
import styled from "styled-components";


export default function FilterByApiOrDb() {
  const dispatch = useDispatch()
  const [apiOrDb, setApiOrDb] = useState({apiOrDb: ""});
  
  function  ResetSelect() {
    document.getElementById("filter").selectedIndex = 0;
    document.getElementById("type").selectedIndex = 0;
  }

  function handleChange(e) {
    setApiOrDb(e.target.value);
  }

  useEffect(()=> {
    dispatch(filterByApiOrDb(apiOrDb));
    dispatch(setPage(0));
    ResetSelect();
  },[dispatch, apiOrDb])

  
  return (
    <>
      <form>   
        <Div>
            <Select onChange={handleChange} id="apiOrDb" >
                <Option defaultValue="">OLD/NEW:</Option>
                <Option value="API">Old Pokemons</Option>
                <Option value="DB">New Pokemons</Option>
            </Select>
        </Div>
      </form>
    </>
  );
}

const Div = styled.div `
width: 33%;
float: left;
  flex: grid;
`;

const Select = styled.select `
margin: 0 auto;
color: black;
font-family: Roboto;
font-weight: bold;
text-transform: uppercase;
text-aling: center;
width: 130px;
height: 25px;
cursor: pointer;
border-radius: 10px;
&:hover{
  background-color:  #464646;
  color: white;
}
`;

const Option = styled.option`
background-color: white;
color: gray;
width: 310px;
padding: 10px 15px;
height: 20px;
cursor: pointer;
&:hover{
  padding-left: 25px;
  width: 270px;
  color: #EC6F66;
}
`;