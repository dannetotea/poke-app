import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetails = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState("");
  const [pokemonName, setpokemonName] = useState("");

  useEffect(() => {
    setpokemonName(props.location.pathname && props.location.pathname.slice(9));
    if (pokemonName) {
      fetchPokemonDetails();
    }
  }, []);

  const fetchPokemonDetails = () => {
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
