const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');



app.get("/", (req, res) =>{
    res.send(<h1> Welcome to the pokemon App! </h1>)
});

app.get('/pokemon', (res, req) => {
    res.send(pokemon)
});

app.get('pokemon/:id', (req, res) =>{
    res.send(req.params.id)
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });