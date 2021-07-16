import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h3>Pokemon not found</h3>
            <img alt="404 NotFound" src="https://toppng.com/uploads/preview/404-error-error-404-transparent-11563210406bsmsusbbzi.png"/>
            <Link to={`/pokemons`}>
              <button type="button" className="bb">Go Back</button>
            </Link>
            <hr/>
        </div>
    );
}
