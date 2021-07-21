import { Route, Switch } from "react-router-dom"
import Home from "./views/home/Home"
import Nav from "./components/navbar/nav/Nav";
import PokemonDetail from "./views/pokemonDetail/PokemonDetail";
import CreatePokemon from "./views/create/CreatePokemon.jsx";
import Beggining from "./views/beggining/Beggining.jsx";

export default function App() {
  return (
    <>
      <Route path="/" exact component={Beggining}/>
      <Route path="/pokemons" component={Nav} />
      <Route path="/pokemons" exact component={Home} />
        <Switch>
          <Route path="/pokemons/add" exact component={CreatePokemon} />
          <Route path="/pokemons/:idPokemon" exact component={PokemonDetail} />
        </Switch>
    </>
  );
}

