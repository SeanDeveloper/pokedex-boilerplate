const express = require("express");
const morgan = require("morgan");
const pokeBank = require("./pokeBank");
const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const pokemonList = pokeBank.list();
  let html = `
  <head>
  <title>My Pokedex</title>
  <link rel="stylesheet" href="/style.css" />
  </head>
    <h1>Pokedex</h1>`;
  pokemonList.forEach((pokemon) => {
    
    html += `<p><a href="/pokemon/${pokemon.id}">${pokemon.name}</a></p>`;
  });
  res.send(html);
});

app.get("/pokemon/:id", (req, res) => {
  const pokemon = pokeBank.find(req.params.id);
  if (!pokemon) {
    res.status(404).send("Pokemon not found");
  } else {
    let html = `<h1>${pokemon.name}</h1>`;
    html += `<p>Type: ${pokemon.type}</p>`;
    html += `<p>Trainer: ${pokemon.trainer}</p>`;
    html += `<p>Date: ${pokemon.date}</p>`;
    res.send(html);
  }
});

app.get("/pokemon/:id", (req, res, next) => {
  const id = req.params.id;
  const post = pokeeBank.find(id);
  if (!pokemon.id) {
    res.status(404);
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Pokedex</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Pokedex</header>
      <div class="not-found">
        <p>Pika pika... Page Not Found</p>
        <img src="/pikachu-404.gif" />
      </div>
    </body>
    </html>`;
    res.send(html);
  } else {
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});