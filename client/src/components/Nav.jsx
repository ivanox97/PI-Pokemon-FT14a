import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
      <div className="container">
        <div id="nav-items" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/pokemons/add">ADD POKEMON</Link>
            </li>
            <li>
              <Link to="/pokemons">POKEMONS</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Nav;