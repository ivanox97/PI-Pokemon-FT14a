import React , { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {filterByType, setPage} from "../../actions";
import styled from 'styled-components';

const Div = styled.div `
width: 33%;
float: left;
  flex: grid;
`

export default function FilterType() {
  const dispatch = useDispatch()

  const [type, setType] = useState({type: ""});

  function handleChange(e) {
      setType(e.target.value);
  }
  
  useEffect(()=> {
    dispatch(setPage(0));
    dispatch(filterByType(type));
  },[dispatch,type])

  return (
    <>
      <form>   
        <Div>
            <select onChange={handleChange} name="type" >
                <option defaultValue="">Filter by Type</option>
                <option value="normal">normal</option>
                <option value="fighting">fighting</option>
                <option value="flying">flying</option>
                <option value="poison">poison</option>
                <option value="ground">ground</option>
                <option value="rock">rock</option>
                <option value="bug">bug</option>
                <option value="ghost">ghost</option>
                <option value="steel">steel</option>
                <option value="fire">fire</option>
                <option value="water">water</option>
                <option value="grass">grass</option>
                <option value="electric">electric</option>
                <option value="psychic">psychic</option>
                <option value="ice">ice</option>
                <option value="dragon">dragon</option>
                <option value="dark">dark</option>
                <option value="fairy">fairy</option>
                <option value="unknown">unknown</option>
                <option value="shadow">shadow</option>
            </select>
        </Div>
      </form>
    </>
  );
}
