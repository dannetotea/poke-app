import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  const pokemon = props.pokemon;
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
    <>
      <Link to={`/details/${pokemonName}`}>
        <div className="pokeCard">
          <img src={pokemonImages.front_default} />
          <div className="alignCenter">
            <h3>{pokemonName}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PokemonCard;
