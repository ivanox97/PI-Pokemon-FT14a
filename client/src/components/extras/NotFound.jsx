import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons, setPage } from '../../actions';

export default function NotFound() {
    const dispatch = useDispatch()

    function handleOnClick(e) {
    dispatch(setPage(0));
    dispatch(getPokemons());
    }

    return (
        <div>
            <h3>Pokemon not found</h3>
            <img alt="404 NotFound" src="https://toppng.com/uploads/preview/404-error-error-404-transparent-11563210406bsmsusbbzi.png"/>
            <Link to={`/pokemons`}>
              <button type="button" className="bb" onClick={handleOnClick}>Go Back</button>
            </Link>
            <hr/>
        </div>
    );
}
