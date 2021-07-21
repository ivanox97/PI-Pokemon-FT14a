import React , { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {filterByType, setPage} from "../../actions";
import styled from 'styled-components';


export default function FilterType() {
  const dispatch = useDispatch()

  const [type, setType] = useState({type: ""});
  
  function ResetSelect() {
    document.getElementById("apiOrDb").selectedIndex = 0;
    document.getElementById("filter").selectedIndex = 0;
  }
  
  function handleChange(e) {
      setType(e.target.value);
  }
 
  useEffect(()=> {
    dispatch(setPage(0));
    dispatch(filterByType(type));
    ResetSelect();
  },[dispatch,type])

  return (
    <>
      <form>   
        <Div>
            <Select onChange={handleChange} id="type" >
                <Option defaultValue="">Type</Option>
                <Option value="normal">normal</Option>
                <Option value="fighting">fighting</Option>
                <Option value="flying">flying</Option>
                <Option value="poison">poison</Option>
                <Option value="ground">ground</Option>
                <Option value="rock">rock</Option>
                <Option value="bug">bug</Option>
                <Option value="ghost">ghost</Option>
                <Option value="steel">steel</Option>
                <Option value="fire">fire</Option>
                <Option value="water">water</Option>
                <Option value="grass">grass</Option>
                <Option value="electric">electric</Option>
                <Option value="psychic">psychic</Option>
                <Option value="ice">ice</Option>
                <Option value="dragon">dragon</Option>
                <Option value="dark">dark</Option>
                <Option value="fairy">fairy</Option>
                <Option value="unknown">unknown</Option>
                <Option value="shadow">shadow</Option>
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