import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemon, getPokemons } from "../actions";


function Add() {
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    name: "",
    image: "",
    health: 0,
    strength: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type1: undefined,
    type2: undefined,
  });

  function handleChange(e) {
      setValues(values =>({
      ...values,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    if(values.type1 === values.type2){
      values.type2 = undefined;
    }
    e.preventDefault()
    dispatch(createPokemon(values));
    dispatch(getPokemons());
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
          <label htmlFor="image" className="col-sm-2 control-label">
            image
          </label>
          <div className="col-sm-10">
            <input onChange={handleChange} value={values.image} name="image" type="text" className="form-control" />
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
        <div className="checkbox-group">
          <h3>type 1</h3>
        <select onChange={handleChange} name="type1" >
          <option defaultValue="0"></option>
          <option value="1">normal</option>
          <option value="2">fighting</option>
          <option value="3">flying</option>
          <option value="4">poison</option>
          <option value="5">ground</option>
          <option value="6">rock</option>
          <option value="7">bug</option>
          <option value="8">ghost</option>
          <option value="9">steel</option>
          <option value="10">fire</option>
          <option value="11">water</option>
          <option value="12">grass</option>
          <option value="13">electric</option>
          <option value="14">psychic</option>
          <option value="15">ice</option>
          <option value="16">dragon</option>
          <option value="17">dark</option>
          <option value="18">fairy</option>
          <option value="19">unknown</option>
          <option value="20">shadow</option>
        </select>
        <h3>type 2</h3>
        <select onChange={handleChange} name="type2" >
          <option value="0"></option>
          <option value="1">normal</option>
          <option value="2">fighting</option>
          <option value="3">flying</option>
          <option value="4">poison</option>
          <option value="5">ground</option>
          <option value="6">rock</option>
          <option value="7">bug</option>
          <option value="8">ghost</option>
          <option value="9">steel</option>
          <option value="10">fire</option>
          <option value="11">water</option>
          <option value="12">grass</option>
          <option value="13">electric</option>
          <option value="14">psychic</option>
          <option value="15">ice</option>
          <option value="16">dragon</option>
          <option value="17">dark</option>
          <option value="18">fairy</option>
          <option value="19">unknown</option>
          <option value="20">shadow</option>
        </select>
        </div>
        <div className="col-sm-offset-2 col-sm-10">
          <button
            type="submit"
            className="b"
          >
            CREATE POKEMON!
          </button>
        </div>
      </form>
    </>
  );
}

export default Add;