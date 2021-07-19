import React , { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {filterByApiOrDb, setPage} from "../../actions";
import styled from "styled-components";

const Div = styled.div `
  width: 33%;
  float: left;
    flex: grid;
  `

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
    dispatch(setPage(0));
    dispatch(filterByApiOrDb(apiOrDb));
    ResetSelect();
  },[dispatch,apiOrDb])

  
  return (
    <>
      <form>   
        <Div className="checkbox-group">
            <select onChange={handleChange} id="apiOrDb" >
                <option defaultValue="">OLD/NEW:</option>
                <option value="API">Old Pokemons</option>
                <option value="DB">New Pokemons</option>
            </select>
        </Div>
      </form>
    </>
  );
}
