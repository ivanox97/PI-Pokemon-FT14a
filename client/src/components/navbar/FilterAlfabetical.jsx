import React , { useState } from "react";
import { useDispatch} from "react-redux";
import {filterAlfabet, setPage} from "../../actions";
import styled from "styled-components";

const Div = styled.div `
  width: 33%;
  float: left;
    flex: grid;
  `


export default function FilterAlfabetical() {
  const dispatch = useDispatch()
  const [order, setOrder] = useState({order: ""});
  var [ascendancy, setAscendancy] = useState(1);

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
    setAscendancy(1)
  }
  // useEffect(()=>{
  //   dispatch(filterAlfabet(order,ascendancy));
  // },[dispatch,order,ascendancy])

  return (
    <>
      <form onSubmit={handleSubmit}>   
        <Div className="checkbox-group">
          <h3>BY ALFABETICAL/STRENGTH:</h3>
            <select onChange={handleChange} name="order" >
                <option defaultValue=""></option>
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