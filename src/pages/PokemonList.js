import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
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
  const handleInputChange = (event) => {
    const query = event.target.value;
    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.includes(query)
    );
    setFilteredPokemonList(filteredPokemonList);
  };

  return (
    <>
      <div className="displaySearch">
        <input
          className="search"
          placeholder="Search"
          onChange={(event) => {
            handleInputChange(event);
          }}
        />
      </div>
      <div className="pokeList">
        {filteredPokemonList.length
          ? filteredPokemonList.map((pokemon) => {
              return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
            })
          : pokemonList.map((pokemon) => {
              return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
            })}
      </div>
    </>
  );
};

export default PokemonList;
