import React , { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {filterByApiOrDb} from "../../actions";
import styled from "styled-components";

const Div = styled.div `
  width: 33%;
  float: left;
    flex: grid;
  `

export default function FilterByApiOrDb() {
  const dispatch = useDispatch()
  const [apiOrDb, setApiOrDb] = useState({apiOrDb: ""});

  function handleChange(e) {
    setApiOrDb(e.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch(filterByApiOrDb(apiOrDb));
  // }

  useEffect(()=> {
    dispatch(filterByApiOrDb(apiOrDb));
  },[dispatch,apiOrDb])
  
  return (
    <>
      <form>   
        <Div className="checkbox-group">
          <h3>BY API or DB:</h3>
            <select onChange={handleChange} name="ApiOrDb" >
                <option defaultValue=""></option>
                <option value="API">Old Pokemons</option>
                <option value="DB">Created Pokemons</option>
            </select>
        </Div>
      </form>
    </>
  );
}
