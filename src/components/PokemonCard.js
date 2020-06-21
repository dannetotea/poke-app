import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PokemonCard = (props) => {
  const pokemon = props.pokemon;
  let history = useHistory();
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImages, setPokemonImages] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((response) => {
        setPokemonName(response.data.name);
        setPokemonImages(response.data.sprites);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="pokeCard"
      onClick={() => {
        history.push(`/${pokemonName}`);
      }}
    >
      <img src={pokemonImages.front_default} />
      <div className="alignCenter">
        <h3>{pokemonName}</h3>
      </div>
    </div>
  );
};

export default PokemonCard;
