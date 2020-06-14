import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pokeList">
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
