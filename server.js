require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});



// Index
app.get('/pokemon', async (req, res) => {
    try {
      const foundPokemon = await pokemon.find({});
      console.log(foundPokemon);
      res.status(200).render('pokemon/Index', {
        pokemons: foundPokemon,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });

// New
app.get('/pokemon/new', (req, res) => {
    console.log('New controller');
    res.render('pokemon/New');
  });

// Create
  app.post('/pokemon', async (req, res) => {
    try {
  
      const createdPokemon = await pokemon.create(req.body);
      res.status(201).redirect('/pokemon');
    } catch (err) {
      res.status(400).send(err);
    }
  });


  // Show
app.get('/pokemon/:id', async (req, res) => {
    try {
      const foundPokemon = await pokemon.findById(req.params.id)

  res.render('pokemon/Show', {
    pokemon: foundPokemon,
    pokemon: pokemon[req.params.id],
  });
  
    } catch (err) {
      res.status(400).send(err);
    }});



    
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });




















// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const pokemon = require('./models/pokemon');



// app.get("/", (req, res) =>{
//     res.send(<h1> Welcome to the pokemon App! </h1>)
// });

// app.get('/pokemon', (res, req) => {
//     res.send(pokemon)
// });

// app.get('pokemon/:id', (req, res) =>{
//     res.send(req.params.id)
// });

// app.listen(PORT, () => {
//     console.log(`Listening on port: ${PORT}`);
//   });























// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const pokemon = require('./models/pokemon');



// app.get("/", (req, res) =>{
//     res.send(<h1> Welcome to the pokemon App! </h1>)
// });

// app.get('/pokemon', (res, req) => {
//     res.send(pokemon)
// });

// app.get('pokemon/:id', (req, res) =>{
//     res.send(req.params.id)
// });

// app.listen(PORT, () => {
//     console.log(`Listening on port: ${PORT}`);
//   });