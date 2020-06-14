import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const fetchData = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <div className="App">{fetchData()}</div>;
}

export default App;
