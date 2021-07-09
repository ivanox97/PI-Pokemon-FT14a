  
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemons } from "../actions";

function Add() {
  const dispatch = useDispatch()
  const { push } = useHistory()


  const [values, setValues] = React.useState({
    name: "",
    health: 0,
    strength: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type: [],
  });

  function handleChange(e) {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  // const handleChange = (e) => {
  //   const target = e.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   setValues(values =>({
  //     ...values,
  //     [name]: value
  //   }));


  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3001/pokemons/', values)
    .then(response => {
      dispatch(getPokemons())
      push(response.data.route)
    })
  }
  return (
    <>
      <h3>Add a Pokemon</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 control-label">
            name
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.name} name="name" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="col-sm-2 control-label">
            health
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.health} name="health" type="number" className="form-control" />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">
            strength
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.strength} name="strength" type="number" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">
            defense
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.defense} name="defense" type="number" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">
            speed
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.speed} name="speed" type="number" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">
            height
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.height} name="height" type="number" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">
            weight
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.weight} name="weight" type="number" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <p>
            <h3> Types </h3>
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="1" />
              normal
            </label>
            <br />
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="2" /> 
              fighting
            </label>
            <br />
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="3" /> 
              flying
            </label>
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="4" /> 
              poison
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="5" /> 
              ground
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="6" /> 
              rock
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="7" /> 
              bug
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="8" /> 
              ghost
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="9" /> 
              steel
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="10" /> 
              fire
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="11" /> 
              water
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="12" /> 
              grass
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="13" /> 
              electric
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="14" /> 
              psychic
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="15" /> 
              ice
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="16" /> 
              dragon
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="17" /> 
              dark
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="18" /> 
              fairy
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="19" /> 
              unknown
            </label> 
            <label>
              <input onChange={handleChange} type="checkbox" name="type" value="20" /> 
              shadow
            </label> 
          </p>
        </div>
        <div className="col-sm-offset-2 col-sm-10">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px", float: "right" }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default Add;