import React , { useState } from "react";
import { useDispatch} from "react-redux";
import {filterAlfabet, setPage} from "../../actions";
import styled from "styled-components";

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
            <Select onChange={handleChange} id="filter">
                <Option defaultValue="">ALPHABETICAL/STRENGTH:</Option>
                <Option value="A-Z">A-Z</Option>
                <Option value="Z-A">Z-A</Option>
                <Option value="STRENGTH">STRENGTH</Option>
            </Select>
            <button onClick={handleOnClick} className="c">↓ ↑</button>
            <button type="submit" className="b">OK</button>
        </Div>
      </form>
    </>
  );
}

const Div = styled.div `
  width: 33%;
  float: left;
    flex: grid;
  `
  const Select = styled.select `
  margin: 0 auto;
  color: black;
  font-family: Roboto;
  font-weight: bold;
  text-transform: uppercase;
  text-aling: center;
  width: 200px;
  height: 25px;
  cursor: pointer;
  &:hover{
    background-color: transparent;
    color: white;
  }
  `
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
  `
