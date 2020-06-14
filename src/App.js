import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import PokemonList from "./pages/PokemonList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <PokemonList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
