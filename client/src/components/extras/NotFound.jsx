import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons, setPage } from '../../actions';
import image from "../../images/not found.png";
import styled from "styled-components";
 
export default function NotFound() {
    const dispatch = useDispatch()

    function handleOnClick(e) {
    dispatch(setPage(0));
    dispatch(getPokemons());
    }

    return (
        <Div>
            <Img alt="404 NotFound" src={image}/>
            <Link to={`/pokemons`}>
              <Button type="button" className="bb" onClick={handleOnClick}>Home</Button>
            </Link>
        </Div>
    );
}

const Img = styled.img `
height: 400px; 
width:  600px;
`;

const Div = styled.div `
height: 500px;
display: flex;
align-items: center;
justify-content: center;
margin: -50px auto;
`;

const Button = styled.button `
height: 100px;
width: 100px;
margin-left: 10px;
outline: none;
color: #fff;
border: none;
font-size: 28px;
font-weight: 600;
border-radius: 50%;
letter-spacing: 1px;
background: linear-gradient( 135deg, #202D5A, #2F8DED);
&:hover{
  background: linear-gradient(-135deg, #2F8DED, #202D5A);
}
`