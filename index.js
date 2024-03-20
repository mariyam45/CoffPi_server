const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(" coffee shop open");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const selectedChefs = chefs.find((n) => n.id == id);
  res.send(selectedChefs);
});

// app.get("/chefs/:id/:recipes", (req, res) => {
//   const recipes = req.params.recipes;
//   // console.log(recipes);
//   const allRecipes = find((n) => n.recipes == recipes);
//   res.send(allRecipes);
// });

app.listen(port, () => {
  console.log(`coffee shop on port : ${port}`);
});
