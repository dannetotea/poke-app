import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route path="/:name">
          <PokemonDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
