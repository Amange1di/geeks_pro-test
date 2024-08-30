import  { useEffect, useState } from "react";
import Card from "./components/card/Cart";
import axios from "axios";

const api_url = " https://pokeapi.co/api/v2/pokemon/ ";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const Pokemonapi = async () => {
    const res = await axios.get(api_url);
    getPokemon(res.data.results);
  };

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    console.log(pokemonData , "---data---");
    setPokemons(pokemonData);
  };


  useEffect(() => {
    Pokemonapi();
  }, []);

  return (
    <div>
      <div className="container">
        <Card pokemon={pokemons} />
      </div>
    </div>
  );
};

export default App;
