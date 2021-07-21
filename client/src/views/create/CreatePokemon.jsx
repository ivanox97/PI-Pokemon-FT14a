import React , { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getPokemons } from "../../actions";
import {Body, Container, Title, UserDetail, InputBox, Details, Input, ButtonContainer, Button
  , SelectBox, SelectBox2, Select, Option, DetailsType1, DetailsType2 } from "./createStyles";


export default function Add() {
  const pokemons = useSelector((state) => state.pokemons);
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
    e.preventDefault();

    pokemons.forEach(poke => {if(poke.name === values.name){
      alert("That Pokemon name already exists :(")
    }});
  
    dispatch(createPokemon(values));
    dispatch(getPokemons());
  }

  return (
    <Body>
    <Container>
      <Title>Create a Pokemon</Title>
      <form onSubmit={handleSubmit}>
        <UserDetail>
          <InputBox>
              <Details htmlFor="name">Name:</Details>
              <Input onChange={handleChange} value={values.name} name="name" type="text" required/>
          </InputBox>
          <InputBox>
              <Details htmlFor="image">Image:</Details>
              <Input onChange={handleChange} value={values.image} name="image" type="text" />
          </InputBox>
        <InputBox>
          <Details htmlFor="email">Health:</Details>
            <Input onChange={handleChange} value={values.health} name="health" type="number"/>
        </InputBox>
        <InputBox>
          <Details htmlFor="title">Strength:</Details>
            <Input onChange={handleChange} value={values.strength} name="strength" type="number"/>
        </InputBox>
        <InputBox>
          <Details htmlFor="title">Defense:</Details>
            <Input onChange={handleChange} value={values.defense} name="defense" type="number"/>
        </InputBox>
        <InputBox>
          <Details htmlFor="title">Speed:</Details>
            <Input onChange={handleChange} value={values.speed} name="speed" type="number"/>
        </InputBox>
        <InputBox>
          <Details htmlFor="title">Height:</Details>
            <Input onChange={handleChange} value={values.height} name="height" type="number"/>
        </InputBox>
        <InputBox>
          <Details htmlFor="title">Weight:</Details>
            <Input onChange={handleChange} value={values.weight} name="weight" type="number"/>
        </InputBox>
        <SelectBox>
          <DetailsType1>First Type:</DetailsType1>
        <Select onChange={handleChange} name="type1" required>
          <Option defaultValue="0"></Option>
          <Option value="1">normal</Option>
          <Option value="2">fighting</Option>
          <Option value="3">flying</Option>
          <Option value="4">poison</Option>
          <Option value="5">ground</Option>
          <Option value="6">rock</Option>
          <Option value="7">bug</Option>
          <Option value="8">ghost</Option>
          <Option value="9">steel</Option>
          <Option value="10">fire</Option>
          <Option value="11">water</Option>
          <Option value="12">grass</Option>
          <Option value="13">electric</Option>
          <Option value="14">psychic</Option>
          <Option value="15">ice</Option>
          <Option value="16">dragon</Option>
          <Option value="17">dark</Option>
          <Option value="18">fairy</Option>
          <Option value="19">unknown</Option>
          <Option value="20">shadow</Option>
        </Select>
        </SelectBox>
        <SelectBox2>
        <DetailsType2>Second Type:</DetailsType2>
        <Select onChange={handleChange} name="type2" >
          <Option value="0"></Option>
          <Option value="1">normal</Option>
          <Option value="2">fighting</Option>
          <Option value="3">flying</Option>
          <Option value="4">poison</Option>
          <Option value="5">ground</Option>
          <Option value="6">rock</Option>
          <Option value="7">bug</Option>
          <Option value="8">ghost</Option>
          <Option value="9">steel</Option>
          <Option value="10">fire</Option>
          <Option value="11">water</Option>
          <Option value="12">grass</Option>
          <Option value="13">electric</Option>
          <Option value="14">psychic</Option>
          <Option value="15">ice</Option>
          <Option value="16">dragon</Option>
          <Option value="17">dark</Option>
          <Option value="18">fairy</Option>
          <Option value="19">unknown</Option>
          <Option value="20">shadow</Option>
        </Select>
        </SelectBox2>
        <ButtonContainer>
          <Button type="submit" value="CREATE!"></Button>
        </ButtonContainer>
        </UserDetail>
      </form>
    </Container>
    </Body>
  );
}

