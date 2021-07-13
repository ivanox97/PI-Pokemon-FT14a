import React from 'react';
import { Link } from "react-router-dom";

function Pokemon(props) {
    return (
        <div key={props.pokeId}>
            <h3>{props.pokeName}</h3>
            <img alt={props.pokeId} src={props.pokeImage}/>
            <h3>Type</h3>
            {props.type.map( type => {
                if(typeof type === 'object'){
                  return <p key={type.id}>{type.name}</p>
                } else {
                    // let po = type
                  return <p key={Math.random(0,1)*type.length + 111}>{type}</p>
                }
              })}
                <Link to={`/pokemons/${props.pokeId}`}>
                    <button type="button" className="bb">MORE INFO</button>
                </Link>
            <hr/>
            </div>
    );
}

export default Pokemon;