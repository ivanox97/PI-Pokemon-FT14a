import React , { useState } from "react";
import { useDispatch} from "react-redux";
import {filterAlfabet, setPage} from "../../actions";
import styled from "styled-components";

const Div = styled.div `
  width: 33%;
  float: left;
    flex: grid;
  `


export default function FilterAlphabetical() {
  const dispatch = useDispatch()
  const [order, setOrder] = useState({order: ""});
  var [ascendancy, setAscendancy] = useState(1);

  function ResetSelect() {
    document.getElementById("apiOrDb").selectedIndex = 0;
    document.getElementById("type").selectedIndex = 0;
  }

  function handleOnClick(e){
    setAscendancy(ascendancy+1);
    }

  function handleChange(e) {
    setOrder(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setPage(0));
    dispatch(filterAlfabet(order,ascendancy));
    ResetSelect();
    setAscendancy(1);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>   
        <Div>
            <select onChange={handleChange} id="filter">
                <option defaultValue="">ALPHABETICAL/STRENGTH:</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="STRENGTH">STRENGTH</option>
            </select>
            <button onClick={handleOnClick} className="c">↓ ↑</button>
            <button type="submit" className="b">OK</button>
        </Div>
      </form>
    </>
  );
}