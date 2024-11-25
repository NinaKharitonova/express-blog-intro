const express = require("express");
const app = express();
const port = 3000;

//Creiamo il progetto base con una rotta
app.get("/", (req, res) => {
  res.json("Server del mio blog");
});

// Avvia il server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
