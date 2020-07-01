import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetails = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState("");
  let { name } = useParams();
  useEffect(() => {
    fetchPokemonDetails();
  }, [name]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemonDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pokeDetails">
      <div>
        <div className="pokeDetailsTitle">
          <h1 className="textCapitalize">{pokemonDetails.name}</h1>
        </div>
        {pokemonDetails.sprites && (
          <div className="displayImg">
            <img src={pokemonDetails.sprites.back_default} alt="back image" />
            <img src={pokemonDetails.sprites.back_shiny} alt="back image" />
            <img src={pokemonDetails.sprites.front_default} alt="front image" />
            <img src={pokemonDetails.sprites.front_shiny} alt="front image" />
          </div>
        )}
        <div className="pokeMeasurements">
          <div className="pokeHeight">Height: {pokemonDetails.height}</div>
          <div className="pokeWeight">Weight: {pokemonDetails.weight}</div>
        </div>
        <div className="displayBadge">
          <div>
            {pokemonDetails.types &&
              pokemonDetails.types.map((type, index) => {
                return (
                  <div className="pokeTypes" key={index}>
                    {type.type.name}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
