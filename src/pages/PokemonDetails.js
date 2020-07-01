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

  return (
    <div className="pokeDetails">
      <div>
        <div className="pokeDetailsTitle">
          <h1>
            {pokemonDetails.name &&
              pokemonDetails.name.charAt(0).toUpperCase() +
                pokemonDetails.name.slice(1)}
          </h1>
        </div>
        {pokemonDetails.sprites && (
          <div className="displayImg">
            <img src={pokemonDetails.sprites.back_default} />
            <img src={pokemonDetails.sprites.back_shiny} />
            <img src={pokemonDetails.sprites.front_default} />
            <img src={pokemonDetails.sprites.front_shiny} />
          </div>
        )}
        <div className="pokeMeasurements">
          <div className="pokeHeight">Height: {pokemonDetails.height}</div>
          <div className="pokeWeight">Weight: {pokemonDetails.weight}</div>
        </div>
        <div className="displayBadge">
          <div>
            {pokemonDetails.types &&
              pokemonDetails.types.map((type) => {
                return <div className="pokeTypes">{type.type.name}</div>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
