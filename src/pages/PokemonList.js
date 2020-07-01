import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemonList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const filteredPokemonList = pokemonList.filter((pokemon) => {
    return pokemon.name.includes(search.toLowerCase());
  });

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
        {filteredPokemonList.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
};

export default PokemonList;
