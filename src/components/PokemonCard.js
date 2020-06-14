import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = (props) => {
  const pokemon = props.pokemon;
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonLogo, setPokemonLogo] = useState("");

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((response) => {
        setPokemonName(response.data.name);
        setPokemonLogo(response.data.sprites.front_default);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="pokeCard">
      <img src={pokemonLogo} />
      <div className="alignCenter">
        <p>{pokemonName}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
