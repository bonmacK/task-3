const express = require("express");
const database = require("./database");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//CRUD

//create
app.post("/items", (req, res) => {
  const { name } = req.body;
  database.createItem(name, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

//read

app.get("/items", (req, res) => {
  database.getItem((err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.put("/items", (req, res) => {
  database.createItem((err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  database.deleteItem(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
