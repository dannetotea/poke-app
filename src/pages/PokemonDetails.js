import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PokemonDetails = (props) => {
  let history = useHistory();
  const [pokemonDetails, setPokemonDetails] = useState("");

  useEffect(() => {
    const pokemonName = history.location.pathname.slice(1);
    fetchPokemonDetails(pokemonName);
  }, []);

  const fetchPokemonDetails = (pokemonName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemonDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div>{console.log(pokemonDetails)}</div>;
};

export default PokemonDetails;
