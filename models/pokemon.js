const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    
    img: String,
   
  },
  {
    timestamps: true,
  }
);

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;









// const pokemon = [
//     {name: "Bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
//     {name: "Ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
//     {name: "Venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
//     {name: "Charmander", img: "http://img.pokemondb.net/artwork/charmander"},
//     {name: "Charizard", img: "http://img.pokemondb.net/artwork/charizard"},
//     {name: "Squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//     {name: "Wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
//  ];


 
// module.exports = pokemon;