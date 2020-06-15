import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  const location = useLocation();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route path="/details/:name">
          <PokemonDetails location={location} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
