// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Henry Pokemon</h1>
//     </div>
//   );
// }

// export default App;

import Home from "./views/Home"
import { Route, Switch } from "react-router-dom"
import Nav from "./components/Nav";
import Pokemon from "./views/Pokemon";
import CreatePokemon from "./views/CreatePokemon";
import Beggining from "./views/Beggining";

function App() {
  return (
    <>
      <Route path="/" exact component={Beggining}/>
      <Route path="/pokemons" component={Nav} />
      <Route path="/pokemons" exact component={Home} />
        <Switch>
          <Route path="/pokemons/add" exact component={CreatePokemon} />
          <Route path="/pokemons/:idPokemon" exact component={Pokemon} />
        </Switch>
    </>
  );
}

export default App;
